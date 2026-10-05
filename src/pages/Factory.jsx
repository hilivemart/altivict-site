import React from 'react';
import { Link } from 'react-router-dom';
import { FACTORY, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function PageFactory() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(FACTORY.title)}</h1>
          <p className="page-sub">{t(FACTORY.overview)}</p>
        </Reveal>

        <div className="stat-band">
          {FACTORY.stats.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="stat">
              <strong>{s.num}</strong>
              <span>{t(s.label)}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head"><h2>{t(FACTORY.qcTitle)}</h2></Reveal>
        <div className="grid grid-3">
          {FACTORY.qc.map((q, i) => (
            <Reveal key={i} delay={i * 90} className="card">
              <h3>{t(q.name)}</h3>
              <p>{t(q.desc)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head"><h2>{t(FACTORY.certsTitle)}</h2></Reveal>
        <div className="grid grid-4">
          {FACTORY.certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} className="card cert-card">
              <div className="cert-name">{c.name}</div>
              <p>{t(c.desc)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-ai-inner ai-module">
          <div className="ai-copy">
            <p className="ai-kicker">{t({ en: 'Core Innovation', zh: '核心创新' })}</p>
            <h2>{t(FACTORY.rdTitle)}</h2>
            <p className="ai-desc">{t(FACTORY.rdDesc)}</p>
            <Link to="/contact" className="btn btn-primary">{t(UI.inquire)}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PageFactory;
