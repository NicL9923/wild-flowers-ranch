import { useState } from 'react'

import { AboutPanel, BouquetsPanel, ContactPanel, VisitPanel } from './components/Panels'
import TreeScene from './components/TreeScene'
import {
  TweakButton,
  TweakRadio,
  TweakSection,
  TweakText,
  TweakToggle,
  TweaksPanel,
  useTweaks,
} from './components/TweaksPanel'

const TABS = [
  { id: 'about', label: 'About Us', Panel: AboutPanel },
  { id: 'visit', label: 'Visit', Panel: VisitPanel },
  { id: 'bouquets', label: 'Bouquets', Panel: BouquetsPanel },
  { id: 'contact', label: 'Contact Us', Panel: ContactPanel },
]

const TWEAK_DEFAULTS = {
  season: 'spring',
  density: 'normal',
  tagline: 'A working flower farm at the edge of the valley.',
  showEyebrow: true,
}

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS)
  const [active, setActive] = useState('about')
  const [replayKey, setReplayKey] = useState(0)

  const { Panel } = TABS.find((t) => t.id === active)

  return (
    <div className="page">
      <section className="top">
        <div className="heading-block">
          {tweaks.showEyebrow && <div className="eyebrow">Est. 1962 · Bridgeport, OR</div>}
          <h1 className="title">
            Wild Flowers
            <br />
            <em>Ranch</em>
          </h1>
          <div className="tagline">{tweaks.tagline}</div>
        </div>

        <TreeScene palette={tweaks.season} density={tweaks.density} replayKey={replayKey} />
      </section>

      <section className="bottom">
        <div className="bottom-inner">
          <nav className="tab-bar">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                className={`tab ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                <span className="tab-num">0{i + 1}</span>
                {t.label}
              </button>
            ))}
          </nav>
          <div key={active}>
            <Panel />
          </div>
          <div className="footer-row">
            <span>Wild Flowers Ranch · 1148 County Rd 7</span>
            <span>© {new Date().getFullYear()} · Hand-cut at first light</span>
          </div>
        </div>
      </section>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Season">
          <TweakRadio
            label="Bloom palette"
            value={tweaks.season}
            options={[
              { value: 'spring', label: 'Spring' },
              { value: 'summer', label: 'Summer' },
              { value: 'autumn', label: 'Autumn' },
            ]}
            onChange={(v) => setTweak('season', v)}
          />
        </TweakSection>
        <TweakSection label="Wildflowers">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
              { value: 'sparse', label: 'Sparse' },
              { value: 'normal', label: 'Normal' },
              { value: 'lush', label: 'Lush' },
            ]}
            onChange={(v) => setTweak('density', v)}
          />
          <TweakButton label="Re-grow tree" onClick={() => setReplayKey((k) => k + 1)} />
        </TweakSection>
        <TweakSection label="Heading">
          <TweakToggle
            label="Show eyebrow line"
            value={tweaks.showEyebrow}
            onChange={(v) => setTweak('showEyebrow', v)}
          />
          <TweakText
            label="Tagline"
            value={tweaks.tagline}
            onChange={(v) => setTweak('tagline', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  )
}
