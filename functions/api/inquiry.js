/**
 * Altivict 询盘表单后端 —— 腾讯云 EdgeOne Pages Function
 * 方案 B：不依赖第三方表单服务，询盘直接发到你邮箱（走 Resend 邮件 API）+ 可选存入 KV
 *
 * 文件放置路径（相对你的网站项目根目录）：
 *   /functions/api/inquiry.js
 * 部署后接口地址为：https://www.altivict.com/api/inquiry
 *
 * 前置准备：
 *  1. 注册 https://resend.com （免费 3,000 封/月），创建 API Key
 *  2. 在 Resend 里添加并验证你的发件域名（如 mail.altivict.com），或先用 resend.dev 测试域名
 *  3. 在 EdgeOne Pages 项目设置 → 环境变量里添加：
 *       RESEND_API_KEY = 你的Resend密钥
 *       INQUIRY_TO     = 收件邮箱（如 info@altivict.com）
 */

export async function onRequestPost({ request, env }) {
  const cors = {
    "Access-Control-Allow-Origin": "https://www.altivict.com",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  try {
    const body = await request.json();

    // ---- 1. 蜜罐防机器人 ----
    if (body.botcheck) {
      return json({ success: true }, cors); // 假装成功，机器人不知道被拒
    }

    // ---- 2. 服务端校验 ----
    const errors = {};
    if (!body.name || body.name.trim().length < 2) errors.name = "Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email || "")) errors.email = "Valid email required";
    if (!body.message || body.message.trim().length < 10) errors.message = "Message too short";
    if (Object.keys(errors).length > 0) {
      return json({ success: false, errors }, cors, 400);
    }

    // ---- 3. 组装询盘邮件 ----
    const rows = [
      ["Name", body.name], ["Email", body.email], ["Company", body.company || "-"],
      ["Country", body.country || "-"], ["WhatsApp", body.whatsapp || "-"],
      ["Product", body.product || "-"], ["Quantity", body.quantity || "-"],
      ["Message", body.message],
    ];
    const html = `<h2>New Inquiry from Altivict Website</h2><table border="0" cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
      .map(([k, v]) => `<tr><td style="background:#f5f5f5;font-weight:bold;width:120px">${k}</td><td>${String(v).replace(/</g, "&lt;")}</td></tr>`)
      .join("")}</table><p style="color:#888">Reply directly to this email or contact: <b>${body.email}</b></p>`;

    // ---- 4. 调 Resend 发件 ----
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Altivict Inquiry <noreply@mail.altivict.com>",
        to: [env.INQUIRY_TO],
        reply_to: body.email, // 直接回复即回给客户
        subject: `New Inquiry: ${body.name}${body.company ? " @ " + body.company : ""}`,
        html,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Resend error:", errText);
      return json({ success: false, message: "Mail delivery failed" }, cors, 502);
    }

    // ---- 5.（可选）存入 EdgeOne KV，留下询盘台账 ----
    // 需先在 Pages 控制台绑定 KV 命名空间，并将下面这段的注释打开
    // await env.INQUIRY_KV.put(
    //   `inquiry:${Date.now()}`,
    //   JSON.stringify({ ...body, createdAt: new Date().toISOString() })
    // );

    return json({ success: true, message: "Inquiry sent" }, cors);
  } catch (e) {
    console.error("Inquiry handler error:", e);
    return json({ success: false, message: "Server error" }, cors, 500);
  }
}

// 处理浏览器跨域预检
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://www.altivict.com",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}

function json(obj, corsHeaders, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}
