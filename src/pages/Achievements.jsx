import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import Lightbox from '../components/Lightbox.jsx'
import Carousel from '../components/Carousel.jsx'
import NotFound from './NotFound.jsx'
import { ArrowRight, Maximize2, ExternalLink } from '../components/Icons.jsx'
import { achievements, getAchievement } from '../data/achievements.js'
import { getAchievementImages, getAchievementItemImages, getAchievementPhotos } from '../data/media.js'
import { SITE } from '../data/site.js'

// /achievements — overview of all categories
export function AchievementsIndex() {
  useSeo({ title: 'Achievements', description: 'Certificates, events, student projects and recognition at Shanti Institute Technical Degree College, Jamo.' })
  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <p className="eyebrow">Achievements</p>
          <h1 className="mt-2">Our Achievements</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-x"><AchievementCards /></div>
      </section>
    </>
  )
}

// Category cards (used on the home page and the index page). Whole card opens the category page.
export function AchievementCards() {
  const navigate = useNavigate()
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {achievements.map((a) => (
        <li key={a.id} className="card group relative overflow-hidden transition-shadow hover:shadow-[0_10px_28px_-14px_rgba(11,42,91,.45)]">
          <Carousel images={getAchievementImages(a.id, a.title)} compact onOpen={() => navigate(`/achievements/${a.id}`)} rounded="rounded-none" bordered={false} aspect="aspect-[16/10]" label={`${a.title} images`} />
          <div className="p-4 text-center">
            <h3 className="!text-[1.05rem]">
              <Link to={`/achievements/${a.id}`} className="no-underline after:absolute after:inset-0 hover:text-accent-dark">{a.title}</Link>
            </h3>
            <p className="mt-1 text-sm text-muted">{a.intro}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy-800">View all <ArrowRight size={15} aria-hidden="true" /></span>
          </div>
        </li>
      ))}
    </ul>
  )
}

// /achievements/:id — every item in the category with its description
export default function AchievementDetail() {
  const { id } = useParams()
  const a = getAchievement(id)
  const [open, setOpen] = useState(null)
  const [openPhoto, setOpenPhoto] = useState(null)
  useSeo({ title: a ? a.title : 'Not found', description: a ? `${a.title} at Shanti Institute Technical Degree College, Jamo. ${a.intro}` : undefined })
  if (!a) return <NotFound />

  const imgs = getAchievementItemImages(a.id, a.title)
  const photos = getAchievementPhotos(a.id, a.title)
  const items = a.items.map((it, i) => ({ ...it, ...(imgs.length ? imgs[i % imgs.length] : {}), alt: `${it.title}: ${a.title}`, category: a.title }))

  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/achievements" className="hover:underline">Achievements</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{a.title}</li>
            </ol>
          </nav>
          <h1 className="mt-3">{a.title}</h1>
          <p className="mt-3 max-w-2xl text-[1.05rem] text-muted">{a.intro}</p>
        </div>
      </section>

      <section className="section" aria-label={a.title}>
        <div className="container-x">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <li key={it.title} className="card flex flex-col overflow-hidden">
                <button type="button" onClick={() => setOpen(i)} aria-label={`View larger: ${it.title}`}
                  className="group relative block aspect-[16/10] w-full overflow-hidden bg-navy-50">
                  {it.src && <img src={it.src} alt={it.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-[1.04]" />}
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 md:opacity-0 md:transition-opacity md:group-hover:opacity-100"><Maximize2 size={16} aria-hidden="true" /></span>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="!font-sans !text-lg !font-bold">{it.title}</h2>
                  <p className="mt-2 flex-1 text-[0.95rem] text-muted">{it.description}</p>
                  {it.link === 'google' && SITE.googleListingUrl && (
                    <a href={SITE.googleListingUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 text-sm">View on Google Maps <ExternalLink size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {photos.length > 0 && (
            <div className="mt-14">
              <h2 className="!text-2xl">Photographs</h2>
              <p className="mt-1 text-muted">{photos.length} photographs. Tap a picture to view it larger.</p>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {photos.map((ph, i) => (
                  <li key={ph.src}>
                    <button type="button" onClick={() => setOpenPhoto(i)} aria-label={`View larger: ${ph.title}`}
                      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-navy-50">
                      <img src={ph.src} alt={ph.alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 md:group-hover:scale-[1.04]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2 className="mt-14 !text-2xl">More achievements</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {achievements.filter((x) => x.id !== a.id).map((x) => (
              <li key={x.id}><Link to={`/achievements/${x.id}`} className="btn btn-outline btn-sm">{x.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      {open !== null && <Lightbox images={items.filter((x) => x.src)} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
      {openPhoto !== null && <Lightbox images={photos} index={openPhoto} onChange={setOpenPhoto} onClose={() => setOpenPhoto(null)} />}
    </>
  )
}
