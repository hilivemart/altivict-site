import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, PRODUCTS, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

function PageHome() {
  const { t } = useLang();
  return (
    <>
      {/* Hero — full-screen outdoor tone, subtle light drift */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-light" aria-hidden="true" />
        <div className="container hero-content">
          <p className="hero-kicker">{t(HOME.heroKicker)}</p>
          <h1 className="hero-title">{t(HOME.heroSub)}</h1>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">{t(UI.freeQuote)}</Link>
            <Link to="/gallery" className="btn btn-ghost btn-lg">{t(UI.browseWorks)}</Link>
          </div>
          <div className="hero-stats">
            <div><strong>300K</strong><span>{t({ en: 'pcs / month capacity', zh: '顶月产能' })}</span></div>
            <div><strong>3–7</strong><span>{t({ en: 'day sampling', zh: '天打样' })}</span></div>
            <div><strong>100+</strong><span>{t({ en: 'MOQ welcome', zh: '顶起订' })}</span></div>
            <div><strong>ISO · BSCI</strong><span>{t({ en: 'certified', zh: '认证工厂' })}</span></div>
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><h2>{t(HOME.valuesTitle)}</h2></Reveal>
          <div className="grid grid-4">
            {HOME.values.map((v, i) => (
              <Reveal key={i} delay={i * 90} className="card value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{t(v.title)}</h3>
                <p>{t(v.desc)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Factory advantages */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head"><h2>{t(HOME.advTitle)}</h2></Reveal>
          <div className="grid grid-3">
            {HOME.advantages.map((a, i) => (
              <Reveal key={a.num} delay={i * 70} className="card adv-card">
                <span className="adv-num">{a.num}</span>
                <h3>{t(a.title)}</h3>
                <p>{t(a.desc)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview carousel (CSS scroll-snap) */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>{t({ en: 'Premium Product Preview', zh: '高端产品预览' })}</h2>
          </Reveal>
          <div className="carousel">
            {PRODUCTS.categories.map((c, i) => (
              <Reveal key={c.key} delay={i * 60} className="carousel-item card product-card">
                <div className="product-icon">{c.icon}</div>
                <h3>{t(c.name)}</h3>
                <p>{t(c.desc)}</p>
                <span className="product-note">{t(UI.wholesaleOnly)}</span>
                <Link to="/products" className="link-arrow">{t(UI.learnMore)} →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke solution block (Load-Bear structure) */}
      <section className="section section-dark">
        <div className="container bespoke">
          <Reveal>
            <h2 className="bespoke-title">{t(HOME.bespokeTitle)}</h2>
            <p className="bespoke-desc">{t(HOME.bespokeDesc)}</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-accent btn-lg">{t(UI.freeQuote)}</Link>
              <Link to="/oem-odm" className="btn btn-ghost-light btn-lg">{t({ en: 'View Custom Process', zh: '查看定制流程' })}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Factory strength dynamic display */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><h2>{t({ en: 'Inside the Altivict Factory', zh: '走进 Altivict 工厂' })}</h2></Reveal>
          <div className="grid grid-3 factory-showcase">
            {[
              { icon: '🏭', title: { en: 'Standardized Workshop', zh: '标准化车间' }, desc: { en: 'Dust-free stitching lines with 5S management.', zh: '5S 管理的无尘缝制产线。' } },
              { icon: '🧵', title: { en: 'Precision Embroidery Hall', zh: '精密绣花大厅' }, desc: { en: '40+ multi-head machines, ±0.5 mm tolerance.', zh: '40+ 机头，±0.5mm 公差。' } },
              { icon: '🔍', title: { en: 'Strict QC Scene', zh: '严苛质检场景' }, desc: { en: 'AQL 2.5 final sampling, full inspection reports.', zh: 'AQL 2.5 抽检，完整检验报告。' } },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 100} className="card factory-card">
                <div className="product-icon">{f.icon}</div>
                <h3>{t(f.title)}</h3>
                <p>{t(f.desc)}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" style={{ marginTop: '2.5rem' }}>
            <Link to="/factory" className="btn btn-outline">{t({ en: 'Explore Factory Strength', zh: '了解工厂实力' })}</Link>
          </Reveal>
        </div>
      </section>

      {/* AI innovation module */}
      <section className="section section-ai">
        <div className="container ai-module">
          <Reveal className="ai-copy">
            <p className="ai-kicker">{t({ en: 'Exclusive R&D Innovation', zh: '独家研发创新' })}</p>
            <h2>{t(HOME.aiTitle)}</h2>
            <p className="ai-desc">{t(HOME.aiDesc)}</p>
            <ul className="ai-points">
              {HOME.aiPoints.map((p, i) => <li key={i}>{t(p)}</li>)}
            </ul>
            <Link to="/contact" className="btn btn-primary">{t({ en: 'Start AI-Ready ODM Discussion', zh: '启动 AI ODM 洽谈' })}</Link>
          </Reveal>
          <Reveal delay={150} className="ai-visual" aria-hidden="true">
            <div className="ai-hat">
              <div className="ai-chip" /><div className="ai-sensor" /><div className="ai-battery" />
              <span className="ai-label l1">Edge-AI</span><span className="ai-label l2">Sensor</span><span className="ai-label l3">Flex-Battery</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case gallery preview */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head"><h2>{t(HOME.casesTitle)}</h2></Reveal>
          <div className="grid grid-3">
            {PRODUCTS && null}
            {[
              { tag: { en: 'Golf Club', zh: '高尔夫俱乐部' }, title: { en: 'Member Series Program', zh: '会员系列项目' } },
              { tag: { en: 'Event', zh: '赛事' }, title: { en: 'Pro-Am Tournament Edition', zh: '职业业余赛纪念版' } },
              { tag: { en: 'DTC Brand', zh: 'DTC 品牌' }, title: { en: 'Full ODM Sun-Shield Launch', zh: '完整 ODM 防晒帽上市' } },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80} className="card case-card">
                <span className="case-tag">{t(c.tag)}</span>
                <h3>{t(c.title)}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" style={{ marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-outline">{t({ en: 'View All Cases', zh: '查看全部案例' })}</Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><h2>{t(HOME.testimonialsTitle)}</h2></Reveal>
          <div className="grid grid-2">
            {HOME.testimonials.map((tm, i) => (
              <Reveal key={i} delay={i * 100} className="card quote-card">
                <blockquote>“{t(tm.text)}”</blockquote>
                <footer>— <strong>{tm.author}</strong>, {t(tm.org)}</footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom inquiry */}
      <section className="section section-dark" id="inquiry">
        <div className="container inquiry-block">
          <Reveal className="inquiry-copy">
            <h2>{t({ en: 'Start Your Premium Golf Cap Program', zh: '启动您的高端高尔夫帽项目' })}</h2>
            <p>{t({ en: 'One inquiry — professional quotation, sampling plan and lead-time schedule within 12 hours.', zh: '一次询盘 — 12 小时内获得专业报价、打样方案与交期计划。' })}</p>
            <ul className="ai-points">
              <li>{t({ en: 'Dedicated senior B2B specialist', zh: '专属资深 B2B 专员' })}</li>
              <li>{t({ en: 'NDA & IP protection available', zh: '可签 NDA 与知识产权保护' })}</li>
              <li>{t({ en: 'Instant WhatsApp consultation', zh: 'WhatsApp 即时咨询' })}</li>
            </ul>
          </Reveal>
          <Reveal delay={120}><InquiryForm compact /></Reveal>
        </div>
      </section>
    </>
  );
}

export default PageHome;
