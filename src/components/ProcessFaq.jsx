import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'
import { ChevronDown, Phone, MapPin } from './Icons.jsx'
import { SITE, directionsUrl, telHref } from '../data/site.js'

const steps = [
  { t: 'Choose a course', d: 'Browse the courses and open any course to see what you will learn.' },
  { t: 'Contact the institute', d: 'Tap Enroll to message us on WhatsApp, or call the institute.' },
  { t: 'Confirm details', d: 'Get the current fees, batch timing and the documents you need.' },
  { t: 'Join your batch', d: 'Complete admission and start learning.' },
]

export function AdmissionProcess() {
  return (
    <section id="admission" className="section bg-navy-50" aria-labelledby="adm-h">
      <div className="container-x">
        <SectionHeading eyebrow="Admission" title="How to join" id="adm-h" center />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="card relative p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-bold text-white" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-4 !text-[1.05rem]"><span className="sr-only">Step {i + 1}: </span>{s.t}</h3>
              <p className="mt-1 text-[0.93rem] text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'How do I enroll in a course?', a: 'Tap “Enroll” on any course. WhatsApp opens with a ready message to the institute. You can also call us or visit the branch.' },
  { q: 'What are the fees and batch timings?', a: 'Fees and batch timings are confirmed by the institute and can change, so please contact us for the current details.' },
  { q: 'Can beginners join?', a: 'Yes. Computer courses such as ADCA, DCA and Computer Operator start from computer fundamentals.' },
  { q: 'Which course should I choose?', a: 'ADCA is a complete computer course, DCA is shorter, Computer Accounting and Tally are for accounts work, and DTP is for design and print work. Call us and we will guide you.' },
  { q: 'Where is the institute?', a: `${SITE.address.line1}, ${SITE.address.line2}.`, extra: true },
]

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-h">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" id="faq-h" center />
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group p-0 open:shadow-sm">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="px-5 pb-5 text-[0.97rem] text-muted">
                <p>{f.a}</p>
                {f.extra && (
                  <p className="mt-3 flex flex-wrap gap-3">
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow"><MapPin size={16} aria-hidden="true" /> Get directions<span className="sr-only"> (opens Google Maps)</span></a>
                    <a href={telHref()} className="link-arrow"><Phone size={16} aria-hidden="true" /> {SITE.primaryPhone.display}</a>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">More questions? <Link to="/contact" className="font-semibold text-navy-800 underline underline-offset-2">Contact the institute</Link></p>
      </div>
    </section>
  )
}
