import { type PointerEvent, useEffect, useState } from 'react'

export default function App() {
  const [night, setNight] = useState(false)
  const [manuallyPaused, setManuallyPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const paused = manuallyPaused || reducedMotion

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  function resetScene(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.removeProperty('--scene-x')
    event.currentTarget.style.removeProperty('--scene-y')
  }

  function moveScene(event: PointerEvent<HTMLElement>) {
    if (paused || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty(
      '--scene-x',
      ((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * -12 + 'px',
    )
    event.currentTarget.style.setProperty(
      '--scene-y',
      ((event.clientY - bounds.top - bounds.height / 2) / bounds.height) * -8 + 'px',
    )
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to the ranch
      </a>
      <div
        className={`ranch-page ${night ? 'is-night' : ''} ${paused ? 'motion-paused' : ''}`}
        id="ranch"
      >
        <header className="site-header">
          <a className="brand" href="#ranch" aria-label="Wild Flowers Ranch home">
            <img src="/images/ranch-mark.webp" width="52" height="52" alt="" />
            <span>
              Wild Flowers<span className="brand-ranch">R A N C H</span>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a className="nav-home" href="#ranch" aria-current="page">
              The ranch
            </a>
            <a href="#family">
              Our family <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <span className="header-motto">Integrity &amp; curiosity</span>
        </header>

        <main id="main">
          <section
            className="hero"
            aria-labelledby="hero-title"
            onPointerMove={moveScene}
            onPointerLeave={resetScene}
          >
            <div className="scene" id="scene">
              <img
                className="scene-image"
                id="scene-image"
                src="/images/golden-hour.webp"
                width="1536"
                height="1024"
                alt="A wildflower prairie at sunset, a ranch house with glowing windows, and four chairs around a campfire."
                fetchPriority="high"
              />
              <div className="scene-shade"></div>
              <div className="night-veil"></div>
              <div className="stars" aria-hidden="true">
                {Array.from({ length: 36 }, (_, i) => (
                  <i
                    key={i}
                    style={{ left: ((i * 37 + 3) % 100) + '%', top: ((i * 23 + 7) % 100) + '%' }}
                  />
                ))}
              </div>
              <div className="fireflies" aria-hidden="true">
                {Array.from({ length: 17 }, (_, i) => (
                  <i
                    key={i}
                    style={{
                      left: ((i * 31 + 7) % 100) + '%',
                      top: ((i * 43 + 13) % 100) + '%',
                      animationDelay: -i * 0.8 + 's',
                      animationDuration: 5 + (i % 4) + 's',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-flower" aria-hidden="true">
                  ✳
                </span>{' '}
                Our little corner of the wild
              </p>
              <h1 id="hero-title">
                A little wild.
                <br />
                <em>A lot of home.</em>
              </h1>
              <p className="hero-description" id="hero-description">
                The flowers do their thing. The porch light stays on.
                <br className="desktop-break" /> And there's always a spot by the fire.
              </p>
              <a className="family-link" href="#family">
                Meet our family <span aria-hidden="true">↗</span>
              </a>
              <span className="handwritten-note" id="hero-note">
                Kick off your boots. Stay awhile.
              </span>
            </div>

            <div className="hero-bottom">
              <a className="scroll-cue" href="#family">
                <span aria-hidden="true">↓</span> A little more about us
              </a>
              <div className="scene-controls" role="group" aria-label="Scene settings">
                <button
                  type="button"
                  id="time-toggle"
                  aria-pressed={night}
                  onClick={() => setNight(!night)}
                >
                  <span aria-hidden="true">{night ? '☾' : '☀'}</span>{' '}
                  <span id="time-label">{night ? 'Blue hour' : 'Golden hour'}</span>
                </button>
                <span className="control-divider" aria-hidden="true"></span>
                <button
                  type="button"
                  id="motion-toggle"
                  aria-pressed={paused}
                  disabled={reducedMotion}
                  onClick={() => setManuallyPaused(!manuallyPaused)}
                >
                  <span id="motion-symbol" aria-hidden="true">
                    {paused ? '▷' : 'Ⅱ'}
                  </span>
                  <span id="motion-label">
                    {reducedMotion ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'}
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="family-section" id="family" aria-labelledby="family-title">
            <div className="family-intro">
              <p className="eyebrow">The folks around the fire</p>
              <h2 id="family-title">
                Four of us.
                <br />
                <em>One favorite place.</em>
              </h2>
              <p>
                We're Kim, Isa, Maya, and Nicolas.
                <br />
                Welcome to our family's little place on the internet.
              </p>
            </div>
            <ul className="family-members" aria-label="Our family">
              <li>
                <span className="flower-medallion flower-kim" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <use href="#flower-daisy"></use>
                  </svg>
                </span>
                <h3>Kim</h3>
              </li>
              <li>
                <span className="flower-medallion flower-isa" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <use href="#flower-daisy"></use>
                  </svg>
                </span>
                <h3>Isa</h3>
              </li>
              <li>
                <span className="flower-medallion flower-maya" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <use href="#flower-daisy"></use>
                  </svg>
                </span>
                <h3>Maya</h3>
              </li>
              <li>
                <span className="flower-medallion flower-nicolas" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <use href="#flower-daisy"></use>
                  </svg>
                </span>
                <h3>Nicolas</h3>
              </li>
            </ul>
          </section>
        </main>

        <footer className="site-footer">
          <span>Wild Flowers Ranch</span>
          <span>Rooted in integrity. Growing with curiosity.</span>
          <a href="#ranch">
            Back to the porch <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
      <svg className="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <g id="flower-daisy">
            <path
              d="M51 92Q44 68 51 47M49 77Q25 80 28 64Q40 62 49 77M49 69Q73 68 72 56Q56 55 49 69"
              fill="var(--flower-leaf, #667257)"
              stroke="var(--flower-leaf, #667257)"
              strokeWidth="2"
            ></path>
            <g fill="var(--petal, #cd794e)" stroke="var(--petal-edge, #ad593b)" strokeWidth=".7">
              <ellipse cx="50" cy="28" rx="7" ry="17"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(36 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(72 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(108 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(144 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(180 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(216 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(252 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(288 50 45)"></ellipse>
              <ellipse cx="50" cy="28" rx="7" ry="17" transform="rotate(324 50 45)"></ellipse>
            </g>
            <circle cx="50" cy="45" r="10" fill="#756044"></circle>
            <circle cx="48" cy="43" r="6" fill="var(--flower-center, #d2a655)"></circle>
            <path
              d="M45 41L47 43M51 39L50 42M52 46L54 44M45 47L47 48"
              stroke="#756044"
              strokeWidth="1.8"
              strokeLinecap="round"
            ></path>
          </g>
        </defs>
      </svg>
    </>
  )
}
