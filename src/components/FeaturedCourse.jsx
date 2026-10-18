import { Link } from 'react-router-dom'
import Carousel from './Carousel.jsx'
import PlacementNote from './PlacementNote.jsx'
import { WhatsAppLink } from './WhatsAppChooser.jsx'
import { HardHat, ArrowRight, Check, WhatsAppIcon, ShieldCheck } from './Icons.jsx'
import { courseFull } from '../data/courses.js'
import { courseEnquiryMessage } from '../data/site.js'
import { getCourseImages } from '../data/media.js'

// The featured course (Safety Officer) shown first in the courses section.
export default function FeaturedCourse({ course }) {
  const images = getCourseImages(course)
  return (
    <article aria-labelledby="featured-course-h" className="card overflow-hidden border-2 border-accent/40 shadow-[0_14px_36px_-18px_rgba(11,42,91,.5)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative">
          <Carousel images={images} rounded="rounded-none" bordered={false} aspect="aspect-[16/10]" label={`${course.name} images`} />
          <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-bold text-white shadow">
            <HardHat size={16} aria-hidden="true" /> Featured course
          </span>
          <div className="hidden p-5 lg:block lg:p-6"><PlacementNote detailed /></div>
        </div>
        <div className="flex flex-col p-5 sm:p-7">
          <h3 id="featured-course-h" className="!text-2xl sm:!text-[1.7rem]">{course.name}</h3>
          <p className="mt-1 font-semibold text-navy-700">Workplace safety training</p>
          <div className="mt-3 space-y-2.5 text-[0.98rem] text-muted">
            {course.description.map((p) => <p key={p}>{p}</p>)}
          </div>

          <h4 className="mt-5 flex items-center gap-2 !font-sans text-sm font-bold uppercase tracking-wide text-navy-800"><ShieldCheck size={18} className="text-accent" aria-hidden="true" /> What you will learn</h4>
          <ul className="mt-2 grid gap-1.5 text-[0.95rem] sm:grid-cols-2">
            {course.modules.map((m) => (
              <li key={m.title} className="flex items-start gap-2"><Check size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{m.title}</li>
            ))}
            <li className="flex items-start gap-2"><Check size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true" />Practical safety skills</li>
          </ul>

          <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line text-center text-sm">
            {[['Duration', course.duration || 'Ask the institute'], ['Fees', 'Ask the institute'], ['Batch timing', 'Ask the institute']].map(([k, v]) => (
              <div key={k} className="bg-white p-2.5"><dt className="text-xs font-semibold text-muted">{k}</dt><dd className="mt-0.5 font-semibold text-navy-900">{v}</dd></div>
            ))}
          </dl>

          <PlacementNote detailed className="mt-5 lg:hidden" />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <WhatsAppLink message={courseEnquiryMessage(courseFull(course))} className="btn btn-wa">
              <WhatsAppIcon size={18} /> Enquire Now <span className="sr-only">about {course.name} (opens WhatsApp)</span>
            </WhatsAppLink>
            <Link to={`/courses/${course.id}`} className="btn btn-outline">View full details <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </article>
  )
}
