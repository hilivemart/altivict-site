import React, { useState } from 'react';
import { CONTACT, UI } from '../data.jsx';
import { useLang } from '../i18n.jsx';

const WEB3FORMS_KEY = 'WEB3FORMS-ACCESS-KEY-HERE'; // TODO: replace with real Access Key

export default function InquiryForm({ compact = false }) {
  const { t } = useLang();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const F = CONTACT.form;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot — silently drop bots
    if (form.botcheck && form.botcheck.value) return;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: 'New B2B Inquiry — altivict.com', from_name: 'Altivict Website', ...data }),
      });
      const json = await res.json();
      if (json.success) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <div className="form-success-icon">✓</div>
        <p>{t(UI.successMsg)}</p>
        <button className="btn btn-outline" onClick={() => setStatus('idle')}>{t({ en: 'Send Another', zh: '再次发送' })}</button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate={false}>
      <input type="checkbox" name="botcheck" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className={`form-grid ${compact ? 'form-grid-compact' : ''}`}>
        <div className="field">
          <label htmlFor="f-name">{t(F.name)} *</label>
          <input id="f-name" name="name" type="text" required maxLength="80" />
        </div>
        <div className="field">
          <label htmlFor="f-company">{t(F.company)}</label>
          <input id="f-company" name="company" type="text" maxLength="120" />
        </div>
        <div className="field">
          <label htmlFor="f-email">{t(F.email)} *</label>
          <input id="f-email" name="email" type="email" required maxLength="120" />
        </div>
        <div className="field">
          <label htmlFor="f-wa">{t(F.whatsapp)}</label>
          <input id="f-wa" name="whatsapp" type="tel" maxLength="40" />
        </div>
        <div className="field">
          <label htmlFor="f-product">{t(F.product)} *</label>
          <select id="f-product" name="product" required defaultValue="">
            <option value="" disabled>—</option>
            {F.productOptions.map((o) => <option key={o.en} value={t(o)}>{t(o)}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-qty">{t(F.quantity)} *</label>
          <select id="f-qty" name="quantity" required defaultValue="">
            <option value="" disabled>—</option>
            {F.qtyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="f-msg">{t(F.message)}</label>
          <textarea id="f-msg" name="message" rows={compact ? 3 : 5} maxLength="2000" />
        </div>
      </div>
      {status === 'error' && <p className="form-error" role="alert">{t(UI.failMsg)}</p>}
      <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
        {status === 'sending' ? t(UI.sending) : t(UI.sendInquiry)}
      </button>
    </form>
  );
}
