import { useState } from "react";

/**
 * Altivict 询盘表单 —— Web3Forms 收件版
 *
 * 使用前（重要）：
 *   1. 打开 https://web3forms.com ，在首页输入你的收件邮箱（如 sales@altivict.com）
 *   2. 去邮箱点确认邮件 → 获得 Access Key（形如 "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"）
 *   3. 把下方常量替换为你的 Access Key
 *   4. 重新构建部署即可
 *
 * 进阶：将来想换自建后端（EdgeOne Pages Function），把 handleSubmit 里
 *       fetch("https://api.web3forms.com/submit", ...) 换成 fetch("/api/inquiry", ...) 即可。
 */
const WEB3FORMS_ACCESS_KEY = "请替换为你的WEB3FORMS_ACCESS_KEY";

const PRODUCT_OPTIONS = [
  "Blank Golf Caps — Wholesale Stock Program",
  "Custom Embroidered Caps — OEM / ODM",
  "Team & Tournament Customization",
  "Women's Ponytail & Wide Brim Series",
  "Functional Sport Golf Hats",
  "AI-Ready Smart Golf Cap Development",
  "Other / Not Sure Yet",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  whatsapp: "",
  product: PRODUCT_OPTIONS[1],
  quantity: "",
  message: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [botcheck, setBotcheck] = useState(""); // 蜜罐字段，人类不会填

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) return; // 机器人：静默丢弃
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${form.name}${form.company ? " @ " + form.company : ""}`,
          from_name: "Altivict Website",
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.country,
          whatsapp: form.whatsapp,
          product_interest: form.product,
          estimated_quantity: form.quantity,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setError(data.message || "Submission failed. Please email sales@altivict.com directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again, or email sales@altivict.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="form-status-ok">
        <div className="tick">✓</div>
        <h3 style={{ marginTop: 8 }}>Inquiry Sent Successfully</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14 }}>
          Thank you, a sales engineer will reply within 24 working hours.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ marginTop: 18 }}
          onClick={() => setStatus("idle")}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* 蜜罐：对人类隐藏，机器人会填写 */}
      <div className="hp" aria-hidden="true">
        <label>
          Don't fill this if you're human:
          <input type="text" tabIndex={-1} autoComplete="off" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
        </label>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Name <span>*</span></label>
          <input id="f-name" required name="name" value={form.name} onChange={handleChange} placeholder="John Smith" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Business Email <span>*</span></label>
          <input id="f-email" required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" value={form.company} onChange={handleChange} placeholder="Company Ltd." />
        </div>
        <div className="field">
          <label htmlFor="f-country">Country</label>
          <input id="f-country" name="country" value={form.country} onChange={handleChange} placeholder="United States" />
        </div>
        <div className="field">
          <label htmlFor="f-whatsapp">WhatsApp / Phone</label>
          <input id="f-whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+1 555 000 0000" />
        </div>
        <div className="field">
          <label htmlFor="f-qty">Est. Quantity</label>
          <input id="f-qty" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 – 1,000 pcs" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-product">Product Interest <span>*</span></label>
        <select id="f-product" required name="product" value={form.product} onChange={handleChange}>
          {PRODUCT_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-msg">Your Requirement <span>*</span></label>
        <textarea
          id="f-msg"
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project: styles, colors, logo / artwork, target price, deadline…"
        />
      </div>

      {status === "error" && <p className="form-status-err">{error}</p>}

      <button type="submit" className="btn btn-green" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Inquiry — Get a Reply in 24 Working Hours"}
      </button>
      <p className="form-foot">
        Fields marked <span style={{ color: "#c0392b" }}>*</span> are required. Your data is only used to respond to this
        inquiry — no spam, ever. Prefer email? Write to sales@altivict.com and attach your artwork for a faster quote.
      </p>
    </form>
  );
}
