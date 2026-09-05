async function checkConcepts(page) {
  const base = 'http://localhost:5173/design/concepts/index.html'
  const errors = []
  const results = []
  page.on('pageerror', (error) => errors.push(error.message))
  const check = (condition, message) => {
    if (!condition) throw new Error(message)
  }

  await page.goto(base)
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const width of [1280, 820, 390, 320]) {
    await page.setViewportSize({ width, height: width < 500 ? 844 : 900 })
    for (const concept of ['golden-hour', 'little-world', 'field-notes']) {
      await page.locator(`.concept-switcher [data-select="${concept}"]`).click()
      await page.locator('#scene-image').evaluate((image) => image.decode())
      const state = await page.evaluate(() => ({
        concept: document.body.dataset.concept,
        overflow: document.documentElement.scrollWidth > window.innerWidth,
        heading: document.querySelector('h1').innerText,
        pressed: document.querySelectorAll('.concept-switcher [aria-pressed="true"]').length,
      }))
      check(state.concept === concept, `Wrong concept at ${width}: ${concept}`)
      check(!state.overflow, `Horizontal overflow at ${width}: ${concept}`)
      check(state.pressed === 1, `Ambiguous selection: ${concept}`)
      check(state.heading.trim().length > 0, `Missing heading: ${concept}`)
      results.push(`${width}px ${concept}: image loaded, no overflow, selection correct`)
      if (width === 1280 || width === 390) {
        await page.screenshot({ path: `.playwright-cli/${concept}-${width}.png`, fullPage: true })
      }
    }
  }

  await page.setViewportSize({ width: 1280, height: 900 })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  const golden = page.locator('.concept-switcher [data-select="golden-hour"]')
  await golden.focus()
  await page.keyboard.press('Enter')
  check(
    (await page.evaluate(() => new URL(location.href).searchParams.get('concept'))) ===
      'golden-hour',
    'Keyboard selection failed',
  )
  await page.locator('.concept-switcher [data-select="little-world"]').click()
  await page.goBack()
  check(
    (await page.locator('body').getAttribute('data-concept')) === 'golden-hour',
    'Back did not restore concept',
  )
  await page.goForward()
  check(
    (await page.locator('body').getAttribute('data-concept')) === 'little-world',
    'Forward did not restore concept',
  )
  results.push('Keyboard selection and browser Back/Forward passed')

  await page.locator('#time-toggle').click()
  check((await page.locator('#time-label').innerText()) === 'Blue hour', 'Blue hour toggle failed')
  await page.locator('#motion-toggle').click()
  check(
    await page.locator('body').evaluate((body) => body.classList.contains('motion-paused')),
    'Pause failed',
  )
  await page.locator('.concept-switcher [data-select="field-notes"]').click()
  check(
    (await page.locator('#time-toggle').getAttribute('aria-pressed')) === 'true',
    'Time state lost on concept change',
  )
  check(
    (await page.locator('#motion-toggle').getAttribute('aria-pressed')) === 'true',
    'Motion state lost on concept change',
  )
  await page.locator('#motion-toggle').click()
  check((await page.locator('#motion-label').innerText()) === 'Pause motion', 'Resume failed')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.locator('#motion-toggle:disabled').waitFor()
  check(
    (await page
      .locator('.fireflies i')
      .first()
      .evaluate((element) => getComputedStyle(element).animationName)) === 'none',
    'Animation still running with reduced motion',
  )
  results.push('Time toggle, pause/resume, retained settings, and reduced motion passed')

  await page.locator('.family-link').click()
  const familyVisible = await page.locator('#family').evaluate((element) => {
    const box = element.getBoundingClientRect()
    return box.top >= 0 && box.top < window.innerHeight
  })
  check(familyVisible, 'Family link did not reach family section')
  await page.locator('.direction-card[data-select="little-world"]').click()
  check(
    await page
      .locator('.concept-switcher [data-select="little-world"]')
      .evaluate((element) => element === document.activeElement),
    'Gallery did not move keyboard focus to concept selector',
  )
  results.push('Family anchor and gallery selection/focus passed')

  await page.goto(`${base}?concept=unknown`)
  check(
    (await page.locator('body').getAttribute('data-concept')) === 'golden-hour',
    'Unknown concept fallback failed',
  )
  await page.goto(`${base}?concept=little-world`)
  check(
    (await page.locator('body').getAttribute('data-concept')) === 'little-world',
    'Direct concept URL failed',
  )
  check(errors.length === 0, `Browser errors: ${errors.join('; ')}`)
  results.push('Direct URLs, invalid URL fallback, and zero page errors passed')
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  console.log(JSON.stringify(results, null, 2))
}
