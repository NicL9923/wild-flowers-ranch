const FLOWER_PALETTES = {
  spring: ['cream', 'pink', 'lav', 'yellow', 'white', 'coral'],
  summer: ['yellow', 'coral', 'pink', 'cream', 'lav', 'white'],
  autumn: ['coral', 'yellow', 'cream', 'pink', 'coral', 'cream'],
}

const COLOR = {
  cream: 'var(--bloom-cream)',
  pink: 'var(--bloom-pink)',
  lav: 'var(--bloom-lav)',
  yellow: 'var(--bloom-yellow)',
  coral: 'var(--bloom-coral)',
  white: 'var(--bloom-white)',
}

const BRANCHES = [
  {
    d: 'M 690 730 C 600 740, 480 770, 360 850 C 300 890, 280 905, 260 915',
    delay: 1.05,
    dur: 1.6,
    w: 14,
    group: 'low',
  },
  {
    d: 'M 712 730 C 800 740, 920 770, 1040 850 C 1100 890, 1120 905, 1140 915',
    delay: 1.05,
    dur: 1.6,
    w: 14,
    group: 'low',
  },
  { d: 'M 470 800 C 455 830, 445 855, 440 880', delay: 2.1, dur: 0.9, w: 5, group: 'low' },
  { d: 'M 380 838 C 380 870, 384 890, 388 905', delay: 2.2, dur: 0.9, w: 4, group: 'low' },
  { d: 'M 930 800 C 945 830, 955 855, 960 880', delay: 2.1, dur: 0.9, w: 5, group: 'low' },
  { d: 'M 1020 838 C 1020 870, 1016 890, 1012 905', delay: 2.2, dur: 0.9, w: 4, group: 'low' },
  { d: 'M 540 760 C 510 720, 470 690, 420 660', delay: 1.9, dur: 1.0, w: 7, group: 'low' },
  { d: 'M 860 760 C 890 720, 930 690, 980 660', delay: 1.9, dur: 1.0, w: 7, group: 'low' },
  {
    d: 'M 686 600 C 600 580, 480 540, 360 470 C 320 450, 290 440, 260 432',
    delay: 1.35,
    dur: 1.55,
    w: 12,
    group: 'mid',
  },
  {
    d: 'M 716 600 C 802 580, 920 540, 1040 470 C 1080 450, 1110 440, 1140 432',
    delay: 1.35,
    dur: 1.55,
    w: 12,
    group: 'mid',
  },
  { d: 'M 480 540 C 460 510, 440 480, 420 460', delay: 2.4, dur: 0.9, w: 6, group: 'mid' },
  { d: 'M 920 540 C 940 510, 960 480, 980 460', delay: 2.4, dur: 0.9, w: 6, group: 'mid' },
  { d: 'M 600 580 C 580 540, 560 510, 540 488', delay: 2.5, dur: 0.8, w: 5, group: 'mid' },
  { d: 'M 800 580 C 820 540, 840 510, 860 488', delay: 2.5, dur: 0.8, w: 5, group: 'mid' },
  {
    d: 'M 680 490 C 620 440, 560 380, 500 320 C 470 290, 450 270, 430 252',
    delay: 1.65,
    dur: 1.45,
    w: 10,
    group: 'up',
  },
  {
    d: 'M 720 490 C 780 440, 840 380, 900 320 C 930 290, 950 270, 970 252',
    delay: 1.65,
    dur: 1.45,
    w: 10,
    group: 'up',
  },
  { d: 'M 696 470 C 670 380, 640 290, 610 200', delay: 1.85, dur: 1.4, w: 9, group: 'up' },
  { d: 'M 704 470 C 730 380, 760 290, 790 200', delay: 1.85, dur: 1.4, w: 9, group: 'up' },
  { d: 'M 580 360 C 555 320, 530 280, 510 250', delay: 2.7, dur: 0.85, w: 5, group: 'up' },
  { d: 'M 820 360 C 845 320, 870 280, 890 250', delay: 2.7, dur: 0.85, w: 5, group: 'up' },
  { d: 'M 660 320 C 640 270, 625 230, 615 200', delay: 2.85, dur: 0.85, w: 4, group: 'up' },
  { d: 'M 740 320 C 760 270, 775 230, 785 200', delay: 2.85, dur: 0.85, w: 4, group: 'up' },
]

const CANOPY = [
  { cx: 700, cy: 220, rx: 380, ry: 160, fill: 'leaf-3', delay: 2.9, op: 0.85 },
  { cx: 410, cy: 280, rx: 230, ry: 170, fill: 'leaf-3', delay: 3.0, op: 0.85 },
  { cx: 990, cy: 280, rx: 230, ry: 170, fill: 'leaf-3', delay: 3.0, op: 0.85 },
  { cx: 250, cy: 380, rx: 170, ry: 130, fill: 'leaf-3', delay: 3.2, op: 0.8 },
  { cx: 1150, cy: 380, rx: 170, ry: 130, fill: 'leaf-3', delay: 3.2, op: 0.8 },
  { cx: 560, cy: 240, rx: 200, ry: 150, fill: 'leaf-1', delay: 3.3, op: 0.95 },
  { cx: 840, cy: 240, rx: 200, ry: 150, fill: 'leaf-1', delay: 3.3, op: 0.95 },
  { cx: 700, cy: 130, rx: 230, ry: 130, fill: 'leaf-1', delay: 3.45, op: 1 },
  { cx: 360, cy: 360, rx: 160, ry: 130, fill: 'leaf-1', delay: 3.55, op: 0.95 },
  { cx: 1040, cy: 360, rx: 160, ry: 130, fill: 'leaf-1', delay: 3.55, op: 0.95 },
  { cx: 280, cy: 500, rx: 130, ry: 110, fill: 'leaf-1', delay: 3.7, op: 0.95 },
  { cx: 1120, cy: 500, rx: 130, ry: 110, fill: 'leaf-1', delay: 3.7, op: 0.95 },
  { cx: 200, cy: 600, rx: 100, ry: 90, fill: 'leaf-3', delay: 3.85, op: 0.85 },
  { cx: 1200, cy: 600, rx: 100, ry: 90, fill: 'leaf-3', delay: 3.85, op: 0.85 },
  { cx: 350, cy: 640, rx: 90, ry: 80, fill: 'leaf-1', delay: 4.0, op: 0.92 },
  { cx: 1050, cy: 640, rx: 90, ry: 80, fill: 'leaf-1', delay: 4.0, op: 0.92 },
  { cx: 470, cy: 580, rx: 105, ry: 90, fill: 'leaf-3', delay: 4.05, op: 0.85 },
  { cx: 930, cy: 580, rx: 105, ry: 90, fill: 'leaf-3', delay: 4.05, op: 0.85 },
  { cx: 600, cy: 280, rx: 110, ry: 90, fill: 'leaf-2', delay: 3.5, op: 0.5 },
  { cx: 800, cy: 280, rx: 110, ry: 90, fill: 'leaf-2', delay: 3.5, op: 0.5 },
  { cx: 480, cy: 400, rx: 90, ry: 80, fill: 'leaf-2', delay: 3.8, op: 0.45 },
  { cx: 920, cy: 400, rx: 90, ry: 80, fill: 'leaf-2', delay: 3.8, op: 0.45 },
  { cx: 700, cy: 90, rx: 80, ry: 50, fill: 'leaf-3', delay: 4.2, op: 0.7 },
  { cx: 580, cy: 170, rx: 60, ry: 45, fill: 'leaf-3', delay: 4.3, op: 0.6 },
  { cx: 820, cy: 170, rx: 60, ry: 45, fill: 'leaf-3', delay: 4.3, op: 0.6 },
]

const GRASS = [
  { x: 540, dx: -8 },
  { x: 555, dx: 4 },
  { x: 570, dx: -6 },
  { x: 720, dx: 6 },
  { x: 735, dx: -3 },
  { x: 750, dx: 5 },
  { x: 765, dx: -8 },
  { x: 600, dx: 2 },
  { x: 640, dx: -5 },
  { x: 660, dx: 7 },
  { x: 685, dx: -4 },
  { x: 800, dx: 3 },
  { x: 820, dx: -7 },
]

function buildFlowers(palette, density) {
  const palettes = FLOWER_PALETTES[palette] || FLOWER_PALETTES.spring
  const positions = [
    { x: 90, h: 220, type: 'spike', c: palettes[2], lean: -3 },
    { x: 150, h: 180, type: 'cluster', c: palettes[0], lean: 2 },
    { x: 215, h: 240, type: 'daisy', c: palettes[3], lean: -1 },
    { x: 280, h: 195, type: 'spike', c: palettes[2], lean: 4 },
    { x: 340, h: 230, type: 'cluster', c: palettes[5], lean: -2 },
    { x: 410, h: 260, type: 'daisy', c: palettes[1], lean: 1 },
    { x: 480, h: 210, type: 'bell', c: palettes[2], lean: -3 },
    { x: 545, h: 245, type: 'cluster', c: palettes[0], lean: 2 },
    { x: 615, h: 200, type: 'spike', c: palettes[4], lean: -1 },
    { x: 785, h: 200, type: 'spike', c: palettes[2], lean: 1 },
    { x: 855, h: 245, type: 'cluster', c: palettes[3], lean: -2 },
    { x: 920, h: 210, type: 'bell', c: palettes[1], lean: 3 },
    { x: 990, h: 260, type: 'daisy', c: palettes[0], lean: -1 },
    { x: 1060, h: 230, type: 'cluster', c: palettes[5], lean: 2 },
    { x: 1120, h: 195, type: 'spike', c: palettes[2], lean: -4 },
    { x: 1185, h: 240, type: 'daisy', c: palettes[1], lean: 1 },
    { x: 1250, h: 180, type: 'cluster', c: palettes[0], lean: -2 },
    { x: 1310, h: 220, type: 'spike', c: palettes[3], lean: 3 },
  ]
  return density === 'sparse' ? positions.filter((_, i) => i % 2 === 0) : positions
}

const Bloom = ({ x, y, c, type, delay }) => {
  const color = COLOR[c] || COLOR.cream
  const style = { '--cx': `${x}px`, '--cy': `${y}px`, '--delay': `${delay}s` }

  if (type === 'daisy') {
    const petals = Array.from({ length: 7 }, (_, i) => {
      const a = (i * 360) / 7
      const rad = (a * Math.PI) / 180
      const px = x + Math.cos(rad) * 11
      const py = y + Math.sin(rad) * 11
      return (
        <ellipse
          key={i}
          cx={px}
          cy={py}
          rx={6}
          ry={9}
          fill={color}
          transform={`rotate(${a} ${px} ${py})`}
        />
      )
    })
    return (
      <g className="bloom" style={style}>
        {petals}
        <circle cx={x} cy={y} r={5} fill="var(--bloom-yellow)" />
        <circle cx={x} cy={y} r={2.2} fill="oklch(0.5 0.1 60)" />
      </g>
    )
  }

  if (type === 'cluster') {
    const dots = [
      [0, 0],
      [-7, -3],
      [7, -3],
      [-4, -9],
      [4, -9],
      [0, -12],
      [-10, 2],
      [10, 2],
      [-6, 6],
      [6, 6],
      [0, 7],
      [-12, -6],
      [12, -6],
    ].map(([dx, dy], i) => <circle key={i} cx={x + dx} cy={y + dy} r={2.6} fill={color} />)
    return (
      <g className="bloom" style={style}>
        {dots}
      </g>
    )
  }

  if (type === 'spike') {
    const ovals = Array.from({ length: 8 }, (_, i) => (
      <ellipse
        key={i}
        cx={x + (i % 2 === 0 ? -3 : 3)}
        cy={y - i * 7}
        rx={4}
        ry={4.5}
        fill={color}
        opacity={0.85 - i * 0.04}
      />
    ))
    return (
      <g className="bloom" style={style}>
        {ovals}
      </g>
    )
  }

  if (type === 'bell') {
    const bells = Array.from({ length: 4 }, (_, i) => {
      const by = y + i * 8
      const bx = x + (i % 2 === 0 ? -5 : 5)
      return (
        <path
          key={i}
          d={`M ${bx - 5} ${by - 4} Q ${bx} ${by - 7}, ${bx + 5} ${by - 4} Q ${bx + 4} ${by + 4}, ${bx} ${by + 5} Q ${bx - 4} ${by + 4}, ${bx - 5} ${by - 4} Z`}
          fill={color}
          opacity={0.92}
        />
      )
    })
    return (
      <g className="bloom" style={style}>
        {bells}
      </g>
    )
  }

  return null
}

const Flower = ({ flower, idx }) => {
  const { x, h, type, c, lean } = flower
  const baseY = 1000
  const tipY = baseY - h
  const tipX = x + lean * 6
  const ctlX = x + lean * 3
  const ctlY = baseY - h * 0.55
  const stemDelay = 1.0 + idx * 0.08
  const bloomDelay = stemDelay + 0.8
  const leafY1 = baseY - h * 0.4
  const leafY2 = baseY - h * 0.7

  return (
    <g>
      <path
        className="stem"
        pathLength="1"
        d={`M ${x} ${baseY} Q ${ctlX} ${ctlY}, ${tipX} ${tipY}`}
        strokeWidth={2}
        style={{ '--delay': `${stemDelay}s` }}
      />
      {idx % 2 === 0 && (
        <>
          <ellipse
            className="leaf-tiny"
            cx={x - 7}
            cy={leafY1}
            rx={6}
            ry={3}
            fill="var(--leaf-1)"
            transform={`rotate(-30 ${x - 7} ${leafY1})`}
            style={{
              '--cx': `${x - 7}px`,
              '--cy': `${leafY1}px`,
              '--delay': `${stemDelay + 0.4}s`,
            }}
          />
          <ellipse
            className="leaf-tiny"
            cx={x + 7}
            cy={leafY2}
            rx={5}
            ry={2.5}
            fill="var(--leaf-2)"
            transform={`rotate(30 ${x + 7} ${leafY2})`}
            style={{
              '--cx': `${x + 7}px`,
              '--cy': `${leafY2}px`,
              '--delay': `${stemDelay + 0.55}s`,
            }}
          />
        </>
      )}
      <Bloom x={tipX} y={tipY} c={c} type={type} delay={bloomDelay} />
    </g>
  )
}

const GrassTuft = ({ x, dx, idx }) => {
  const baseY = 1000
  const h = 18 + (idx % 3) * 6
  return (
    <path
      className="grass-blade"
      d={`M ${x} ${baseY} Q ${x + dx} ${baseY - h * 0.6}, ${x + dx * 1.3} ${baseY - h}`}
      stroke="var(--leaf-2)"
      strokeWidth={1.6}
      strokeLinecap="round"
      fill="none"
      style={{
        '--cx': `${x}px`,
        '--cy': `${baseY}px`,
        '--delay': `${0.5 + idx * 0.05}s`,
        transformOrigin: `${x}px ${baseY}px`,
      }}
    />
  )
}

const Trunk = () => (
  <g>
    <path
      className="trunk-fill"
      d="M 670 1000 C 668 950, 665 900, 670 850 C 674 800, 678 760, 686 720
         C 690 680, 690 640, 692 600 C 694 560, 695 520, 696 470
         L 704 470 C 705 520, 706 560, 708 600 C 710 640, 710 680, 714 720
         C 722 760, 726 800, 730 850 C 735 900, 732 950, 730 1000 Z"
      fill="var(--bark)"
      style={{ transformOrigin: '700px 1000px' }}
    />
    <path
      className="trunk-fill"
      d="M 685 1000 C 686 940, 686 870, 690 800 C 694 730, 696 660, 698 580
         C 699 530, 700 490, 700 470"
      stroke="var(--bark-deep)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      style={{ transformOrigin: '700px 1000px', animationDelay: '0.3s' }}
    />
    <path
      className="trunk-fill"
      d="M 600 1000 C 630 990, 660 985, 670 985 L 670 1000 Z"
      fill="var(--bark)"
      style={{
        transformOrigin: '630px 1000px',
        animationDelay: '0.05s',
        animationDuration: '0.9s',
      }}
    />
    <path
      className="trunk-fill"
      d="M 800 1000 C 770 990, 740 985, 730 985 L 730 1000 Z"
      fill="var(--bark)"
      style={{
        transformOrigin: '770px 1000px',
        animationDelay: '0.05s',
        animationDuration: '0.9s',
      }}
    />
  </g>
)

const Branches = () => (
  <g>
    {BRANCHES.map((b, i) => (
      <path
        key={i}
        className="branch-stroke"
        d={b.d}
        pathLength="1"
        strokeWidth={b.w}
        style={{ '--delay': `${b.delay}s`, '--dur': `${b.dur}s` }}
      />
    ))}
  </g>
)

const CanopyBlob = ({ cx, cy, rx, ry, fill, delay, op }) => (
  <ellipse
    className="canopy-blob"
    cx={cx}
    cy={cy}
    rx={rx}
    ry={ry}
    fill={`var(--${fill})`}
    style={{ '--cx': `${cx}px`, '--cy': `${cy}px`, '--delay': `${delay}s`, opacity: op }}
  />
)

const Canopy = () => (
  <g className="canopy-group">
    {CANOPY.map((c, i) => (
      <CanopyBlob key={i} {...c} />
    ))}
  </g>
)

const Wildflowers = ({ palette, density }) => {
  const flowers = buildFlowers(palette, density)
  return (
    <g>
      {flowers.map((f, i) => (
        <Flower key={`${palette}-${density}-${i}`} flower={f} idx={i} />
      ))}
    </g>
  )
}

const Grass = () => (
  <g>
    {GRASS.map((g, i) => (
      <GrassTuft key={i} x={g.x} dx={g.dx} idx={i} />
    ))}
  </g>
)

export default function TreeScene({ palette = 'spring', density = 'normal', replayKey = 0 }) {
  return (
    <div className="scene" key={replayKey}>
      <svg
        viewBox="0 0 1400 1000"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="trunkShade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.42 0.05 50)" />
            <stop offset="100%" stopColor="oklch(0.32 0.045 45)" />
          </radialGradient>
        </defs>
        <Trunk />
        <Branches />
        <Wildflowers palette={palette} density={density} />
        <Grass />
        <Canopy />
      </svg>
    </div>
  )
}
