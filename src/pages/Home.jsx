import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import Banner from '../components/Banner.jsx'
import CourseGrid from '../components/CourseGrid.jsx'
import { WhatsAppLink } from '../components/WhatsAppChooser.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Carousel from '../components/Carousel.jsx'
import FacultySection from '../components/FacultySection.jsx'
import { AdmissionProcess, Faq } from '../components/ProcessFaq.jsx'
import { AchievementCards } from './Achievements.jsx'
import {
  ArrowRight, Phone, MapPin, ExternalLink, Check, NamedIcon, WhatsAppIcon, Award,
} from '../components/Icons.jsx'
import PlacementSummary from '../components/PlacementSummary.jsx'
import AboutCollage from '../components/AboutCollage.jsx'
import { features, focusPoints } from '../data/features.js'
import { galleryImages } from '../data/media.js'
import { SITE, directionsUrl, telHref, generalEnquiryMessage } from '../data/site.js'

export default function Home() {
  useSeo({
    description:
      'Shanti Institute Technical Degree College, Jamo Bazar, Bihar 841413. Computer, accounting and technical skill courses including ADCA, DCA, Tally and DTP. Call or enroll on WhatsApp.',
  })
  const previews = galleryImages.slice(0, 8)

  return (
    <>
      <Banner />

      {/* ABOUT */}
      <section className="section" aria-labelledby="about-h">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
            <AboutCollage className="order-2 mx-auto w-full max-w-xl lg:order-1 lg:max-w-none" />
            <div className="order-1 mx-auto max-w-2xl lg:order-2 lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="eyebrow">About us</p>
                <h2 id="about-h" className="mt-2">Practical skills for a better career</h2>
              </div>
              <p className="mt-4 text-[1.02rem] text-muted">
                Shanti Institute Technical Degree College, Jamo is the Jamo Bazar branch of the Shanti Institute network. We teach
                computer, accounting and technical skill courses, from ADCA, DCA and Tally to Safety Officer and AutoCAD, with a focus
                on practice rather than theory alone.
              </p>
              <ul className="mt-5 grid gap-2.5 text-[0.98rem]">
                {[
                  'Hands-on, laboratory-supported learning',
                  'One Computer One Student in computer courses',
                  'Smart classes, interview tips and motivational sessions',
                  'Courses for offices, workshops, stores and businesses',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-navy-900"><Check size={19} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{t}</li>
                ))}
              </ul>
              <div className="mt-6"><PlacementSummary /></div>
              <Link to="/about" className="link-arrow mt-5">Visit the About page <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {focusPoints.map((p, i) => (
              <li key={p} className="card flex flex-col items-center gap-2.5 p-4 text-center text-[0.95rem]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white"><NamedIcon name={['monitor', 'wrench', 'users', 'route'][i % 4]} size={20} /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="section bg-navy-50" aria-labelledby="courses-h">
        <div className="container-x">
          <SectionHeading eyebrow="Courses" title="Our Courses" id="courses-h" />
          <div className="mt-8"><CourseGrid /></div>
        </div>
      </section>

      {/* WHY */}
      <section id="why-us" className="section" aria-labelledby="why-h">
        <div className="container-x">
          <SectionHeading eyebrow="Facilities" title="Facilities & learning approach" id="why-h" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="card flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white"><NamedIcon name={f.icon} /></span>
                <div>
                  <h3 className="!text-[1.05rem]">{f.title}</h3>
                  <p className="mt-1 text-[0.93rem] text-muted">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section" aria-labelledby="ach-h">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Achievements" title="Our Achievements" id="ach-h" />
            {SITE.googleRating && (
              <a href={SITE.googleListingUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 no-underline hover:border-navy-700">
                <Award size={26} className="text-accent" aria-hidden="true" />
                <span className="leading-tight">
                  <span className="block text-lg font-bold text-navy-900">{SITE.googleRating.value} / 5 on Google</span>
                  <span className="block text-sm text-muted">{SITE.googleRating.count} ratings<span className="sr-only"> (opens Google Maps)</span></span>
                </span>
              </a>
            )}
          </div>
          <div className="mt-8"><AchievementCards /></div>
        </div>
      </section>

      {/* GALLERY */}
      {previews.length > 0 && (
        <section className="section" aria-labelledby="gal-h">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Gallery" title="Inside the institute" id="gal-h" />
              <Link to="/gallery" className="link-arrow">View all photographs <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="mt-8">
              <Carousel images={previews} aspect="aspect-[16/10]" label="Gallery photographs" />
            </div>
          </div>
        </section>
      )}

      <FacultySection />

      <AdmissionProcess />

      <Faq />

      {/* CONTACT */}
      <section className="section pt-0" aria-labelledby="con-h">
        <div className="container-x">
          <div className="grid gap-8 rounded-2xl bg-navy-900 p-6 text-white sm:p-10 lg:grid-cols-2">
            <div>
              <h2 id="con-h" className="!text-white">Contact the institute</h2>
              <address className="mt-5 not-italic text-navy-100">
                <p className="flex items-start gap-2.5"><MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{SITE.address.line1}<br />{SITE.address.line2}</span></p>
                <p className="mt-3 flex items-center gap-2.5"><Phone size={20} className="shrink-0" aria-hidden="true" />
                  <a href={telHref()} className="font-semibold text-white">{SITE.primaryPhone.display}</a></p>
              </address>
              <a href={SITE.organizationUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm text-navy-100 underline underline-offset-2">
                Part of the Shanti Institute network <ExternalLink size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a href={telHref()} className="btn bg-white text-navy-900 hover:bg-navy-50"><Phone size={18} aria-hidden="true" /> Call Now</a>
              <WhatsAppLink message={generalEnquiryMessage} className="btn btn-wa">
                <WhatsAppIcon size={18} /> WhatsApp <span className="sr-only">(opens WhatsApp)</span>
              </WhatsAppLink>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <MapPin size={18} aria-hidden="true" /> Get Directions <span className="sr-only">(opens Google Maps)</span>
              </a>
              <Link to="/contact" className="btn btn-primary">Send Enquiry <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
