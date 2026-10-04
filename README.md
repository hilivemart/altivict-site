# Altivict 网站源码工程（重建版 v2.0）

> 重建日期：2026-10-04 ｜ 基于线上 altivict.com 内容 1:1 重建，并新增询盘表单、robots.txt、sitemap.xml
> 技术栈：React 18 + Vite 5，纯 CSS（无框架依赖，改样式直接编辑 `src/styles.css`）

## 一、目录结构

```
altivict-site/
├── index.html                 # 入口：完整 SEO 元数据（title/description/OG/JSON-LD）
├── package.json               # 依赖与构建脚本
├── vite.config.js             # Vite 配置
├── public/
│   ├── favicon.svg            # 站点图标（取自线上备份）
│   ├── robots.txt             # ✅ 修复原来"假文件"问题
│   └── sitemap.xml            # ✅ 修复原来"假文件"问题
├── functions/api/inquiry.js   # 进阶：自建表单后端（EdgeOne Pages Function + Resend）
└── src/
    ├── main.jsx               # 应用入口
    ├── App.jsx                # 全站页面（9 个板块，文案取自线上原站）
    ├── InquiryForm.jsx        # ✅ 询盘表单（Web3Forms 收件）
    └── styles.css             # 全站样式（改配色看文件顶部 :root 变量）
```

## 二、上线前必做（只有 2 件事）

### 1. 填入 Web3Forms Access Key（询盘才能收到）
- 打开 https://web3forms.com ，输入收件邮箱（如 sales@altivict.com）
- 去邮箱点确认链接，复制 Access Key
- 打开 `src/InquiryForm.jsx` 第 14 行，替换：
  ```js
  const WEB3FORMS_ACCESS_KEY = "请替换为你的WEB3FORMS_ACCESS_KEY";
  ```

### 2. 替换 WhatsApp 号码
- 打开 `src/App.jsx` 第 4 行，替换：
  ```js
  const WHATSAPP_LINK = "https://wa.me/8613800000000"; // 改成你的号码
  ```

## 三、本地运行与构建

```bash
cd altivict-site
npm install        # 首次安装依赖
npm run dev        # 本地预览 http://localhost:5173
npm run build      # 构建产物 → dist/ 文件夹
```

## 四、部署到 EdgeOne Pages（三选一）

### 方式 A：Git 自动部署（强烈推荐）
1. 在 GitHub / Gitee 新建仓库（如 `altivict-site`）
2. 把本文件夹推上去：
   ```bash
   git init && git add . && git commit -m "Altivict site v2"
   git remote add origin https://github.com/你的用户名/altivict-site.git
   git push -u origin main
   ```
3. 腾讯云 EdgeOne Pages 控制台 → 创建项目 → 导入 Git 仓库
4. 构建命令 `npm run build`，输出目录 `dist`
5. 绑定现有域名 www.altivict.com（按控制台提示把 CNAME 指向新项目即可）

**好处**：以后每次改代码 push 即自动部署；源码永存云端。

### 方式 B：控制台直接上传
EdgeOne Pages 控制台 → 创建项目 → 上传 `dist/` 文件夹（先本地 `npm run build`）

### 方式 C：CLI 部署
```bash
npm run build
npx edgeone-pages dist   # 按提示登录并部署
```

## 五、部署后验收清单

| # | 检查项 | 方法 |
|---|---|---|
| 1 | 首页正常显示 | 打开 https://www.altivict.com |
| 2 | 询盘表单真实可用 | 自己填一遍，确认邮箱收到询盘 |
| 3 | robots.txt 是真文件 | 打开 /robots.txt 应显示纯文本规则 |
| 4 | sitemap.xml 是真文件 | 打开 /sitemap.xml 应显示 XML |
| 5 | WhatsApp 按钮链接正确 | 点右下角绿色按钮 |
| 6 | 手机端显示正常 | 手机打开网站检查 |

## 六、将来想切换自建表单后端

Web3Forms 免费额度 250 条/月，询盘量超了或想数据全在自己手里时：
1. 注册 https://resend.com 拿 API Key
2. EdgeOne Pages 项目设置里加环境变量 `RESEND_API_KEY`、`INQUIRY_TO`
3. `functions/api/inquiry.js` 已在工程里，部署后即有 `/api/inquiry` 接口
4. 把 `InquiryForm.jsx` 里 `fetch("https://api.web3forms.com/submit", ...)` 换成 `fetch("/api/inquiry", ...)`（body 去掉 access_key 字段）

## 七、内容维护速查

| 想改什么 | 改哪个文件 |
|---|---|
| 产品系列、文案、FAQ | `src/App.jsx`（PRODUCTS / STEPS / KB / FAQS 数组） |
| 询盘表单字段 | `src/InquiryForm.jsx`（initialForm + PRODUCT_OPTIONS） |
| 配色 | `src/styles.css` 顶部 `:root` 变量 |
| SEO 标题/描述 | `index.html` |
