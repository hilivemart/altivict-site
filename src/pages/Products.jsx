import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';

function PageProducts() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(PRODUCTS.title)}</h1>
          <p className="page-sub">{t(PRODUCTS.subtitle)}</p>
        </Reveal>
        {PRODUCTS.categories.map((cat, idx) => (
          <Reveal key={cat.key} delay={idx * 40} className="product-group">
            <div className="product-group-head">
              <div className="product-icon">{cat.icon}</div>
              <div>
                <h2>{t(cat.name)}</h2>
                <p>{t(cat.desc)}</p>
              </div>
            </div>
            <div className={`grid ${cat.items.length >= 4 ? 'grid-4' : cat.items.length === 3 ? 'grid-3' : 'grid-2'}`}>
              {cat.items.map((item, i) => (
                <div key={i} className="card product-item">
                  <h3>{t(item.name)}</h3>
                  <p className="spec">{t(item.spec)}</p>
                  <span className="product-note">{t(UI.wholesaleOnly)}</span>
                </div>
              ))}
            </div>
            {cat.tiers && (
              <div className="tier-table">
                <h3>{t({ en: 'Transparent Tiered Bulk Discounts', zh: '透明阶梯批发折扣' })}</h3>
                <table>
                  <thead><tr><th>{t({ en: 'Quantity (pcs)', zh: '数量（顶）' })}</th><th>{t({ en: 'Discount', zh: '折扣' })}</th></tr></thead>
                  <tbody>
                    {cat.tiers.map((tr) => (
                      <tr key={tr.qty}><td><b>{tr.qty}</b></td><td>{t(tr.off)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="product-group-cta">
              <Link to="/contact" className="btn btn-primary">{t(UI.inquire)}</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default PageProducts;
