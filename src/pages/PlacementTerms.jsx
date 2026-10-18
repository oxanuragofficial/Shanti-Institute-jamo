import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import { WhatsAppLink } from '../components/WhatsAppChooser.jsx'
import { BadgeCheck, Check, Phone, WhatsAppIcon } from '../components/Icons.jsx'
import { PLACEMENT, termsPage as t } from '../data/placement.js'
import { SITE, telHref } from '../data/site.js'

export default function PlacementTerms() {
  useSeo({ title: t.title, description: 'Placement terms and conditions at Shanti Institute Technical Degree College, Jamo: what the placement commitment covers and what to confirm before enrolling.' })
  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="hover:underline">Home</Link></li><li aria-hidden="true">/</li>
              <li><Link to="/placement" className="hover:underline">Placement</Link></li><li aria-hidden="true">/</li>
              <li aria-current="page">Terms and conditions</li>
            </ol>
          </nav>
          <h1 className="mt-3 max-w-3xl">{t.title}</h1>
          <div className="mt-5 flex max-w-3xl items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-white"><BadgeCheck size={22} aria-hidden="true" /></span>
            <p className="text-[0.98rem] text-navy-900"><strong>{PLACEMENT.headline}.</strong> {PLACEMENT.statement} {PLACEMENT.placedLine}</p>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-10 py-10 lg:grid-cols-[1fr_20rem] lg:gap-12 lg:py-14">
        <article className="min-w-0 max-w-3xl space-y-8 text-[1.02rem]">
          <div className="space-y-3">{t.intro.map((p) => <p key={p}>{p}</p>)}</div>
          {t.sections.map((s) => (
            <section key={s.title} aria-label={s.title}>
              <h2 className="!text-xl">{s.title}</h2>
              <div className="mt-2 space-y-3 text-muted">{s.body.map((p) => <p key={p}>{p}</p>)}</div>
            </section>
          ))}
          <section aria-labelledby="ask-h" className="rounded-2xl bg-navy-50 p-5 sm:p-6">
            <h2 id="ask-h" className="!text-xl">Ask the institute before you enrol</h2>
            <ul className="mt-3 space-y-2.5">
              {t.askBefore.map((q) => <li key={q} className="flex items-start gap-2.5"><Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{q}</li>)}
            </ul>
          </section>
        </article>

        <aside>
          <div className="card p-6 lg:sticky lg:top-24">
            <h2 className="!font-sans !text-lg !font-bold">Get the terms in writing</h2>
            <p className="mt-2 text-sm text-muted">Message the institute and ask for the placement terms for your course.</p>
            <div className="mt-5 flex flex-col gap-3">
              <WhatsAppLink message={t.enquiryMessage} className="btn btn-wa">
                <WhatsAppIcon size={18} /> Ask on WhatsApp <span className="sr-only">(opens WhatsApp)</span>
              </WhatsAppLink>
              <a href={telHref()} className="btn btn-navy"><Phone size={18} aria-hidden="true" /> Call {SITE.primaryPhone.display}</a>
              <Link to="/courses" className="btn btn-outline">View courses</Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
