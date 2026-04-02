# Cape Climate H.V.A.C. Services — Website

Modern, conversion-focused HVAC website for Cape Climate, Georgetown, Delaware.

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📦 Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Select "Vite" as the framework if asked.

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your repository
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

The site will be live at a `.vercel.app` URL in ~60 seconds.
To add a custom domain, go to your Vercel project → Settings → Domains.

---

## ✏️ Updating Content

**ALL business info, copy, services, and testimonials live in one file:**

```
src/data/config.ts
```

Edit that file to update:
- Business name, phone, address, license
- Hero headline and subheadline
- Services list (add/remove/edit)
- Testimonials (replace with real ones when available)
- Why-choose-us bullets
- Hours and service area

---

## 📋 Content Placeholders to Replace

| Item | File | Note |
|------|------|------|
| Email address | `src/data/config.ts` → `BUSINESS.email` | Replace `PLACEHOLDER_EMAIL` |
| Founding year | `src/data/config.ts` → `BUSINESS.founded` | Set real year if known |
| Testimonials | `src/data/config.ts` → `TESTIMONIALS` | Replace with verified reviews |
| Contact form backend | `src/components/Contact.tsx` | See comment block in `handleSubmit` |
| OG image | `public/og-image.jpg` | Add a 1200×630px image |
| Favicon | `public/favicon.svg` | Can swap for custom brand icon |
| Real domain in meta | `index.html` | Replace `https://capeclimate.com` |

---

## 📬 Connecting the Contact Form

The form is fully built — it just needs a backend. The easiest free options:

### Formspree (recommended — no code changes needed)
1. Go to https://formspree.io and create a free account
2. Create a new form → copy your Form ID
3. In `src/components/Contact.tsx`, find the `handleSubmit` function
4. Replace the timeout stub with:
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
if (res.ok) setFormState('success')
else setFormState('error')
```

### Web3Forms (also free, no account required)
1. Go to https://web3forms.com → get a free access key
2. Same integration pattern as above

---

## 🏗️ Project Structure

```
cape-climate/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx / .module.css
│   │   ├── Hero.tsx / .module.css
│   │   ├── WhyUs.tsx / .module.css
│   │   ├── Services.tsx / .module.css
│   │   ├── Local.tsx / .module.css
│   │   ├── Testimonials.tsx / .module.css
│   │   ├── CtaBanner.tsx / .module.css
│   │   ├── Contact.tsx / .module.css
│   │   └── Footer.tsx / .module.css
│   ├── data/
│   │   └── config.ts          ← ALL editable business content
│   ├── styles/
│   │   └── globals.css        ← Design system / CSS variables
│   ├── App.tsx
│   └── main.tsx
├── index.html                 ← SEO meta tags + schema markup
├── vite.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 🎨 Design System

Colors and typography are defined as CSS variables in `src/styles/globals.css`.

To change the brand color scheme, edit these variables:
- `--orange` / `--orange-light` — primary accent
- `--grad-accent` — the blue-to-red gradient (matches business card)
- `--black` / `--dark` / `--dark-2` — background layers

---

## 📱 Features

- ✅ Mobile-first responsive design
- ✅ Sticky navbar with scroll effect
- ✅ Animated hero section
- ✅ Services grid
- ✅ Testimonials (editable in config)
- ✅ Contact form with validation
- ✅ SEO meta tags + Local Business schema markup
- ✅ Open Graph tags
- ✅ Accessible HTML (ARIA labels, semantic structure)
- ✅ Smooth scroll navigation
- ✅ Zero backend required
- ✅ Vercel-ready (no config needed)
