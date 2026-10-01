# Launch Guide — Isuru Meneripitiya

Everything needed to review, secure and ship this site.

---

## 1. Mobile responsiveness & UI polish

### What was already applied globally (`app/globals.css`)

| Fix | Why it matters |
| --- | --- |
| `html, body { max-width: 100%; overflow-x: clip }` | Kills horizontal scroll. **`clip`, not `hidden`** — `overflow-x: hidden` on an ancestor silently breaks `position: sticky`, which would kill the sticky navbar. |
| `img, svg, video, iframe { max-width: 100% }` | A single oversized image/embed can never widen the page. |
| `overflow-wrap: break-word` on text elements | Long words and the email address wrap instead of overflowing. |
| `input, textarea { font-size: 16px }` under `768px` | Prevents iOS Safari from auto-zooming when a field is focused. |
| `-webkit-tap-highlight-color: transparent` + `:focus-visible` ring | Removes the blue tap flash but keeps keyboard accessibility. |
| `.tap-target` helper | Expands small icon links to a 44×44px hit area (WCAG 2.5.5) without changing the visual size. |
| `prefers-reduced-motion` block | Disables animations for users who ask for it. |

### Pre-launch checklist

Test in Chrome DevTools device toolbar at **375px (iPhone SE)**, **390px**, **768px (iPad)** and **1440px**.

- [ ] **No horizontal scroll** at any width. Quick console test — it should log nothing:
      ```js
      [...document.querySelectorAll('*')].filter(el => el.scrollWidth > document.documentElement.clientWidth).forEach(el => console.log(el))
      ```
- [ ] Mobile menu opens/closes, locks background scroll (already implemented), and every link closes the drawer.
- [ ] Every button/link is **≥44×44px** on touch screens.
- [ ] Hero text never overlaps the artist in the background image.
- [ ] YouTube grid is 1 column on mobile → 2 on tablet → 3 on desktop; iframes keep a 16:9 ratio.
- [ ] Contact form inputs are tappable, labelled, and the keyboard type is correct (`type="email"`).
- [ ] Text contrast: body copy uses `text-gray-300/400` on black — passes AA. Avoid going below `gray-500` for real content.
- [ ] Run **Lighthouse → Mobile** on the deployed URL; target 90+ on Performance and Accessibility.

### Common causes of horizontal scroll (how to debug)

1. An element with a negative margin/inset (`-right-3`, `-inset-4`) near the viewport edge → keep them inside a padded parent.
2. A fixed width (`w-[600px]`) instead of `max-w-[600px] w-full`.
3. `100vw` widths — `100vw` includes the scrollbar; use `w-full`.
4. A `blur-[120px]` glow div extending past the container → give it `overflow-hidden` on the section.

---

## 2. Security

### HTTP headers — already configured in `next.config.mjs`

> The project uses ESM. To use CommonJS instead, rename to `next.config.js` and replace
> `export default nextConfig;` with `module.exports = nextConfig;`.

| Header | Value / purpose |
| --- | --- |
| `Content-Security-Policy` | Whitelists only what the site loads: YouTube (`youtube-nocookie.com`, `i.ytimg.com`), Apple Music (`embed.music.apple.com`, `*.mzstatic.com`), and `'self'`. |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` — HTTPS only. |
| `X-Frame-Options: SAMEORIGIN` | Anti-clickjacking (plus `frame-ancestors 'self'` in CSP). |
| `X-Content-Type-Options: nosniff` | Stops MIME sniffing. |
| `Referrer-Policy` | `strict-origin-when-cross-origin`. |
| `Permissions-Policy` | Camera, mic, geolocation, payment all disabled. |
| `poweredByHeader: false` | Hides `X-Powered-By: Next.js`. |

Verify after deploy:

```bash
curl -I https://your-domain.com | grep -i -E "content-security|x-frame|strict-transport"
```

Or scan at **https://securityheaders.com** — this config should grade **A**.

> ⚠️ If you later add Google Analytics, Meta Pixel, Google Fonts or a form service,
> you **must** add their domains to the matching CSP directive or they will be blocked.

### Frontend data-exposure checklist

- [ ] **Nothing secret is in the repo.** This site is 100% static/public — no API keys, no database, no auth. Keep it that way.
- [ ] Only variables prefixed **`NEXT_PUBLIC_`** reach the browser. Anything without that prefix stays server-side. **Never** put a secret behind `NEXT_PUBLIC_`.
- [ ] `.env*.local` is already in `.gitignore`. Commit a `.env.example` with *empty* values only, never real ones.
- [ ] The phone number and email on the page are intentionally public — that's the point of a contact section. Everything else (personal address, private numbers) stays off the site.
- [ ] All external links use `target="_blank" rel="noopener noreferrer"` — already done sitewide (prevents tab-nabbing).
- [ ] The contact form is backend-free (it opens the visitor's mail client), so there is **no endpoint to spam or inject into**. If you later add a real API route: validate input server-side, add rate limiting, and add a honeypot/captcha.
- [ ] Never paste tokens into chat or commit them. If one leaks, rotate it immediately.
- [ ] Keep dependencies patched: `npm audit` and `npm outdated` monthly. (Next.js is pinned to a patched **14.2.35**.)

---

## 3. Deployment — GitHub → Vercel

### A. Push to GitHub

> **This project is already a Git repo connected to GitHub**
> (`infoceyteq-maker/Isurumeneripitiya-`, branch `arena/01a0f947-isurumeneripitiya`).
> To publish everyday changes, you only need:
>
> ```bash
> git add .
> git commit -m "Update content"
> git push
> ```
>
> The commands below are for starting a **brand-new** repo from scratch.

```bash
# 1. Move into the project folder
cd path/to/your-project

# 2. Initialise Git and set the default branch name
git init
git branch -M main

# 3. Make sure secrets/build output are ignored (this repo already has .gitignore)
cat .gitignore     # should include: node_modules, .next, .env*.local

# 4. Stage and commit everything
git add .
git commit -m "Initial commit: Isuru Meneripitiya artist website"

# 5. Create the GitHub repo
#    Option A — with the GitHub CLI (creates + pushes in one step):
gh repo create isuru-meneripitiya --public --source=. --remote=origin --push

#    Option B — manually: create an empty repo at https://github.com/new
#    (no README/.gitignore), then:
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Later updates are always just:

```bash
git add .
git commit -m "Describe what changed"
git push
```

### B. Import into Vercel

1. Go to **https://vercel.com** and **Sign Up / Log in with GitHub**.
2. Dashboard → **Add New…** → **Project**.
3. Under *Import Git Repository*, find your repo → **Import**.
   (First time only: *Adjust GitHub App Permissions* → grant access to the repo.)
4. **Configure Project** — Vercel auto-detects Next.js, so leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Root Directory: `./`
5. **Environment Variables** — none needed for this site. (If you add any later: Project → Settings → Environment Variables, then **redeploy**.)
6. Click **Deploy** and wait ~1–2 minutes.
7. You get a live URL like `https://isuru-meneripitiya.vercel.app`. 🎉

### C. Custom domain (optional)

1. Project → **Settings → Domains → Add**, enter e.g. `isurumeneripitiya.com`.
2. At your domain registrar, add the records Vercel shows:
   - Apex (`example.com`) → **A** record → `76.76.21.21`
   - `www` → **CNAME** → `cname.vercel-dns.com`
3. Wait for DNS propagation (minutes to a few hours). Vercel issues the SSL certificate automatically.
4. Update `metadataBase` in `app/layout.tsx` and `url` in `app/page.tsx` to the real domain so social-share previews work.

### D. After going live

- [ ] Every push to the default branch **auto-deploys**; pull requests get preview URLs.
- [ ] Replace the placeholder photos in `public/images/` (`hero-bg.jpg`, `about-image.jpg`, `event-flyer.jpg`).
- [ ] Check all social/music links open correctly, and test the WhatsApp buttons on a real phone.
- [ ] Run Lighthouse on the live URL (mobile).
- [ ] Scan on https://securityheaders.com.
- [ ] Submit the domain to **Google Search Console** for indexing.
