import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function FaqItem({ item, open, onToggle }) {
  const { t } = useLang();
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{t(item.q)}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a"><p>{t(item.a)}</p></div>
    </div>
  );
}

function PageFaq() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section page-pad">
      <div className="container container-narrow">
        <Reveal className="section-head">
          <h1 className="page-title">{t(FAQ.title)}</h1>
          <p className="page-sub">{t(FAQ.subtitle)}</p>
        </Reveal>
        <div className="faq-list">
          {FAQ.items.map((item, i) => (
            <Reveal key={i} delay={i * 50}>
              <FaqItem item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
        <Reveal className="center" style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">{t(UI.inquire)}</Link>
        </Reveal>
      </div>
    </section>
  );
}

export default PageFaq;
