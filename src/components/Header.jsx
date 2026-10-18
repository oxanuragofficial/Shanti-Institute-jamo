import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowRight, LogoMark } from './Icons.jsx'
import { NAV_LINKS, SITE, telHref } from '../data/site.js'

const navClass = ({ isActive }) =>
  `rounded-md px-2 py-2 text-[0.92rem] xl:px-3 xl:text-[0.95rem] font-semibold no-underline transition-colors ${
    isActive ? 'text-accent-dark' : 'text-navy-900 hover:text-accent-dark'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const buttonRef = useRef(null)
  const panelRef = useRef(null)

  // Close the menu on navigation
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  // ESC closes; lock body scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container-x flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]">
        <Link to="/" className="flex min-w-0 items-center lg:shrink-0 gap-2.5 no-underline" aria-label="Shanti Institute Technical Degree College, Jamo — home">
          <LogoMark size={40} />
          <span className="min-w-0 leading-tight">
            <span className="block font-serif text-[1.02rem] font-bold text-navy-900 sm:text-lg">Shanti Institute</span>
            <span className="block text-[0.62rem] font-semibold uppercase leading-tight tracking-normal text-muted sm:text-xs sm:tracking-wide lg:whitespace-nowrap">
              Technical Degree College · Jamo
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_LINKS.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} className="rounded-md px-2 py-2 text-[0.92rem] xl:px-3 xl:text-[0.95rem] font-semibold text-navy-900 no-underline hover:text-accent-dark">
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} className={navClass}>
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref()} className="btn btn-outline btn-sm hidden whitespace-nowrap md:inline-flex" aria-label={`Call now ${SITE.primaryPhone.display}`}>
            <Phone size={17} aria-hidden="true" /> <span className="hidden xl:inline">Call Now</span>
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm hidden whitespace-nowrap sm:inline-flex">
            Enquire Now
          </Link>
          <a
            href={telHref()}
            className="btn btn-outline btn-sm !px-0 w-10 md:hidden"
            aria-label={`Call now ${SITE.primaryPhone.display}`}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="btn btn-navy btn-sm !px-0 w-10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={panelRef} className="border-t border-line bg-white lg:hidden" style={{ animation: 'fade-in .18s ease both' }}>
          <nav aria-label="Mobile" className="container-x flex flex-col py-3">
            <Link to="/" className="rounded-md px-2 py-3 text-base font-semibold text-navy-900 no-underline">Home</Link>
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-md px-2 py-3 text-base font-semibold text-navy-900 no-underline">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-4">
              <a href={telHref()} className="btn btn-outline"><Phone size={18} aria-hidden="true" /> Call Now</a>
              <Link to="/contact" className="btn btn-primary">Enquire Now <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
