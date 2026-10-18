import { useSearchParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import { WhatsAppLink } from '../components/WhatsAppChooser.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { MapPin, Phone, Mail, Navigation, ExternalLink, WhatsAppIcon } from '../components/Icons.jsx'
import { getCourse } from '../data/courses.js'
import { SITE, directionsUrl, generalEnquiryMessage, telHref } from '../data/site.js'

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Contact Shanti Institute Technical Degree College, Jamo Bazar, Bihar 841413. Call, WhatsApp, get directions or send an enquiry about a course.',
  })
  const [params] = useSearchParams()
  const q = params.get('course')
  const initial = q && (q === 'general' || getCourse(q)) ? q : ''

  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-12 lg:py-16">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2">Talk to the institute</h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] text-muted">
            Ask about a course, fees, batch timing or admission. Calling or sending a WhatsApp message is the quickest way to get an answer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="!text-xl">Shanti Institute Technical Degree College, Jamo</h2>
              <address className="mt-4 space-y-4 not-italic">
                <p className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-navy-700" aria-hidden="true" />
                  <span>{SITE.address.line1}<br />{SITE.address.line2}</span>
                </p>
                {SITE.phones.map((p) => (
                  <p key={p.tel} className="flex items-start gap-3">
                    <Phone size={20} className="mt-0.5 shrink-0 text-navy-700" aria-hidden="true" />
                    <span><a href={telHref(p.tel)} className="font-semibold text-navy-900">{p.display}</a><span className="block text-sm text-muted">{p.label}</span></span>
                  </p>
                ))}
                {SITE.email && (
                  <p className="flex items-start gap-3">
                    <Mail size={20} className="mt-0.5 shrink-0 text-navy-700" aria-hidden="true" />
                    <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-navy-900">{SITE.email}</a>
                  </p>
                )}
              </address>
              <p className="mt-4 text-sm text-muted">Contact person listed for this branch: {SITE.contactPerson}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <a href={telHref()} className="btn btn-navy btn-sm"><Phone size={17} aria-hidden="true" /> Call Now</a>
                <WhatsAppLink message={generalEnquiryMessage} className="btn btn-wa btn-sm">
                  <WhatsAppIcon size={17} /> WhatsApp <span className="sr-only">(opens WhatsApp)</span>
                </WhatsAppLink>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <Navigation size={17} aria-hidden="true" /> Directions <span className="sr-only">(opens Google Maps)</span>
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="!text-xl">Find us</h2>
              <p className="mt-2 text-muted">{SITE.address.line1}, Jamo Bazar, Bihar 841413.</p>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                <MapPin size={18} aria-hidden="true" /> Get Directions <ExternalLink size={15} aria-hidden="true" />
                <span className="sr-only">(opens Google Maps)</span>
              </a>
              <p className="mt-3 text-sm text-muted">Opens Google Maps. If the pin looks wrong, call the institute for directions.</p>
            </div>
          </div>

          <div>
            <h2 className="!text-2xl">Send an enquiry</h2>
            <p className="mb-5 mt-2 text-muted">Fill in your details and choose a course. We will not show or share fees here; the institute will confirm them.</p>
            <EnquiryForm initialCourse={initial} />
          </div>
        </div>
      </section>
    </>
  )
}
