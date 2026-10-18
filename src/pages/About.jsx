import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import PlacementSummary from '../components/PlacementSummary.jsx'
import Carousel from '../components/Carousel.jsx'
import AboutCollage from '../components/AboutCollage.jsx'
import { galleryImages } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import { ArrowRight, ExternalLink, Check, NamedIcon } from '../components/Icons.jsx'
import { features, focusPoints } from '../data/features.js'
import { ORGANIZATION, SITE } from '../data/site.js'

export default function About() {
  useSeo({
    title: 'About the Institute',
    description:
      'About Shanti Institute Technical Degree College, Jamo Bazar, Bihar: a branch of the Shanti Institute network offering practical technical, computer and vocational courses.',
  })
  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:py-16">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-2 max-w-3xl">Practical technical education at Jamo Bazar</h1>
            <p className="mt-4 max-w-2xl text-[1.05rem] text-muted">
              Shanti Institute Technical Degree College, Jamo is the Jamo branch of the Shanti Institute network, offering computer,
              accounting and technical skill courses with a focus on hands-on learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/courses" className="btn btn-primary">Browse courses <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link to="/contact" className="btn btn-outline">Contact the branch</Link>
            </div>
          </div>
          <AboutCollage className="mx-auto w-full max-w-xl lg:max-w-none" />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div className="space-y-5 text-[1.02rem]">
            <h2>Who we are</h2>
            <p>
              Shanti Institute Technical Degree College, Jamo is the Jamo Bazar branch of the Shanti Institute network, a training
              institute offering vocational and technical programmes alongside computer education. The network describes itself as one
              of the early institutions to offer vocational programmes, with the aim of helping young people become self-sufficient and
              productive.
            </p>
            <h2 className="!mt-10">What you can learn</h2>
            <ul className="space-y-3">
              <li><strong className="text-navy-900">Technical and vocational:</strong> <Link to="/courses/safety-officer" className="underline underline-offset-2 hover:text-accent-dark">Safety Officer</Link>, <Link to="/courses/autocad" className="underline underline-offset-2 hover:text-accent-dark">AutoCAD</Link>, Store Keeper and Time Keeper.</li>
              <li><strong className="text-navy-900">Computer:</strong> <Link to="/courses/adca" className="underline underline-offset-2 hover:text-accent-dark">ADCA</Link>, DCA, Computer Operator, DTP and Typing.</li>
              <li><strong className="text-navy-900">Accounting:</strong> Computer Accounting and <Link to="/courses/tally" className="underline underline-offset-2 hover:text-accent-dark">Tally</Link>.</li>
            </ul>
            <h2 className="!mt-10">How we teach</h2>
            <p>
              Learning is practical: laboratory-supported instruction, project and assignment work, and hands-on practice in skills used
              in real workplaces. Computer courses follow a “One Computer One Student” approach. Smart classes, interview tips and
              motivational sessions support students as they get ready for work.
            </p>
            <p className="rounded-lg border-l-4 border-accent bg-accent-50 p-4 text-[0.95rem]">
              Facilities, batch timing and fees can differ between branches. For anything specific to Jamo, please contact the branch
              directly.
            </p>
          </div>

          <aside className="card h-fit p-6">
            <h2 className="!text-xl">Branch details</h2>
            <dl className="mt-4 space-y-4 text-[0.95rem]">
              <div><dt className="font-semibold text-navy-900">Branch</dt><dd className="text-muted">Jamo (Siwan district listing), Bihar</dd></div>
              <div><dt className="font-semibold text-navy-900">Address</dt><dd className="text-muted">{SITE.address.line1}, {SITE.address.line2}</dd></div>
              <div><dt className="font-semibold text-navy-900">Contact person</dt><dd className="text-muted">{SITE.contactPerson}</dd></div>
            </dl>
            <Link to="/contact" className="btn btn-primary mt-6 w-full">Contact the branch</Link>
          </aside>
        </div>
      </section>

      <section className="section pt-0" aria-label="Placement">
        <div className="container-x"><PlacementSummary /></div>
      </section>

      <section className="section bg-navy-50" aria-labelledby="vm-h">
        <div className="container-x">
          <SectionHeading eyebrow="Network vision and mission" title="What the Shanti Institute network aims for" id="vm-h">
            Summarised from the organization’s official website.
          </SectionHeading>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="card p-6">
              <h3>Vision</h3>
              <p className="mt-2 text-muted">{ORGANIZATION.vision}</p>
            </div>
            <div className="card p-6">
              <h3>Mission</h3>
              <ul className="mt-3 space-y-2.5">
                {ORGANIZATION.missionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-muted">
                    <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="f-h">
        <div className="container-x">
          <SectionHeading eyebrow="Our focus" title="What we aim to provide" id="f-h" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white"><NamedIcon name={f.icon} /></span>
                <h3 className="mt-4">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {focusPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5"><Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{p}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Accreditation, affiliation and results are not published here because they have not been confirmed for this branch. Please
            ask the institute.
          </p>
        </div>
      </section>

      <section className="section pt-0" aria-labelledby="pics-h">
        <div className="container-x">
          <SectionHeading eyebrow="In pictures" title="Life at the institute" id="pics-h" />
          <div className="mt-8"><Carousel images={galleryImages.slice(0, 8)} aspect="aspect-[16/10]" label="Life at the institute" /></div>
          <p className="mt-5"><Link to="/gallery" className="link-arrow">See the full gallery <ArrowRight size={16} aria-hidden="true" /></Link></p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="card flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="!text-2xl">Part of the Shanti Institute network</h2>
              <p className="mt-2 text-muted">Learn more about the organization and its wider educational network.</p>
            </div>
            <a href={SITE.organizationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline shrink-0">
              Visit Official Organization Website <ExternalLink size={17} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-6"><Link to="/courses" className="link-arrow">Browse courses <ArrowRight size={16} aria-hidden="true" /></Link></p>
        </div>
      </section>
    </>
  )
}
