import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Slideshow used for banners, course/achievement/gallery pictures.
//  - Slides move sideways. Swipe or drag follows your finger; it also changes by itself.
//  - No dots, counter or pause button. Touch screens: swipe. Mouse screens (laptop/desktop): drag, or use the
//    previous / next arrows, which are always visible there.
//  - Every picture is shown whole: pictures that do not match the frame's shape are placed
//    inside it over a soft blurred copy of themselves, so nothing important is cropped.
//  - Changes by itself; pauses only while you drag it, when it is off-screen, or if the visitor asked their
//    device for reduced motion. After you swipe or press an arrow the timer starts again.
//  compact = card mode (smaller arrows). A tap/click without dragging calls onOpen (cards use it to open the page).
export default function Carousel({
  images,
  interval = 4500,
  aspect = 'aspect-[16/10]',
  label = 'Photographs',
  onOpen,
  compact = false,
  priority = false,
  rounded = 'rounded-xl',
  bordered = true,
  fit = 'auto', // 'auto' | 'cover' | 'contain'
  className = '',
  children, // optional overlay (e.g. the round logo on the banner)
}) {
  const count = images.length
  const [pos, setPos] = useState(1) // slot in the track: 0 = clone of last, 1..count = real, count+1 = clone of first
  const [anim, setAnim] = useState(true)
  const [dx, setDx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reduced] = useState(() => prefersReducedMotion())
  const [shape, setShape] = useState({}) // src -> 'cover' | 'contain'
  const root = useRef(null)
  const drag = useRef(null)
  const moved = useRef(false)
  const [offset] = useState(() => (compact ? Math.round(Math.random() * 1500) : 0))

  const index = count ? (((pos - 1) % count) + count) % count : 0

  const step = useCallback((d) => { setAnim(true); setPos((p) => p + d) }, [])
  const goTo = useCallback((i) => { setAnim(true); setPos(i + 1) }, [])

  // after sliding onto a clone, jump (without animation) to the real slide it copies
  const onTrackEnd = (e) => {
    if (e.target !== e.currentTarget) return
    if (pos === 0) { setAnim(false); setPos(count) }
    else if (pos === count + 1) { setAnim(false); setPos(1) }
  }
  useEffect(() => {
    if (anim) return
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)))
    return () => cancelAnimationFrame(r)
  }, [anim, pos])

  useEffect(() => {
    const el = root.current
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2, rootMargin: '200px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (count < 2 || reduced || !visible || dragging) return
    let t
    const start = setTimeout(() => {
      step(1)
      t = setInterval(() => step(1), interval)
    }, interval + offset)
    return () => { clearTimeout(start); clearInterval(t) }
  }, [count, reduced, visible, dragging, interval, offset, step, index])

  if (!count) return null

  const slides = [images[count - 1], ...images, images[0]]
  const canDrag = count > 1

  const onPointerDown = (e) => {
    if (!canDrag || (e.pointerType === 'mouse' && e.button !== 0)) return
    drag.current = { x: e.clientX, y: e.clientY, id: e.pointerId, w: e.currentTarget.clientWidth, locked: null, t: Date.now() }
    moved.current = false
  }
  const onPointerMove = (e) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    const mx = e.clientX - d.x
    const my = e.clientY - d.y
    if (d.locked === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) d.locked = Math.abs(mx) > Math.abs(my) ? 'x' : 'y'
    if (d.locked !== 'x') return
    if (!dragging) { setDragging(true); setAnim(false); try { e.currentTarget.setPointerCapture(e.pointerId) } catch { /* ignore */ } }
    moved.current = true
    setDx(mx)
  }
  const endDrag = (e) => {
    const d = drag.current
    drag.current = null
    if (!d) return
    if (d.locked === 'x') {
      const mx = e.clientX - d.x
      const fast = Math.abs(mx) / Math.max(Date.now() - d.t, 1) > 0.5
      setDragging(false); setDx(0); setAnim(true)
      if (Math.abs(mx) > Math.min(60, d.w * 0.15) || (fast && Math.abs(mx) > 24)) setPos((p) => p + (mx < 0 ? 1 : -1))
    }
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1) }
  }
  const onImgLoad = (src) => (e) => {
    const im = e.currentTarget
    const box = im.parentElement
    if (!box || !im.naturalWidth) return
    const ri = im.naturalWidth / im.naturalHeight
    const rb = box.clientWidth / box.clientHeight
    const mode = fit === 'auto' ? (Math.abs(ri / rb - 1) > 0.12 ? 'contain' : 'cover') : fit
    setShape((s) => (s[src] === mode ? s : { ...s, [src]: mode }))
  }

  return (
    <section
      ref={root}
      aria-roledescription="carousel"
      aria-label={label}
      className={`group relative overflow-hidden bg-navy-50 ${compact ? 'z-10' : ''} ${rounded} ${bordered ? 'border border-line' : ''} ${className}`}
      onKeyDown={onKeyDown}
    >
      <div
        className={`relative w-full ${aspect}`}
        style={canDrag ? { touchAction: 'pan-y', cursor: dragging ? 'grabbing' : compact ? 'pointer' : onOpen ? 'zoom-in' : 'grab' } : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClick={() => { if (!moved.current && onOpen) onOpen(index) }}
      >
        <div
          className="absolute inset-0 flex"
          style={{
            transform: `translate3d(calc(${-pos * 100}% + ${dx}px),0,0)`,
            transition: anim && !dragging && !prefersReducedMotion() ? 'transform .55s cubic-bezier(.22,.7,.2,1)' : 'none',
            willChange: 'transform',
          }}
          onTransitionEnd={onTrackEnd}
        >
          {slides.map((img, slot) => {
            const real = slot >= 1 && slot <= count
            const mode = shape[img.src] || (fit === 'contain' ? 'contain' : 'cover')
            const eager = (priority && slot <= 2) || (visible && Math.abs(slot - pos) <= 1)
            return (
              <figure
                key={`${slot}-${img.src}`}
                role={real ? 'group' : undefined}
                aria-roledescription={real ? 'slide' : undefined}
                aria-label={real ? `${slot} of ${count}` : undefined}
                aria-hidden={!real || slot !== pos}
                className="relative m-0 h-full w-full shrink-0 grow-0 basis-full overflow-hidden"
              >
                {mode === 'contain' && (
                  <img src={img.src} alt="" aria-hidden="true" decoding="async" loading={eager ? 'eager' : 'lazy'} draggable="false"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-90 blur-2xl" />
                )}
                <img
                  src={img.src}
                  alt={real ? img.alt || img.title || '' : ''}
                  loading={eager ? 'eager' : 'lazy'}
                  fetchPriority={priority && slot === 1 ? 'high' : undefined}
                  decoding="async"
                  draggable="false"
                  onLoad={onImgLoad(img.src)}
                  className={`relative h-full w-full ${mode === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
                {img.title && (
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
                    {img.title}
                  </figcaption>
                )}
              </figure>
            )
          })}
        </div>
        {children}
      </div>

      {count > 1 && (
        <>
          <button type="button" aria-label="Previous image" onClick={() => step(-1)}
            className={`car-btn absolute top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow transition hover:bg-white ${compact ? 'left-2 h-8 w-8' : 'left-3 h-10 w-10'}`}>
            <ChevronLeft size={compact ? 18 : 22} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next image" onClick={() => step(1)}
            className={`car-btn absolute top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow transition hover:bg-white ${compact ? 'right-2 h-8 w-8' : 'right-3 h-10 w-10'}`}>
            <ChevronRight size={compact ? 18 : 22} aria-hidden="true" />
          </button>
        </>
      )}
    </section>
  )
}
