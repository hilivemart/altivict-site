import React from 'react';
import { Link } from 'react-router-dom';
import { NAV, FOOTER, FACTORY } from '../data.jsx';
import { useLang } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">ALTIVICT</div>
          <p className="footer-desc">{t(FOOTER.desc)}</p>
          <div className="footer-certs">
            <span className="footer-certs-label">{t(FOOTER.certifications)}</span>
            <div className="cert-badges">
              {FACTORY.certs.map((c) => <span key={c.name} className="cert-badge">{c.name}</span>)}
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4>{t(FOOTER.products)}</h4>
          <Link to="/products">{t({ en: 'Blank Wholesale Caps', zh: '空白批发帽' })}</Link>
          <Link to="/products">{t({ en: 'Embroidered Custom Caps', zh: '定制绣花帽' })}</Link>
          <Link to="/products">{t({ en: 'Functional Performance', zh: '功能性能系列' })}</Link>
          <Link to="/products">{t({ en: 'AI-Ready Smart Caps', zh: 'AI 智能帽' })}</Link>
        </div>
        <div className="footer-col">
          <h4>{t(FOOTER.company)}</h4>
          {NAV.slice(2, 6).map((n) => <Link key={n.key} to={n.to}>{t(n.label)}</Link>)}
        </div>
        <div className="footer-col">
          <h4>{t(FOOTER.support)}</h4>
          <Link to="/contact">{t({ en: 'Get A Quote', zh: '获取报价' })}</Link>
          <Link to="/faq">FAQ</Link>
          <a href="mailto:info@altivict.com">info@altivict.com</a>
          <span>{t({ en: 'Mon–Sat 9:00–19:00 GMT+8', zh: '周一至周六 9:00–19:00 GMT+8' })}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 {t(FOOTER.rights)}</span>
          <span className="footer-legal">
            <a href="#privacy">{t(FOOTER.privacy)}</a> · <a href="#cookie">{t(FOOTER.cookie)}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
