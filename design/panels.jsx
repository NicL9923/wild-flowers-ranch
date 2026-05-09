// Tab content panels for the bottom half

const AboutPanel = () => (
  <div className="panel">
    <div>
      <h2><em>A small ranch</em><br/>tucked into the hills.</h2>
      <p>
        Wild Flowers Ranch is a six-acre working flower farm at the edge of
        the valley. We grow seasonal blooms without synthetic pesticides,
        cut by hand at first light, and arrange them in our open-air barn
        the same morning.
      </p>
      <p>
        The ranch has been in the family for three generations. We started
        as a hay operation in 1962 and turned the upper field over to flowers
        in 2009. These days you'll find us tending dahlias, ranunculus,
        cosmos, snapdragons, and a stubborn patch of sweet peas the deer
        keep finding.
      </p>
      <div className="cta-row">
        <button className="cta">Plan your visit</button>
        <button className="cta ghost">Read our story</button>
      </div>
    </div>
    <div className="info-grid">
      <div>
        <div className="label">Founded</div>
        <div className="value">1962<small>Flowers since 2009</small></div>
      </div>
      <div>
        <div className="label">Acreage</div>
        <div className="value">6 acres<small>Working farm</small></div>
      </div>
      <div>
        <div className="label">Growing</div>
        <div className="value">42 varieties<small>Spring → first frost</small></div>
      </div>
      <div>
        <div className="label">Practices</div>
        <div className="value">No-spray<small>Hand-cut, hand-arranged</small></div>
      </div>
    </div>
  </div>
);

const VisitPanel = () => (
  <div className="panel">
    <div>
      <h2><em>Come walk</em><br/>the long row.</h2>
      <p>
        The U-pick rows open the second weekend of May and run through
        the first hard frost. Bring a pair of scissors or borrow ours.
        Buckets, twine, and shade are on the house.
      </p>
      <p>
        We're at the end of County Road 7, fifteen minutes off the
        highway. Park in the gravel lot by the old hay barn — you'll
        smell the lavender before you see it.
      </p>
      <div className="cta-row">
        <button className="cta">Get directions</button>
        <button className="cta ghost">Reserve a tour</button>
      </div>
    </div>
    <div className="visit-card">
      <h3>Hours &amp; field days</h3>
      <ul className="schedule">
        <li><span className="day">Monday</span><span>By appointment</span></li>
        <li><span className="day">Tuesday</span><span>9 am – 4 pm</span></li>
        <li><span className="day">Wednesday</span><span>9 am – 4 pm</span></li>
        <li><span className="day">Thursday</span><span>9 am – 4 pm</span></li>
        <li><span className="day">Friday</span><span>9 am – 6 pm</span></li>
        <li><span className="day">Saturday</span><span>8 am – 6 pm</span></li>
        <li className="closed"><span className="day">Sunday</span><span>Closed — resting fields</span></li>
      </ul>
    </div>
  </div>
);

const BouquetsPanel = () => (
  <div className="panel" style={{ gridTemplateColumns: '1fr', gap: 32 }}>
    <div>
      <h2><em>Bouquets &amp;</em> standing orders.</h2>
      <p>
        Pick up a wrapped bunch from the barn during open hours, or
        subscribe to weekly delivery within twenty miles. Wedding and
        event flowers are booked from January.
      </p>
    </div>
    <div className="bouquet-grid">
      <div className="bouquet">
        <div className="swatch" style={{
          background: 'linear-gradient(135deg, var(--bloom-cream) 0%, var(--bloom-pink) 50%, var(--bloom-coral) 100%)'
        }}/>
        <h4>The Field Bunch</h4>
        <div className="price">$28 · weekly</div>
        <p>What's blooming today, wrapped in butcher paper. Mixed seasonal stems.</p>
      </div>
      <div className="bouquet">
        <div className="swatch" style={{
          background: 'linear-gradient(135deg, var(--bloom-lav) 0%, var(--bloom-white) 60%, var(--bloom-cream) 100%)'
        }}/>
        <h4>The Pantry</h4>
        <div className="price">$48 · weekly</div>
        <p>A larger arrangement for kitchens and entryways. In a recycled glass jar.</p>
      </div>
      <div className="bouquet">
        <div className="swatch" style={{
          background: 'linear-gradient(135deg, var(--bloom-yellow) 0%, var(--bloom-coral) 55%, var(--bloom-pink) 100%)'
        }}/>
        <h4>Events &amp; Weddings</h4>
        <div className="price">From $400</div>
        <p>Custom palettes, ceremony pieces, and bud vases for your tables. By inquiry.</p>
      </div>
    </div>
  </div>
);

const ContactPanel = () => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <div className="panel">
      <div>
        <h2><em>Drop us a line.</em></h2>
        <p>
          For wholesale, weddings, or just to ask what's blooming —
          we read everything that lands in the inbox. We answer Tuesday
          through Friday between cuttings.
        </p>
        <div className="info-grid" style={{ borderTop: 'none', paddingTop: 0 }}>
          <div>
            <div className="label">Address</div>
            <div className="value">1148 County Rd 7<small>Bridgeport, OR</small></div>
          </div>
          <div>
            <div className="label">Phone</div>
            <div className="value">(541) 555-0182<small>Tue – Fri, 10 – 4</small></div>
          </div>
          <div>
            <div className="label">Email</div>
            <div className="value">hello@<small>wildflowersranch.farm</small></div>
          </div>
          <div>
            <div className="label">Find us</div>
            <div className="value">@wildflowersranch<small>Instagram &amp; Substack</small></div>
          </div>
        </div>
      </div>
      {submitted ? (
        <div style={{
          background: 'oklch(0.92 0.04 145 / 0.7)',
          border: '1px solid oklch(0.5 0.05 145 / 0.4)',
          padding: '40px 32px',
          borderRadius: 6,
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 24,
          lineHeight: 1.4,
          color: 'oklch(0.22 0.05 145)',
          alignSelf: 'center'
        }}>
          Thanks — we'll write back soon. <br/>In the meantime, the dahlias say hello.
        </div>
      ) : (
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ pointerEvents: 'auto' }}>
          <div className="field">
            <label>Name</label>
            <input type="text" required defaultValue="" placeholder="Your name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" required placeholder="you@email.com" />
          </div>
          <div className="field full">
            <label>What's it about?</label>
            <select defaultValue="">
              <option value="" disabled>Choose a topic…</option>
              <option>A wedding or event</option>
              <option>Weekly bouquet subscription</option>
              <option>Wholesale or floral design</option>
              <option>Visiting the ranch</option>
              <option>Just saying hello</option>
            </select>
          </div>
          <div className="field full">
            <label>Message</label>
            <textarea required placeholder="Tell us a little…" />
          </div>
          <div className="field full">
            <button type="submit" className="cta">Send note</button>
          </div>
        </form>
      )}
    </div>
  );
};

Object.assign(window, { AboutPanel, VisitPanel, BouquetsPanel, ContactPanel });
