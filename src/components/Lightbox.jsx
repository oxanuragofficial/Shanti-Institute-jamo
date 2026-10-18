import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from './Icons.jsx'

// Accessible modal image viewer: ESC closes, arrow keys / buttons / swipe navigate,
// focus is trapped while open and restored on close.
export default function Lightbox({ images, index, onClose, onChange }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const touch = useRef(null)
  const count = images.length
  const img = images[index]

  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  useEffect(() => {
    const opener = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Tab') {
        const f = dialogRef.current?.querySelectorAll('button')
        if (!f?.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  if (!img) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph viewer: ${img.title}`}
      className="fixed inset-0 z-[90] flex flex-col bg-navy-950/95"
      style={{ animation: 'fade-in .2s ease both' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touch.current == null) return
        const dx = e.changedTouches[0].clientX - touch.current
        touch.current = null
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <p className="text-sm" aria-live="polite">{index + 1} / {count}</p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close viewer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16"
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        {count > 1 && (
          <button type="button" onClick={prev} aria-label="Previous photograph"
            className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 sm:left-4">
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
        )}
        <img key={img.src} src={img.src} alt={img.alt || img.title}
          className="max-h-full max-w-full rounded object-contain" style={{ animation: 'fade-in .25s ease both' }} />
        {count > 1 && (
          <button type="button" onClick={next} aria-label="Next photograph"
            className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 sm:right-4">
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="px-4 py-4 text-center text-white">
        <p className="font-semibold">{img.title}</p>
        {img.category && <p className="text-sm text-navy-200">{img.category}</p>}
        {img.description && <p className="mx-auto mt-1 max-w-xl text-sm text-navy-100">{img.description}</p>}
      </div>
    </div>
  )
}
