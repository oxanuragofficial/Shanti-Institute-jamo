import { useState } from 'react'
import Lightbox from './Lightbox.jsx'
import { Maximize2 } from './Icons.jsx'

// Responsive masonry-free grid with hover overlay (desktop) and tap-to-open (mobile).
export default function GalleryGrid({ images }) {
  const [open, setOpen] = useState(null)
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${img.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-navy-50 text-left"
            >
              <img src={img.src} alt={img.alt || img.title} loading="lazy" decoding="async"
                className="h-full w-full object-cover object-[50%_30%] transition-transform duration-500 md:group-hover:scale-[1.04]" />
              <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/75 via-transparent to-transparent p-4 text-white md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-wide text-navy-100">{img.category}</span>
                <span className="font-semibold">{img.title}</span>
                <span className="absolute right-3 top-3 hidden h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 md:flex">
                  <Maximize2 size={16} aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox images={images} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </>
  )
}
