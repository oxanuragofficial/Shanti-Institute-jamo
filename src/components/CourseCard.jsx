import { Link, useNavigate } from 'react-router-dom'
import { BadgeCheck, Clock, WhatsAppIcon } from './Icons.jsx'
import Carousel from './Carousel.jsx'
import { getCourseImages } from '../data/media.js'
import { courseFull } from '../data/courses.js'
import { WhatsAppLink } from './WhatsAppChooser.jsx'
import { enrollMessage } from '../data/site.js'
import { PLACEMENT, showsPlacement } from '../data/placement.js'

// The whole card (image included) links to the details page; the two buttons sit above that link.
export default function CourseCard({ course }) {
  const images = getCourseImages(course)
  const navigate = useNavigate()
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_10px_28px_-14px_rgba(11,42,91,.45)]">
      <Carousel images={images} compact onOpen={() => navigate(`/courses/${course.id}`)} rounded="rounded-none" bordered={false} aspect="aspect-[16/10]" label={`${course.name} images`} />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-[1.1rem]">
          <Link to={`/courses/${course.id}`} className="no-underline after:absolute after:inset-0 hover:text-accent-dark">
            {course.name}
          </Link>
        </h3>
        {course.duration && (
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
            <Clock size={15} aria-hidden="true" /> {course.duration}
          </p>
        )}
        {showsPlacement(course) && <p className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-green-800"><BadgeCheck size={15} aria-hidden="true" /> {PLACEMENT.headline}</p>}
        <p className="mt-2 flex-1 text-[0.93rem] text-muted">{course.summary}</p>
        <div className="relative z-10 mt-4 grid grid-cols-2 gap-2">
          <Link to={`/courses/${course.id}`} className="btn btn-outline btn-sm whitespace-nowrap !px-2">
            View Details
          </Link>
          <WhatsAppLink message={enrollMessage(courseFull(course))} className="btn btn-wa btn-sm whitespace-nowrap !px-2">
            <WhatsAppIcon size={16} /> Enroll <span className="sr-only">in {course.name} (opens WhatsApp)</span>
          </WhatsAppLink>
        </div>
      </div>
    </article>
  )
}
