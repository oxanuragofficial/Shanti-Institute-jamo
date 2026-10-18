import { Link } from 'react-router-dom'
import { SITE, directionsUrl, telHref } from '../data/site.js'
import { courses } from '../data/courses.js'
import { Phone, MapPin, Mail, ExternalLink, LogoMark } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <p className="font-serif text-lg font-bold leading-tight text-white">Shanti Institute<br /><span className="text-sm font-semibold text-navy-200">Technical Degree College, Jamo</span></p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-200">
            Technical, computer and vocational skill education at Jamo Bazar, Bihar. A branch of the Shanti Institute network.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="!font-sans !text-sm !font-bold uppercase tracking-wider !text-white">Quick Links</h2>
          <ul className="mt-3 text-sm [&_a]:inline-block [&_a]:py-1.5">
            {[['Home', '/'], ['About', '/about'], ['Courses', '/courses'], ['Achievements', '/achievements'], ['Gallery', '/gallery'], ['Placement', '/placement'], ['Contact', '/contact']].map(([l, to]) => (
              <li key={to}><Link to={to} className="text-navy-100 no-underline hover:text-white hover:underline">{l}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Courses">
          <h2 className="!font-sans !text-sm !font-bold uppercase tracking-wider !text-white">Courses</h2>
          <ul className="mt-3 text-sm [&_a]:inline-block [&_a]:py-1.5">
            {courses.slice(0, 6).map((c) => (
              <li key={c.id}><Link to={`/courses/${c.id}`} className="text-navy-100 no-underline hover:text-white hover:underline">{c.name}</Link></li>
            ))}
            <li><Link to="/courses" className="font-semibold text-white no-underline hover:underline">All courses</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="!font-sans !text-sm !font-bold uppercase tracking-wider !text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-navy-200" aria-hidden="true" />
              <span>
                {SITE.address.line1}<br />{SITE.address.line2}
                <br /><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2">Get directions</a>
              </span>
            </li>
            {SITE.phones.map((p) => (
              <li key={p.tel} className="flex gap-2.5">
                <Phone size={18} className="mt-0.5 shrink-0 text-navy-200" aria-hidden="true" />
                <span>
                  <a href={telHref(p.tel)} className="text-white no-underline hover:underline">{p.display}</a>
                  <span className="block text-xs text-navy-200">{p.label}</span>
                </span>
              </li>
            ))}
            {SITE.email && (
              <li className="flex gap-2.5">
                <Mail size={18} className="mt-0.5 shrink-0 text-navy-200" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="break-all text-white no-underline hover:underline">{SITE.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-sm text-navy-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Part of the Shanti Institute network.{' '}
            <a href={SITE.organizationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white underline underline-offset-2">
              Official organization website <ExternalLink size={14} aria-hidden="true" />
            </a>
          </p>
          <p>© {year} Shanti Institute Technical Degree College, Jamo.</p>
        </div>
      </div>
    </footer>
  )
}
