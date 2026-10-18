import { useMemo, useState } from 'react'
import useSeo from '../hooks/useSeo.js'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { galleryImages } from '../data/media.js'

export default function Gallery() {
  useSeo({
    title: 'Gallery',
    description: 'Photographs of Shanti Institute Technical Degree College, Jamo Bazar, Bihar.',
  })
  const [cat, setCat] = useState('All')
  const cats = useMemo(() => ['All', ...new Set(galleryImages.map((i) => i.category).filter(Boolean))], [])
  const shown = cat === 'All' ? galleryImages : galleryImages.filter((i) => i.category === cat)

  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-2">Photo Gallery</h1>
        </div>
      </section>
      <section className="section" aria-label="Photographs">
        <div className="container-x">
          {cats.length > 2 && (
            <div className="-mx-4 mb-6 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0" role="group" aria-label="Filter by category">
              <div className="flex gap-2 sm:flex-wrap">
                {cats.map((c) => (
                  <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
                    className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold ${cat === c ? 'border-navy-900 bg-navy-900 text-white' : 'border-line bg-white text-navy-900 hover:border-navy-700'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}
          <GalleryGrid images={shown} />
        </div>
      </section>
    </>
  )
}
