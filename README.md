# Awesh Kumar — Portfolio

Personal portfolio built with **Next.js 14 (App Router)** and React. Every page is pre-rendered for fast loading and good SEO, and it deploys to Vercel for free.

## Run it on your computer

You need [Node.js 18.17 or newer](https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000. Changes you save appear instantly.

## Where to edit things

| What you want to change | File |
|---|---|
| Any text: jobs, projects, skills, education, stats, links | `data/portfolio.js` |
| Your CV download | Replace `public/Awesh_Kumar_Resume.pdf` (keep the same name) |
| Your photo | Replace `public/awesh-kumar.jpg` (keep the same name; a 3:4 portrait, about 720×960, works best) |
| Colours, fonts, spacing | `app/globals.css` (colour tokens are at the top in `:root`) |
| Home page layout | `app/page.js` |
| Other pages | `app/<page>/page.js` |
| Menu links | `NAV` in `data/portfolio.js` |
| About page text | `ABOUT` in `data/portfolio.js` |
| Favicon | `app/icon.svg` |

**Add a project:** copy one object in `PROJECTS` inside `data/portfolio.js`, give it a new unique `slug`, and change the text. Its page appears automatically at `/projects/<slug>`. Put a GitHub URL in `repo` to show a "View code" button.

**Add a job:** add an object at the top of `JOBS`. The first job is shown in full on the home page.

## Put it on GitHub

1. Create a new empty repository on GitHub, for example `portfolio` (no README).
2. In this folder run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/aweshkumar0346/portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**, pick the `portfolio` repository, and click **Import**.
3. Leave the settings as they are (Vercel detects Next.js) and click **Deploy**.
4. In about a minute you get a live link such as `https://portfolio-xxxx.vercel.app`.
   You can rename it under **Settings → Domains**, for example `aweshkumar.vercel.app`.

From then on, every `git push` to `main` redeploys the site automatically.

```bash
git add .
git commit -m "Update projects"
git push
```

## Optional settings (Vercel → Settings → Environment Variables)

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your live URL, e.g. `https://aweshkumar.vercel.app`. Used for Google and link previews. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Makes the contact form send messages straight to your inbox. Create a free form at https://formspree.io, copy its ID (the part after `/f/`), and paste it here. Without it, the form opens the visitor's email app or WhatsApp instead. |

After adding variables, redeploy from the **Deployments** tab. For local testing, copy `.env.example` to `.env.local` and fill it in.

## Project structure

```
app/
  layout.js            Fonts, header, animated background, footer
  page.js              Home (short previews of each section)
  about/               About me: story, how I work, quick facts
  experience/          Full experience timeline
  projects/            All projects + filter
  projects/[slug]/     One page per project (case study)
  skills/  education/  contact/
  globals.css          All styles
components/            Header, contact form, animations, shared blocks
data/portfolio.js      ← all your content
public/                CV and other static files
```
