const concepts = {
  'golden-hour': {
    name: 'Golden hour',
    title: 'A little wild.<br /><em>A lot of home.</em>',
    description:
      'The flowers do their thing. The porch light stays on.<br class="desktop-break" /> And there\'s always a spot by the fire.',
    note: 'Kick off your boots. Stay awhile.',
    alt: 'A wildflower prairie at sunset, a ranch house with glowing windows, and four chairs around a campfire.',
  },
  'little-world': {
    name: 'Little world',
    title: 'Our own<br /><em>kind of wild.</em>',
    description:
      'A little house. A field of flowers.<br class="desktop-break" /> Our favorite people, all in one place.',
    note: 'Small world. Pretty good company.',
    alt: 'A detailed three-dimensional ranch diorama, with a glowing farmhouse, oak tree, wildflowers, and four chairs around a campfire.',
  },
  'field-notes': {
    name: 'Field notes',
    title: 'Life grows<br /> <em>a little wilder here.</em>',
    description:
      'A place for our family, a few wildflowers, and whatever we discover along the way.',
    note: '',
    alt: 'A painted prairie on textured paper, with red and gold wildflowers, a ranch house with lit windows, and a campfire at sunset.',
  },
}

const body = document.body
const scene = document.querySelector('#scene')
const sceneImage = document.querySelector('#scene-image')
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
const motionButton = document.querySelector('#motion-toggle')
const timeButton = document.querySelector('#time-toggle')
let currentConcept = 'golden-hour'
let manuallyPaused = false

// Use only known concept keys; URL content never becomes HTML or an asset path.
function readConcept() {
  const requested = new URL(window.location.href).searchParams.get('concept')
  return Object.hasOwn(concepts, requested) ? requested : 'golden-hour'
}

function chooseConcept(key, updateHistory = true) {
  if (!Object.hasOwn(concepts, key)) return
  const concept = concepts[key]
  currentConcept = key
  body.dataset.concept = key
  sceneImage.src = `./assets/${key}.webp`
  sceneImage.alt = concept.alt
  document.querySelector('#hero-title').innerHTML = concept.title
  document.querySelector('#hero-description').innerHTML = concept.description
  document.querySelector('#hero-note').textContent = concept.note
  document.title = `${concept.name} · Wild Flowers Ranch`
  document.querySelectorAll('[data-select]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.select === key))
  })
  scene.style.removeProperty('--scene-x')
  scene.style.removeProperty('--scene-y')
  if (updateHistory) {
    const url = new URL(window.location.href)
    url.searchParams.set('concept', key)
    url.hash = ''
    window.history.pushState({ concept: key }, '', url)
    document.querySelector('#concept-announcement').textContent =
      `${concept.name} concept selected.`
  }
}

document.querySelectorAll('[data-select]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.select !== currentConcept) chooseConcept(button.dataset.select)
    if (button.classList.contains('direction-card')) {
      // Keep keyboard focus with the preview after moving away from the cards.
      const selector = document.querySelector(`.concept-switcher [data-select="${currentConcept}"]`)
      selector.focus({ preventScroll: true })
    }
    window.scrollTo({ top: 0, behavior: motionQuery.matches ? 'instant' : 'smooth' })
  })
})
window.addEventListener('popstate', () => chooseConcept(readConcept(), false))

timeButton.addEventListener('click', () => {
  const night = body.classList.toggle('is-night')
  timeButton.setAttribute('aria-pressed', String(night))
  document.querySelector('#time-label').textContent = night ? 'Blue hour' : 'Golden hour'
  timeButton.firstElementChild.textContent = night ? '☾' : '☀'
})

function updateMotion() {
  const paused = manuallyPaused || motionQuery.matches
  body.classList.toggle('motion-paused', paused)
  motionButton.setAttribute('aria-pressed', String(paused))
  motionButton.disabled = motionQuery.matches
  document.querySelector('#motion-label').textContent = motionQuery.matches
    ? 'Reduced motion'
    : paused
      ? 'Resume motion'
      : 'Pause motion'
  document.querySelector('#motion-symbol').textContent = paused ? '▷' : 'Ⅱ'
  if (paused) {
    scene.style.removeProperty('--scene-x')
    scene.style.removeProperty('--scene-y')
  }
}
motionButton.addEventListener('click', () => {
  manuallyPaused = !manuallyPaused
  updateMotion()
})
motionQuery.addEventListener('change', updateMotion)

// A gentle pointer shift gives the artwork depth without requiring a 3D runtime.
document.querySelector('.hero').addEventListener('pointermove', (event) => {
  if (
    motionQuery.matches ||
    manuallyPaused ||
    !pointerQuery.matches ||
    currentConcept === 'field-notes'
  )
    return
  const bounds = event.currentTarget.getBoundingClientRect()
  scene.style.setProperty(
    '--scene-x',
    `${((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * -12}px`,
  )
  scene.style.setProperty(
    '--scene-y',
    `${((event.clientY - bounds.top - bounds.height / 2) / bounds.height) * -8}px`,
  )
})
document.querySelector('.hero').addEventListener('pointerleave', () => {
  scene.style.removeProperty('--scene-x')
  scene.style.removeProperty('--scene-y')
})

// Fixed positions keep each concept repeatable during visual review.
for (let i = 0; i < 17; i += 1) {
  const firefly = document.createElement('i')
  firefly.style.left = `${(i * 31 + 7) % 100}%`
  firefly.style.top = `${(i * 43 + 13) % 100}%`
  firefly.style.animationDelay = `${-i * 0.8}s`
  firefly.style.animationDuration = `${5 + (i % 4)}s`
  document.querySelector('.fireflies').append(firefly)
}
for (let i = 0; i < 36; i += 1) {
  const star = document.createElement('i')
  star.style.left = `${(i * 37 + 3) % 100}%`
  star.style.top = `${(i * 23 + 7) % 100}%`
  document.querySelector('.stars').append(star)
}

chooseConcept(readConcept(), false)
updateMotion()
