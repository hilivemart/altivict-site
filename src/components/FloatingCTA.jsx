import React from 'react';
import { Link } from 'react-router-dom';
import { UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';

// Global floating inquiry + WhatsApp buttons with gentle bounce — subtle, non-intrusive
export default function FloatingCTA() {
  const { t } = useLang();
  return (
    <div className="floating-cta" aria-label="Quick contact">
      <a
        className="float-btn float-wa"
        href="https://wa.me/8613800000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title={t(UI.whatsapp)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.02c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.1 8.1 0 0 1-1.24-4.31c0-4.48 3.65-8.13 8.13-8.13s8.13 3.65 8.13 8.13-3.65 8.16-8.13 8.16zm4.47-6.09c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.98s.85 2.29.97 2.45c.12.16 1.67 2.55 4.05 3.58.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.45-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z"/>
        </svg>
      </a>
      <Link className="float-btn float-quote" to="/contact" aria-label={t(UI.quote)} title={t(UI.quote)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}
