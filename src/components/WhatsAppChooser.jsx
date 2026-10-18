import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { WhatsAppIcon, X, ArrowRight } from './Icons.jsx'
import { SITE, whatsappHref } from '../data/site.js'

// Every WhatsApp button on the site is a <WhatsAppLink>. Clicking it opens this dialog so the
// visitor can pick which institute number to message; the prefilled text is kept for the chosen number.
const Ctx = createContext(null)

export function WhatsAppProvider({ children }) {
  const [req, setReq] = useState(null)
  const open = useCallback((message) => setReq({ message }), [])
  return (
    <Ctx.Provider value={open}>
      {children}
      {req && <Chooser message={req.message} onClose={() => setReq(null)} />}
    </Ctx.Provider>
  )
}

// Looks and works like a normal link (right-click / middle-click still go to the preferred number);
// a normal click opens the number chooser.
export function WhatsAppLink({ message, children, className, ...rest }) {
  const open = useContext(Ctx)
  return (
    <a
      {...rest}
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        if (!open || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
        open(message)
      }}
    >
      {children}
    </a>
  )
}

function Chooser({ message, onClose }) {
  const ref = useRef(null)
  const firstRef = useRef(null)

  useEffect(() => {
    const opener = document.activeElement
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'Tab') {
        const f = ref.current?.querySelectorAll('a[href],button')
        if (!f?.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[95] flex items-end justify-center bg-navy-950/70 p-0 sm:items-center sm:p-4"
      style={{ animation: 'fade-in .15s ease both' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-choose-h"
        className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 id="wa-choose-h" className="!text-xl">Choose a WhatsApp number</h2>
            <p className="mt-1 text-sm text-muted">Pick a number to message the institute. Your message is already written.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy-900 hover:bg-navy-50">
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-4 space-y-3">
          {SITE.whatsappNumbers.map((n, i) => (
            <li key={n.number}>
              <a
                ref={i === 0 ? firstRef : undefined}
                href={whatsappHref(message, n.number)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl border-2 p-3.5 no-underline transition-colors hover:border-wa ${i === 0 ? 'border-wa bg-green-50' : 'border-line bg-white'}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wa text-white"><WhatsAppIcon size={22} /></span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block text-lg font-bold text-navy-900">{n.display}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-muted">{n.label}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-navy-700" aria-hidden="true" />
                <span className="sr-only">Open WhatsApp with this number (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <details className="mt-4 text-sm">
          <summary className="cursor-pointer font-semibold text-navy-800">View your message</summary>
          <p className="mt-2 max-h-40 overflow-y-auto whitespace-pre-line rounded-lg bg-navy-50 p-3 text-muted">{message}</p>
        </details>
      </div>
    </div>
  )
}
