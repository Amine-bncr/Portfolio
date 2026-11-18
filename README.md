# Amine Bennacer

Personal portfolio of Mohamed Amine Bennacer, a Computer Science student at Middlesex University and a freelance web developer under the name Amine-dev.

## Live site

Not deployed yet. After the first Netlify publish, replace this placeholder with the real address:

<https://YOUR-SITE.netlify.app>

Then set `site.url` in `src/data/content.ts` to that origin (https, no trailing slash) and deploy again, so the canonical link and the Open Graph image use the live address.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Netlify Forms

The contact form and buttons use controls from shadcn/ui. The page is a dark theme with blue as the only accent, in line with Amine-dev.

## Features

- One page for two readers: graduate and junior recruiters, and small businesses who want a website
- Sections for an introduction, hiring, selected work, background and contact
- A Netlify contact form named `contact`, with a honeypot field called `bot-field`
- All public copy, links, skills and the photo URL in one file, `src/data/content.ts`
- Title, description and Open Graph tags filled in from that file when the site is built
- A static `netlify.toml` so Netlify knows the build command, the publish folder and Node 22

The contact form only delivers messages after the site is deployed on Netlify. A local preview stays on the page and points you to the email link instead.

## Featured projects

Brief notes from the site. Status labels are the ones used on the page.

- **Rose & Saveurs** (live). A mobile-first site for an artisan pâtisserie. Visitors build an order and send it through WhatsApp. [Live site](https://rose-et-saveurs.netlify.app)
- **Athar Remedies** (live). A Shopify store Amine designed and built. [Live site](https://www.atharremedies.com)
- **Snaky DZ** (demo). A one-page ordering demo for a vegan food range. It is not a launched shop. [Demo](https://snaky-demo.netlify.app)
- **Hearback** (in progress). A React and TypeScript app for tracking job applications. There is no public demo yet. [Code](https://github.com/Amine-bncr/Heardback)
- **Lessons shop** (coursework, CST3144). A Vue and Express app for browsing lessons and checking out. The page calls a local address, so it is not shown as a working demo.
- **Real Madrid Community** (coursework, October to December 2025). An Express and MongoDB fan platform with registration, a feed and photo uploads.

Smaller coursework projects (a museum app, Tic-Tac-Toe, a Super Bowl browser and a Java dice game) are listed on the page as well.

## Run it locally

```bash
npm install
npm run dev
```

The dev server is [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run preview
```

`npm run build` type-checks, then writes a static site to `dist/`. That folder is what Netlify publishes.

## Edit the content

Public copy, links, skills and the photo URL live in [`src/data/content.ts`](src/data/content.ts). Edit that file, then rebuild.

- **Photo.** `site.photo` is the GitHub avatar, used as a placeholder. Put a real portrait in `public/photo.jpg` and set `site.photo` to `"/photo.jpg"`. Update `site.photoAlt` as well.
- **Live URL.** After the first Netlify deploy, set `site.url` to the origin (`https://your-site.netlify.app`, no trailing slash) and redeploy.
- **Title and description.** `site.title` and `site.description` are injected into `index.html` at build time, including the Open Graph tags. You do not need to edit `index.html` for copy changes.
- **Projects and the hire section.** Add or rewrite entries in the same file. Keep the wording to things that are actually true.

Do not add a phone number or a student number to this file. Do not add metrics, clients, quotes or job titles that are not already written there.

## Deploy on Netlify

1. Push this repository to GitHub. This repo is [Amine-bncr/Portfolio](https://github.com/Amine-bncr/Portfolio).
2. In Netlify, choose **Add new site**, then **Import an existing project**, and pick this repository.
3. Netlify reads [`netlify.toml`](netlify.toml). The build command is `npm run build`. The publish directory is `dist`. Node 22 is set there. You can leave the UI fields empty.
4. Deploy. Then open **Forms** in the Netlify site settings and confirm a form named `contact` is listed. The form is the hidden one in `index.html`, which Netlify’s parser finds in the built HTML. Submissions arrive in that Forms tab. The site has to be deployed for that to work.
5. Set `site.url` in `src/data/content.ts` to the live address and deploy again, so link previews use the right image.
6. Optional: add a custom domain under **Domain management**.

The form includes a honeypot field named `bot-field`. Leave that name as it is if you change the form, and keep the matching fields (`name`, `email`, `audience`, `message`) in both the React form and the hidden form in `index.html`.

## Contact

- Email: [bennaceramine9@gmail.com](mailto:bennaceramine9@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/amine-bennacer-6a85b2298](https://www.linkedin.com/in/amine-bennacer-6a85b2298)
- GitHub: [https://github.com/Amine-bncr](https://github.com/Amine-bncr)
