# Shanti Institute Technical Degree College, Jamo — website

React + Vite + Tailwind. Run: `npm install && npm run dev`. Build: `npm run build` (output in `dist/`, SPA fallback in `public/_redirects`).

## Update content (no component edits needed)
- `src/data/site.js` — address, phones, email, WhatsApp number, enquiry endpoint
- `src/data/courses.js` — the 11 poster courses
- `src/data/faculty.js` — faculty names, roles and bios (SAMPLE bios: replace)
- `src/data/achievements.js` — achievement categories and items with descriptions (SAMPLE except the real Google rating: replace)
- `src/data/features.js` — "why learn here" points

## Images (automatic — no code changes)
Drop photos into these folders and run `npm run build`; they appear and rotate automatically:
- Banner: `src/assets/banner/` (wide, about 2400×800 — the banner is about 300px tall on laptops)
- Each course: `src/assets/courses/<course-id>/` (e.g. `src/assets/courses/adca/01.jpg`, `02.jpg`…)
- Achievements: `src/assets/achievements/<certificates|events|student-projects|recognition>/`
- Gallery: `src/assets/gallery/<category>__<name>.jpg` (e.g. `events__annual-day.jpg`)
- Faculty and Managing Director: `src/assets/faculty/afsar-sir.png`, `neha-khatoon.png`, `priti-miss.png` (square photo, shown round; text in `src/data/faculty.js`)
- Round logo: `src/assets/logo.png`
- About image: `src/assets/about/` (one landscape image)
The sample images are .png files (courses other than Safety Officer are .svg). To replace a sample, save your image over the file with the same name, or delete the sample and add yours. They are generated sample illustrations (a building, labs, classrooms, course screens, certificates, events), not photographs. Once a folder has a real photo, its placeholders are ignored.

## Courses
Edit `src/data/courses.js`. Safety Officer, Store Keeper, Typing, Time Keeper and AutoCAD have SAMPLE descriptions and no duration (no syllabus was published): replace them with the institute's real syllabus. "Enroll" buttons open WhatsApp with a ready message (`enrollMessage` in `src/data/site.js`).

## Enquiry form
No backend is connected, so the form does NOT deliver anything by itself: it offers a pre-filled WhatsApp message instead.
To receive submissions, create a Formspree (or similar) endpoint and set `VITE_ENQUIRY_ENDPOINT` in `.env`.

## WhatsApp numbers
Every WhatsApp button opens a dialog with two numbers (`whatsappNumbers` in `src/data/site.js`): +91 85214 54437 first,
then +91 80028 55930. The chosen number opens WhatsApp with the course or enquiry message already written.

## Placement commitment
Text and conditions live in `src/data/placement.js`. It is shown as "the institute states ..." with visible conditions,
because the exact terms are not yet confirmed. Once the institute gives its written terms, replace `conditions` and set `confirmed: true`.

## To confirm with the institute before launch
- The exact placement-guarantee terms (which courses, eligibility, attendance, completion) and whether WhatsApp is active on both numbers
- Neha Khatoon's photo and an approved biography (the section currently has her name and role only)
- That WhatsApp is active on +91 80028 55930 (`whatsappNumber` in site.js)
- That the listed email is the one they want published
- Whether poster item "CA" means Computer Accounting; durations shown (from the official site)

## Deploy: GitHub + Vercel
1. Create an empty repository on github.com (no README), then in this folder run:
   `git init && git add . && git commit -m "Initial commit" && git branch -M main`
   `git remote add origin https://github.com/<your-username>/<repo>.git && git push -u origin main`
2. On vercel.com choose Add New → Project → import the repository. Vercel detects Vite
   (build `npm run build`, output `dist`). Click Deploy.
3. `vercel.json` makes direct links such as `/courses/adca` work after a refresh.
4. Optional: add `VITE_ENQUIRY_ENDPOINT` under Project → Settings → Environment Variables, then redeploy.
5. Every later `git push` to `main` redeploys automatically. Add your domain under Settings → Domains.

## Adding or removing images (no code changes)
Drop any number of images into a folder (e.g. `src/assets/courses/safety-officer/`) and rebuild/redeploy. The slideshow on that course, achievement, banner and gallery picks up every file automatically (jpg, jpeg, png, webp, avif, svg, upper or lower case) in file-name order (01, 02, ... 10 sort numerically). Delete a file and it disappears. If a folder holds any photo (non-SVG), SVG placeholders in it are ignored; sample PNGs are not, so overwrite or delete them.

## Logo
`src/assets/logo.png` (or .svg/.jpg/.webp) is used in the header, footer and home banner automatically. The browser-tab icon is separate: replace `public/favicon.png` (64x64 or larger, square) with your logo too.

## Photos vs graphics
Real photographs should be .jpg/.jpeg/.webp (they are listed before .png graphics in Gallery, Achievements and About). Courses and banners follow file-name order: 01, 02, 03 ...


## Banners
- Wide banners (3:1, 2000×667): `src/assets/banner/` — laptop/desktop/tablet.
- Phone banners (3:2, 1200×800): `src/assets/banner-mobile/` — phones under 768px. Use the same file numbers so the order matches. If this folder is empty, phones use the wide banners.
