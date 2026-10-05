import React from 'react';
import { GUIDES } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function PageGuides() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(GUIDES.title)}</h1>
          <p className="page-sub">{t(GUIDES.subtitle)}</p>
        </Reveal>
        <div className="grid grid-3">
          {GUIDES.posts.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="card guide-card">
              <span className="case-tag">{t(p.tag)}</span>
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <span className="link-arrow">{t({ en: 'Read Guide', zh: '阅读指南' })} →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PageGuides;
