import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import { WhatsAppLink } from '../components/WhatsAppChooser.jsx'
import { BadgeCheck, Check, Phone, WhatsAppIcon } from '../components/Icons.jsx'
import { PLACEMENT, placementPage as pg } from '../data/placement.js'
import { SITE, telHref, generalEnquiryMessage } from '../data/site.js'

export default function Placement() {
  useSeo({ title: pg.title, description: 'Placement at Shanti Institute Technical Degree College, Jamo: 100+ students placed, a stated 100% placement guarantee, and how students are prepared.' })
  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="hover:underline">Home</Link></li><li aria-hidden="true">/</li>
              <li aria-current="page">Placement</li>
            </ol>
          </nav>
          <h1 className="mt-3 max-w-3xl">{pg.title}</h1>
          <div className="mt-6 grid max-w-md grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-3xl font-extrabold text-navy-900">{PLACEMENT.placedCount}</p><p className="text-sm font-semibold text-muted">Students placed</p></div>
            <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-3xl font-extrabold text-green-800">100%</p><p className="text-sm font-semibold text-muted">Placement guarantee</p></div>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-10 py-10 lg:grid-cols-[1fr_20rem] lg:gap-12 lg:py-14">
        <article className="min-w-0 max-w-3xl space-y-10 text-[1.02rem]">
          <div className="space-y-3">{pg.intro.map((p) => <p key={p}>{p}</p>)}</div>

          <section aria-labelledby="prep-h">
            <h2 id="prep-h" className="!text-2xl">{pg.prepTitle}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {pg.prep.map(([t, d]) => (
                <li key={t} className="card p-5"><h3 className="flex items-center gap-2 !text-lg"><Check size={18} className="text-accent" aria-hidden="true" />{t}</h3><p className="mt-1.5 text-[0.95rem] text-muted">{d}</p></li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="g-h" className="rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-6">
            <h2 id="g-h" className="flex items-center gap-2 !text-2xl"><BadgeCheck size={26} className="text-green-700" aria-hidden="true" />{pg.guaranteeTitle}</h2>
            <div className="mt-3 space-y-3">{pg.guarantee.map((p) => <p key={p}>{p}</p>)}</div>
            <p className="mt-4">
              <Link to={PLACEMENT.termsPath} className="font-bold text-navy-800 underline underline-offset-2 hover:text-accent-dark">{PLACEMENT.termsLinkText}</Link>
            </p>
          </section>
        </article>

        <aside>
          <div className="card p-6 lg:sticky lg:top-24">
            <h2 className="!font-sans !text-lg !font-bold">Talk to the institute</h2>
            <p className="mt-2 text-sm text-muted">Ask about courses, placement and admission.</p>
            <div className="mt-5 flex flex-col gap-3">
              <WhatsAppLink message={generalEnquiryMessage} className="btn btn-wa"><WhatsAppIcon size={18} /> WhatsApp <span className="sr-only">(opens WhatsApp)</span></WhatsAppLink>
              <a href={telHref()} className="btn btn-navy"><Phone size={18} aria-hidden="true" /> Call {SITE.primaryPhone.display}</a>
              <Link to="/courses/safety-officer" className="btn btn-outline">Safety Officer course</Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
