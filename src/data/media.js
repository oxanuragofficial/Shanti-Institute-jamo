// ──────────────────────────────────────────────────────────────
// MEDIA — images are discovered automatically from folders. No code edits needed.
//
//  Banner        : src/assets/banner/                    (wide 3:1, about 2000×667)
//  Phone banner  : src/assets/banner-mobile/             (3:2, about 1200×800; used on phones. Keep the same order/numbers)
//  Course images : src/assets/courses/<course-id>/       (e.g. courses/adca/)
//  Achievements  : src/assets/achievements/<id>/         (certificates, events, student-projects, recognition)
//  Gallery       : src/assets/gallery/<category>__<name>.jpg   (e.g. events__annual-day.jpg)
//  About image   : src/assets/about/                     (one landscape image, about 1200×750)
//  Round logo    : src/assets/logo.png  (or .svg / .jpg / .webp)
//
// The .svg files currently in these folders are generated placeholder artwork,
// not photographs. As soon as a folder holds any real photo (.jpg/.png/.webp),
// the placeholders in that folder are ignored. Images show in file-name order.
// ──────────────────────────────────────────────────────────────

const courseFiles = import.meta.glob('/src/assets/courses/*/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const achievementFiles = import.meta.glob('/src/assets/achievements/*/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const bannerFiles = import.meta.glob('/src/assets/banner/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const galleryFiles = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const bannerMobileFiles = import.meta.glob('/src/assets/banner-mobile/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const facultyFiles = import.meta.glob('/src/assets/faculty/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const aboutFiles = import.meta.glob('/src/assets/about/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}', { eager: true, query: '?url', import: 'default' })
const logoFiles = import.meta.glob("/src/assets/logo.{png,svg,jpg,jpeg,webp,PNG,SVG,JPG,JPEG,WEBP}", { eager: true, query: '?url', import: 'default' })

const isSvg = (p) => p.toLowerCase().endsWith('.svg')
const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true })

// Real photographs are .jpg/.jpeg/.webp/.avif. (.png files are used for illustrations and graphics.)
const isPhoto = (p) => /\.(jpe?g|webp|avif)$/i.test(p)
const baseName = (p) => p.split('/').pop()

// byNumber: plain file-name order (courses: 01, 02, 03 ... you control the order by numbering).
// photosFirst: real photographs come before graphics, each group in file-name order.
function preferPhotos(entries, photosFirst = false) {
  const nonSvg = entries.filter(([p]) => !isSvg(p))
  const list = nonSvg.length ? nonSvg : entries
  return [...list].sort(([a], [b]) => {
    if (photosFirst && isPhoto(a) !== isPhoto(b)) return isPhoto(a) ? -1 : 1
    return byName(baseName(a), baseName(b))
  })
}

function groupByFolder(files) {
  const out = {}
  for (const [path, url] of Object.entries(files)) {
    const id = path.split('/')[4]
    ;(out[id] ||= []).push([path, url])
  }
  return out
}
const byCourse = groupByFolder(courseFiles)
const byAchievement = groupByFolder(achievementFiles)
const toImages = (entries, label, photosFirst = false) =>
  preferPhotos(entries, photosFirst).map(([p, src], i) => ({
    src,
    alt: `${label}: image ${i + 1}`,
  }))

export const getCourseImages = (course) => toImages(byCourse[course.id] || [], course.name)
export const getAchievementImages = (id, label) => toImages(byAchievement[id] || [], label, true)
// Real photographs of an achievement category (shown as a photo grid on its page).
export const getAchievementPhotos = (id, label) =>
  (byAchievement[id] || []).filter(([p]) => isPhoto(p)).sort(([a], [b]) => byName(baseName(a), baseName(b))).map(([, src], i) => ({ src, alt: `${label}: photo ${i + 1}`, title: `${label} ${i + 1}` }))
// Graphics/illustrations of a category (used by the item cards, which have their own text).
export const getAchievementItemImages = (id, label) => {
  const all = byAchievement[id] || []
  const gfx = all.filter(([p]) => !isPhoto(p))
  return toImages(gfx.length ? gfx : all, label)
}

export const bannerImages = toImages(Object.entries(bannerFiles), 'Shanti Institute banner')
// Phone banners (about 3:2, taller than the wide banners). Shown below 768px wide when this folder has images.
export const bannerMobileImages = toImages(Object.entries(bannerMobileFiles), 'Shanti Institute banner')

// "events__annual-day.jpg" -> { category: "Events", title: "Annual Day" }
const pretty = (s) => s.replace(/^\d+[-_]?/, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
export const galleryImages = preferPhotos(Object.entries(galleryFiles), true).map(([p, src]) => {
  const base = p.split('/').pop().replace(/\.[^.]+$/, '')
  const [cat, name] = base.includes('__') ? base.split('__') : ['gallery', base]
  const title = pretty(name)
  return { src, title, category: pretty(cat), alt: `${title} at Shanti Institute Technical Degree College, Jamo` }
})

export const logoSrc = Object.values(logoFiles)[0] || null

// Faculty photo for an id: a real photo (afsar-sir.jpg) wins over the placeholder (.svg).
export function getFacultyImage(id) {
  const matches = Object.entries(facultyFiles).filter(([p]) => p.split('/').pop().replace(/\.[^.]+$/, '') === id)
  const hit = matches.find(([p]) => !isSvg(p)) || matches[0]
  return hit ? hit[1] : null
}

// About-section image: src/assets/about/ (a real photo wins over the placeholder illustration).
const aboutList = preferPhotos(Object.entries(aboutFiles), true).map(([, src]) => src)
export const aboutImages = aboutList
export const aboutImage = aboutList[0] || null

