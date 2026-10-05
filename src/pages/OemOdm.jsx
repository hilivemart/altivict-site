import React from 'react';
import { Link } from 'react-router-dom';
import { OEM, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function PageOemOdm() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(OEM.title)}</h1>
          <p className="page-sub">{t({ en: 'From small-batch trial customization to full ODM original development — one professional team, zero hidden charges.', zh: '从小批量试单定制到完整 ODM 原创开发 — 一个专业团队，零隐藏收费。' })}</p>
        </Reveal>

        <Reveal className="section-head"><h2>{t(OEM.processTitle)}</h2></Reveal>
        <div className="process-flow">
          {OEM.steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} className="process-step">
              <span className="adv-num">{s.num}</span>
              <h3>{t(s.title)}</h3>
              <p>{t(s.desc)}</p>
              {i < OEM.steps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head"><h2>{t(OEM.dualTitle)}</h2></Reveal>
        <div className="grid grid-2">
          {OEM.tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 120} className="card tier-card">
              <h3>{t(tier.name)}</h3>
              <p>{t(tier.desc)}</p>
              <ul className="ai-points">{tier.points.map((p, j) => <li key={j}>{t(p)}</li>)}</ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head"><h2>{t(OEM.craftTitle)}</h2></Reveal>
        <div className="chip-wrap">
          {OEM.crafts.map((c, i) => (
            <Reveal key={i} delay={i * 40} as="span" className="chip">{t(c.name)}</Reveal>
          ))}
        </div>

        <Reveal className="section-head"><h2>{t(OEM.transTitle)}</h2></Reveal>
        <div className="tier-table trans-table">
          <table>
            <tbody>
              {OEM.trans.map((r) => (
                <tr key={r.k.en}><th>{t(r.k)}</th><td>{t(r.v)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <Reveal className="center" style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">{t(UI.freeQuote)}</Link>
        </Reveal>
      </div>
    </section>
  );
}

export default PageOemOdm;
