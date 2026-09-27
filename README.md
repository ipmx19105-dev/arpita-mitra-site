# Arpita Mitra — personal website

A fast, hand-built personal branding site. Plain HTML, CSS and JavaScript: no build step, no dependencies, nothing to break.

## What's inside

```
arpita-mitra-site/
├── index.html          ← all page content (edit text here)
├── styles.css          ← design: colours, fonts, layout
├── script.js           ← mobile menu, copy-email button, hero animation
├── 404.html            ← "page not found" page
├── vercel.json         ← Vercel settings (clean URLs, caching)
├── robots.txt
├── assets/
│   ├── favicon.svg                 ← browser tab icon
│   └── Arpita_Mitra_Resume.pdf     ← downloadable résumé
└── .vscode/            ← recommended extensions for VS Code
```

## Before you publish: 3 things to edit

Search `index.html` for `EDIT:` to find each one.

1. **Email**: replace `your.email@example.com` (it appears twice in the Contact section).
2. **LinkedIn**: replace `https://www.linkedin.com/in/your-profile` with your profile URL.
3. **Résumé PDF**: `assets/Arpita_Mitra_Resume.pdf` is your master résumé converted as-is, including the IIM Lucknow placement-office footer. Swap in a public version if you prefer, keeping the same file name.

To change colours, edit the variables at the top of `styles.css` (`--paper`, `--ink`, `--signal` and so on).

---

## Step 1: Open in VS Code

1. Unzip the file.
2. Open VS Code → **File → Open Folder…** → pick `arpita-mitra-site`.
3. VS Code will suggest installing **Live Server**. Click **Install**.
4. Right-click `index.html` → **Open with Live Server**. The site opens at `http://127.0.0.1:5500` and refreshes every time you save.

## Step 2: Put it on GitHub

You need [Git](https://git-scm.com/downloads) installed and a free [GitHub](https://github.com) account.

1. On GitHub, click **New repository**, name it `arpita-mitra-site`, leave it empty (no README), and click **Create repository**.
2. In VS Code, open the terminal (**Terminal → New Terminal**) and run, replacing `YOUR-USERNAME`:

```bash
git init
git add .
git commit -m "First version of my personal site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/arpita-mitra-site.git
git push -u origin main
```

Prefer clicking? Use the **Source Control** icon in VS Code's left bar → **Publish to GitHub**.

## Step 3: Go live on Vercel

1. Go to [vercel.com](https://vercel.com) and **Sign up with GitHub**.
2. Click **Add New… → Project**, then **Import** `arpita-mitra-site`.
3. Framework preset: **Other**. Leave build and output settings empty.
4. Click **Deploy**. In about 30 seconds you get a live link like `arpita-mitra-site.vercel.app`.

## Updating the site

Edit in VS Code, then:

```bash
git add .
git commit -m "Update experience section"
git push
```

Vercel redeploys automatically on every push.

## Optional: your own domain

Buy a domain (for example `arpitamitra.com` or `arpitamitra.in`), then in Vercel go to **Project → Settings → Domains → Add** and follow the DNS instructions. HTTPS is set up for you.
