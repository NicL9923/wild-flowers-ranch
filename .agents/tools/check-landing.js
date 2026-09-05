async function checkLanding(page) {
  const origin = await page.evaluate(() => location.origin)
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  const check = (condition, message) => {
    if (!condition) throw new Error(message)
  }
  await page.goto(origin)
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.locator('#motion-toggle:disabled').waitFor()
  for (const width of [1280, 820, 390, 320]) {
    await page.setViewportSize({ width, height: 900 })
    await page.locator('#scene-image').evaluate((image) => image.decode())
    check(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      `Overflow at ${width}px`,
    )
    if (width === 1280 || width === 390)
      await page.screenshot({
        path: `.playwright-cli/golden-hour-production-${width}.png`,
        fullPage: true,
      })
  }
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.locator('#motion-toggle:enabled').waitFor()
  await page.locator('#time-toggle').focus()
  await page.keyboard.press('Enter')
  check(
    (await page.locator('#time-label').innerText()) === 'Blue hour',
    'Keyboard blue hour failed',
  )
  await page.locator('#motion-toggle').click()
  check((await page.locator('#motion-label').innerText()) === 'Resume motion', 'Pause failed')
  check(
    (await page
      .locator('.fireflies i')
      .first()
      .evaluate((el) => getComputedStyle(el).animationPlayState)) === 'paused',
    'Fireflies still running',
  )
  await page.locator('#motion-toggle').click()
  await page.locator('#time-toggle').click()
  await page.mouse.move(900, 250)
  check(
    await page.locator('.hero').evaluate((el) => el.style.getPropertyValue('--scene-x') !== ''),
    'Pointer parallax failed',
  )
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.locator('#motion-toggle:disabled').waitFor()
  check(
    (await page
      .locator('.fireflies i')
      .first()
      .evaluate((el) => getComputedStyle(el).animationName)) === 'none',
    'Reduced-motion animation failed',
  )
  await page.locator('.family-link').click()
  check(
    await page
      .locator('#family')
      .evaluate(
        (el) => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().top < innerHeight,
      ),
    'Family anchor failed',
  )
  await page.locator('.site-footer a').click()
  check(await page.evaluate(() => scrollY === 0), 'Return-to-top failed')
  check(errors.length === 0, errors.join('\n'))
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  return {
    passed: true,
    widths: [1280, 820, 390, 320],
    checks: [
      'images',
      'overflow',
      'keyboard',
      'blue hour',
      'pause/resume',
      'parallax',
      'reduced motion',
      'family navigation',
    ],
    pageErrors: errors,
  }
}
