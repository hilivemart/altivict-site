import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function PageGallery() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(GALLERY.title)}</h1>
          <p className="page-sub">{t(GALLERY.subtitle)}</p>
        </Reveal>
        <div className="grid grid-3">
          {GALLERY.cases.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="card case-card case-card-full">
              <span className="case-tag">{t(c.tag)}</span>
              <h3>{t(c.title)}</h3>
              <p>{t(c.desc)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center" style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">{t(UI.freeQuote)}</Link>
        </Reveal>
      </div>
    </section>
  );
}

export default PageGallery;
