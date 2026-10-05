import React from 'react';
import { CONTACT } from '../data.jsx';
import { useLang } from '../i18n.jsx';
import Reveal from '../components/Reveal.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

function PageContact() {
  const { t } = useLang();
  return (
    <section className="section page-pad">
      <div className="container">
        <Reveal className="section-head">
          <h1 className="page-title">{t(CONTACT.title)}</h1>
          <p className="page-sub">{t(CONTACT.subtitle)}</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <h2>{t({ en: 'Reach Us Directly', zh: '直接联系我们' })}</h2>
            <ul>
              {CONTACT.info.map((c, i) => (
                <li key={i}>
                  <span className="contact-icon">{c.icon}</span>
                  <div><span className="contact-k">{t(c.k)}</span><span className="contact-v">{t(c.v)}</span></div>
                </li>
              ))}
            </ul>
            <div className="contact-note">
              {t({ en: 'Exclusive Trade / OEM entry for global brand buyers, cross-border premium sellers, golf clubs and tournament organizers.', zh: '面向全球品牌买家、跨境高端卖家、高尔夫俱乐部与赛事组织方的专属贸易 / OEM 入口。' })}
            </div>
          </Reveal>
          <Reveal delay={120} className="contact-form-wrap">
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default PageContact;
