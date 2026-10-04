import InquiryForm from "./InquiryForm.jsx";

const WHATSAPP_LINK = "https://wa.me/8613800000000"; // ← 替换成你的 WhatsApp 号码（国际格式，去掉+号）

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Tiers />
        <Process />
        <Factory />
        <Knowledge />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="wa-float" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.8 3.6 1.3 5.7 1.3 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-4.9 1 1-4.7-.3-.5c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.1 10-9.5 10zm5.6-7.3c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.2 2.4.9 2.9.8 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4z" />
        </svg>
      </a>
    </>
  );
}

/* ================= Header ================= */
function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          <span className="mark">A</span>
          <span>
            Altivict
            <small>GOLF HEADWEAR LAB</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#manufacturing">Manufacturing</a>
          <a href="#knowledge">Knowledge</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-primary btn-sm" href="#contact">Get a Quotation</a>
        </nav>
      </div>
    </header>
  );
}

/* ================= Hero ================= */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="tagline">✦ Crafted for the High Ground of Golf</span>
          <h1>
            Custom Eco-Friendly Golf Caps, <span>Engineered at Factory Direct</span>
          </h1>
          <p className="lede">
            Blank golf cap wholesale, OEM/ODM customization, team & tournament programs, functional sport hats
            and AI-ready smart golf cap development — one factory team in Dongguan manages design, sampling,
            production, QC and delivery.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Get Your Factory-Direct Quotation</a>
            <a className="btn btn-ghost" href="#products">Browse Product Series</a>
          </div>
          <div className="hero-badges">
            <div className="badge"><b>Low MOQ</b><span>Sampling supported</span></div>
            <div className="badge"><b>3–7 Days</b><span>Physical samples</span></div>
            <div className="badge"><b>rPET / Organic</b><span>Eco-certified fabrics</span></div>
          </div>
        </div>
        <aside className="hero-card">
          <h3>Wholesale & Custom Inquiry Only</h3>
          <p>No retail shopping cart, no retail pricing. Every series quotes factory trade terms.</p>
          <ul>
            <li>Tiered wholesale pricing for bulk trade</li>
            <li>Free revisions until you approve samples</li>
            <li>EXW / FOB / CIF / DDP shipping terms</li>
            <li>Quote within 24 working hours</li>
          </ul>
          <div className="note-trade">
            B2B trade platform for brands, clubs, tournaments & resellers — not for individual consumers.
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ================= Products ================= */
const PRODUCTS = [
  {
    chip: "Wholesale",
    chipCls: "green",
    title: "Blank Golf Caps — Stock Program",
    desc: "Ready-stock blank golf caps in core fabrics and sizes. Tiered wholesale pricing for bulk trade.",
    items: ["Classic 6-Panel Blank Golf Cap", "Blank Eco Organic Cotton Golf Cap", "240 gsm rPET twill, GRS-certifiable", "Core colors & sizes in stock"],
  },
  {
    chip: "OEM / ODM",
    chipCls: "dark",
    title: "Custom Embroidered Caps",
    desc: "Brand-grade logo decoration: 3D embroidery, flat embroidery, silicone transfer and leather patch — built for golf clubs and apparel brands.",
    items: ["Flat Embroidery + Silicone Logo Golf Cap", "Eco-certified tanning optional", "Custom fabric, trims & accessories", "USD 30–80/style sample, refunded over 1,000 pcs"],
  },
  {
    chip: "Events",
    chipCls: "",
    title: "Team & Tournament Series",
    desc: "Event-ready customization: tournament branding, team colorways, sponsor logos, numbered series and fast re-orders for annual events.",
    items: ["Tournament Pro Series Golf Cap", "Multi-position sponsor logo layout", "Team colorways · rush 12-day production", "Multi-sponsor layout · 21-day delivery"],
  },
  {
    chip: "Women",
    chipCls: "",
    title: "Women Ponytail & Sun Hats",
    desc: "Designed for female golfers: ponytail ports, pony-friendly closures and elegant wide-brim sun protection styles.",
    items: ["Wide Brim Sun Protection Golf Hat", "UPF 50+ wide coverage", "Ponytail-friendly closures", "Ponytail cap series for ladies league"],
  },
  {
    chip: "Performance",
    chipCls: "",
    title: "Functional Sport Golf Hats",
    desc: "Cooling jersey knits with laser perforation for hot-climate golf, and UPF-rated wovens for sun-protection lines.",
    items: ["Laser-vent performance cap, 2 seasonal drops", "UPF-rated woven construction", "Functional knit · quick re-order", "Fabric swatch card before bulk order"],
  },
  {
    chip: "Smart Cap",
    chipCls: "dark",
    title: "AI-Ready Smart Golf Caps",
    desc: "AI-ready smart structure for sports-tech brands: module bay, conductive routing and washable design — under NDA.",
    items: ["Sensor-Bay Structured Golf Cap", "Washable quick-disconnect design", "AI Module Development Platform Hat", "Pilot batches from 500 units"],
  },
];

function Products() {
  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Product Series</span>
          <h2>Golf Cap Series by Scenario & Business Type</h2>
          <p>
            Every series is built for a real use case — wholesale stock programs, brand customization, functional
            performance, tournament events and smart headwear. All orders are quoted trade-only.
          </p>
        </div>
        <div className="grid-3">
          {PRODUCTS.map((p) => (
            <article className="card" key={p.title}>
              <span className={`chip ${p.chipCls}`}>{p.chip}</span>
              <h3>{p.title}</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{p.desc}</p>
              <ul>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Wholesale tiers ================= */
function Tiers() {
  return (
    <section className="section alt" id="tiers">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Bulk Pricing</span>
          <h2>Wholesale Tiered Discount Structure</h2>
          <p>Transparent trade pricing tiers for blank stock programs — the more you commit, the better your unit economics.</p>
        </div>
        <table className="tiers">
          <thead>
            <tr>
              <th>Order Quantity</th>
              <th>Tier</th>
              <th>Discount vs List</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><b>300 – 999 pcs</b></td><td>Tier 1</td><td>Trade base price</td><td>Mixed styles &amp; colors allowed</td></tr>
            <tr><td><b>1,000 – 2,999 pcs</b></td><td>Tier 2</td><td>−5%</td><td>Sample fee fully refunded</td></tr>
            <tr><td><b>3,000 – 9,999 pcs</b></td><td>Tier 3</td><td>−9%</td><td>Dedicated production slot</td></tr>
            <tr><td><b>10,000+ pcs</b></td><td>Tier 4</td><td>−13%</td><td>Annual program pricing &amp; reserved capacity</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14, fontSize: 13, color: "var(--ink-soft)" }}>
          Customization levels: choose from existing hat styles · logo customization only (embroidery / print / patch) · full ODM new-style development · custom fabric, trims and accessories · reserved smart-cap structure option.
        </p>
      </div>
    </section>
  );
}

/* ================= Process ================= */
const STEPS = [
  { t: "Send Requirement", d: "Send artwork, target quantity and deadline. We confirm fabric, colors, crafts and structure — and quote within 24h." },
  { t: "Sampling", d: "Physical samples in 3–7 days with multi-angle photos and videos. Free revisions until you approve. Sample fee USD 30–80/style, refunded over 1,000 pcs." },
  { t: "Mass Production", d: "Design Confirm → Sampling → Mass Production → QC → Delivery. Stitch density & craft checkpoints at every stage." },
  { t: "QC & Delivery", d: "Sea / air / express shipping with EXW, FOB, CIF or DDP terms. FBA-ready labeling available." },
];

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How to Order</span>
          <h2>Custom Golf Cap Manufacturing, Engineered End-to-End</h2>
          <p>From a single logo on a stock style to full new-style development — one factory team manages design, sampling, production, QC and delivery. No public pricing: every project is quoted individually.</p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Factory ================= */
function Factory() {
  return (
    <section className="section alt" id="manufacturing">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Manufacturing Base</span>
          <h2>A Manufacturing Base Built for Golf Headwear</h2>
          <p>
            From fabric inspection to final packing, every process sits under one roof in Dongguan. That means stable
            quality across re-orders, honest lead times, and a single accountable team for your program.
          </p>
        </div>
        <div className="grid-3">
          <article className="card">
            <span className="chip green">One Factory, Full Chain Control</span>
            <h3>Workshop, Equipment, Production Line & QC</h3>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
              Representative scenes from our Dongguan base. Live video factory tours available on request before your first order.
            </p>
            <ul>
              <li>Five checkpoints from fabric to carton</li>
              <li>Eco-material stock program (rPET / organic cotton)</li>
              <li>Smart-cap pilot line with NDA project room</li>
            </ul>
          </article>
          <article className="card">
            <span className="chip dark">Structural R&amp;D</span>
            <h3>AI-Ready Cap Platforms</h3>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
              Our structural R&amp;D team co-develops AI-ready cap platforms with sports-tech brands: hidden module bays,
              washable quick-disconnect routing, antenna-friendly panel layouts and balanced weight distribution.
            </p>
            <ul>
              <li>Structural prototypes in 10–15 days</li>
              <li>Pilot batches from 500 units</li>
              <li>Developed under NDA</li>
            </ul>
          </article>
          <article className="card">
            <span className="chip">Who We Manufacture For</span>
            <h3>Brands, Clubs, Tournaments &amp; Sellers</h3>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
              A selection of production programs delivered over the last three seasons — from club crest embroidery to AI-ready smart cap pilots.
            </p>
            <ul>
              <li>Apparel &amp; outdoor brands launching golf lines</li>
              <li>Leagues &amp; clubs outfitting teams and events</li>
              <li>Tournament organizers &amp; leagues</li>
              <li>Procurement directors at golf retailers</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================= Knowledge ================= */
const KB = [
  { icon: "🧵", t: "Golf Cap Fabric Selection Guide", d: "Recycled polyester vs organic cotton vs performance blends — how to match fabric to price point, climate and brand positioning. 240 gsm recycled polyester twill is the industry workhorse: durable, colorfast and GRS-certifiable for eco claims." },
  { icon: "🌿", t: "Eco-Friendly Materials for Golf Headwear", d: "Organic cotton canvas suits premium eco positioning but requires firmer MOQ planning due to yarn availability. Request a fabric swatch card before confirming your bulk order." },
  { icon: "🪡", t: "Embroidery Craft Comparison: 3D, Flat, Silicone, Patch", d: "A practical comparison of logo decoration techniques by cost, texture, durability and minimum order suitability — written by our factory engineers for trade buyers, not consumers." },
];

function Knowledge() {
  return (
    <section className="section" id="knowledge">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Knowledge Base</span>
          <h2>B2B Knowledge Base for Golf Headwear Buyers</h2>
          <p>Practical guides on fabric selection, eco materials, craft comparison and ordering.</p>
        </div>
        <div className="kb-list">
          {KB.map((k) => (
            <article className="kb-item" key={k.t}>
              <div className="icon">{k.icon}</div>
              <div>
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Testimonials ================= */
function Testimonials() {
  return (
    <section className="section alt">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Trade Voices</span>
          <h2>What B2B Buyers Say</h2>
        </div>
        <div className="grid-2">
          <blockquote className="quote">
            <p>
              “The tiered blank program saved us 15% versus our previous supplier, and the rPET quality is consistent
              across every re-order. Truly a factory that understands B2B.”
            </p>
            <footer><b>Procurement Director</b>US golf retailer</footer>
          </blockquote>
          <blockquote className="quote">
            <p>
              “Their AI-ready structural design let us focus on firmware, not sewing problems. The sensor bay prototype
              was production-grade from the first batch.”
            </p>
            <footer><b>Event Manager</b>APAC golf tournament</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const FAQS = [
  { q: "What is your MOQ?", a: "Blank stock programs start from 300 pcs (mixed styles & colors allowed). Custom OEM/ODM projects start from 500 pcs. Smart-cap pilot batches from 800 pcs. AI-ready structural development projects are quoted individually under NDA." },
  { q: "How fast are samples and production?", a: "Physical samples in 3–7 days with multi-angle photos and videos. Team colorway rush orders in 12 days. Standard production ~21 days delivery for multi-sponsor layouts. Structural prototypes for smart caps take 10–15 days." },
  { q: "Which eco materials do you offer?", a: "240 gsm recycled polyester (rPET) twill — GRS-certifiable for eco claims — plus organic cotton canvas for premium eco positioning, and eco-certified tanning for leather patches. Organic cotton requires firmer MOQ planning due to yarn availability." },
  { q: "What logo decoration techniques are available?", a: "3D embroidery, flat embroidery, silicone transfer and leather patch — compared by cost, texture, durability and MOQ suitability. Sample fees USD 30–80 per style (3D embroidery & silicone molds higher), fully refunded on bulk orders over 1,000 pcs." },
  { q: "What are your shipping and trade terms?", a: "Sea / air / express shipping with EXW, FOB, CIF or DDP terms. FBA-ready labeling is available for Amazon sellers. Every inquiry receives a human reply from a dedicated sales engineer within 24 working hours." },
  { q: "Can you develop smart golf caps?", a: "Yes — every ODM project can reserve our AI-ready smart structure: module bay, conductive routing and washable quick-disconnect design, under NDA. Structural prototypes in 10–15 days, pilot batches from 500 units." },
];

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">FAQ</span>
          <h2>MOQ, Sampling, Lead Times & Trade Terms</h2>
          <p>All answered transparently by our factory engineers.</p>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Contact ================= */
function Contact() {
  return (
    <section className="section alt" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Contact</span>
          <h2>Get a Factory-Direct Quotation in 24 Hours</h2>
          <p>
            Tell us your product requirement and quantity — our sales engineers respond with pricing, sampling plan
            and lead times within 24 working hours. Every inquiry receives a human reply, not an auto-responder.
          </p>
        </div>
        <div className="contact-grid">
          <aside className="contact-side">
            <div className="card">
              <h3>Direct Channels</h3>
              <ul>
                <li>Email: sales@altivict.com</li>
                <li>WhatsApp chat — instant reply during CN business hours</li>
                <li>Live video factory tour before your first order</li>
              </ul>
            </div>
            <div className="card">
              <h3>What to Attach</h3>
              <ul>
                <li>Logo / artwork files (AI, PDF, PNG)</li>
                <li>Target quantity &amp; deadline</li>
                <li>Reference styles or competitor samples</li>
              </ul>
            </div>
          </aside>
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Footer ================= */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="mark">A</span> Altivict
            </div>
            <p className="lede">
              Altivict Manufacturing Co., Ltd — professional golf cap manufacturer: blank wholesale, OEM/ODM
              customization, functional sports headwear and AI-ready smart cap development. Crafted for the high
              ground of golf.
            </p>
          </div>
          <div>
            <h4>Series</h4>
            <ul>
              <li><a href="#products">Blank Wholesale Program</a></li>
              <li><a href="#products">Custom OEM / ODM</a></li>
              <li><a href="#products">Team &amp; Tournament</a></li>
              <li><a href="#products">AI-Ready Smart Caps</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#manufacturing">Manufacturing Base · Dongguan, CN</a></li>
              <li><a href="#knowledge">Knowledge Base</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">sales@altivict.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Altivict Manufacturing Co., Ltd. All rights reserved.</span>
          <span>Wholesale &amp; custom trade only — no retail.</span>
        </div>
      </div>
    </footer>
  );
}
