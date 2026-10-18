# Final version: what is in this folder

Check these to confirm you have the latest files:
- `src/assets/faculty/` contains `afsar-sir.png`, `neha-khatoon.png`, `priti-miss.png` (Neha Khatoon is the middle card in Faculty).
- There is no Managing Director section and no `src/assets/leadership/` folder.
- `src/assets/logo.png`, `banner/`, `gallery/`, `achievements/`, `about/` are all `.png`.
- `src/assets/courses/safety-officer/` is `.png`; every other course folder is `.svg`.
- Every WhatsApp button opens a number chooser: +91 85214 54437 first, +91 80028 55930 second.
- Safety Officer is the featured course at the top of Courses; placement note shows conditions.
- `.gitignore`, `vercel.json`, `.env.example` are included.

To replace a sample image, save your image over the file with the same name (or delete the sample and add yours).
Extract this zip into a NEW empty folder, then run `npm install` and `npm run dev`.

## Latest update
- About section: "100+ students placed" and "100% placement guarantee" block with a "Terms and conditions apply" link.
- Terms text removed from the placement boxes; the link opens the new page `/placement-terms` (text in `src/data/placement.js`).
- The placement line and link appear on every course card, every course page, the featured Safety Officer block and the About page.
- Course images: Safety Officer is PNG; the other 10 courses stay SVG (real photographs cannot be generated here).

## v3 update
- About (home + /about): "Read more" button opens /placement; the "Terms and conditions apply" link appears only on /placement and leads to /placement-terms.
- "100% placement guarantee" text now shows only on the Safety Officer course (featured block and its detail page). Other courses show none.
- About content rewritten (who we are, what you can learn, how we teach). Placement figures remain owner-supplied; confirm before publishing.

## v4 update
- Home About: image and text columns are now equal height on laptop/desktop; the image fills its column and has a stats bar (courses, students placed, Jamo Bazar PIN) over the bottom, so no empty space remains.
- Safety Officer: the 100% placement guarantee box now has a description and three points (featured block and course page).

## v9 update
- Real logo (the one you provided) is now src/assets/logo.png, used in header, footer and favicon (public/favicon.png).
- 6 new banners (3:1) in src/assets/banner/. The banner box is now 3:1 too, so the full image always shows; controls sit in a bar under it (nothing covers the picture). The round logo overlay was removed because the banners include the logo.
- New course info card (04) for every course: logo, course name, duration where published, topics where published. Safety Officer's is PNG; the others are SVG.
- Slideshow arrows are hidden on phones (swipe instead).

## v10 (merged with your src.zip)
- Started from your src.zip: every image you supplied is kept (faculty photos, safety-officer 01-06, banners 01-06, logo, all PNG/SVG pairs) and your faculty.js text is kept.
- Your logo.png (823x834) is used in header, footer and favicon.
- New banners added as 07-12 in src/assets/banner/ (after your six). Banner box is 3:1; any image with another shape (your 4:1 banners) gets a soft blurred fill, so nothing is cropped or covered.
- New course cards: courses/<id>/04.svg + 05.svg (Safety Officer: 07.png + 08.png so your 04-06 are untouched).

## v11
- Slideshows rebuilt: swipe/drag follows your finger, auto-change, counter "3 / 12" instead of dots, pause button, arrows on large screens. Pictures that do not match the frame sit whole over a soft blurred copy (nothing cropped).
- Banner: round logo back at the bottom centre; 14 banners (new ones 01-08, your earlier six are now 09-14).
- Your 23 photos were added (originals, unchanged quality): Safety Officer course (5), Achievements > Events (4) and Recognition (14, shown as a photo grid), Gallery (all 23, categories Events and Safety Training), About (2).
- Course folders renumbered: created cards first, then photos (Safety Officer), then earlier images. Safety Officer's old SVG copies are in courses/safety-officer/_old-svg/ (not shown on the site).
- About (home + /about) redesigned with a photo collage. Fixed: /about imported the wrong component for the placement summary.
- 3 new gallery graphics (our courses, Safety Officer, enquiry).

## v12
- Banner: your safety-training banner is now first; 7 new photo banners in the same navy-panel style (awards, prize distribution, trophies, community, field practice, recognition) come before the graphic banners (20 in total).
- The two trophy-handover photos are colour-corrected and sharpened, and are now first in Gallery, Achievements and About.

## v13
- Banner: every banner is a single photo; the two-photo composites were replaced. Your 4:1 banners were re-rendered to 3:1 with a styled fill so no blank space shows.
- Narrow (portrait) photos now come as 16:10 images with a styled blurred backdrop and a framed photo, so no blank bars appear (gallery, About, Safety Officer course).
- Logo is cropped to a round shape with a transparent background; favicons (32, 192, apple-touch) regenerated.
- Gallery and banner order curated (wide group photos first, categories mixed).
- Achievements: Recognition and Events now hold their own real photographs in src/assets/achievements/<id>/ (the site reads them from there, no longer from the gallery).

## v15 (built on your uploaded src)
- Banner: phones (under 768px) now use taller 3:2 banners from src/assets/banner-mobile/; laptops/desktops/tablets keep the 3:1 banners. Width is unchanged; every banner fills its box completely (cover, no blurred bands).
- All slideshows: pause button and "n / N" counter removed. Touch screens swipe; laptops/desktops get always-visible previous/next arrows and mouse drag. Slideshows change by themselves everywhere (pausing only while dragging or off-screen) and restart after a swipe/arrow press.
- Course and achievement card slideshows can be swiped too; a tap/click without dragging still opens the page.
- About page "Life at the institute" strip is now a slideshow.
