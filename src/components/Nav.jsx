import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, UI } from '../data.jsx';
import { useLang, LanguageSwitch } from '../i18n.jsx';

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="Altivict home">
          <span className="nav-logo">A</span>
          <span className="nav-brand-name">ALTIVICT</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.key} to={n.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t(n.label)}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <LanguageSwitch />
          <Link to="/contact" className="btn btn-primary btn-nav">{t(UI.quote)}</Link>
          <button
            className={`nav-burger ${open ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${open ? 'show' : ''}`}>
        {NAV.map((n) => (
          <NavLink key={n.key} to={n.to} className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}>
            {t(n.label)}
          </NavLink>
        ))}
        <div className="nav-mobile-foot">
          <LanguageSwitch />
          <Link to="/contact" className="btn btn-primary">{t(UI.quote)}</Link>
        </div>
      </div>
    </header>
  );
}
