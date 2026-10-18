import { Link } from 'react-router-dom'
import { Phone, Send, WhatsAppIcon } from './Icons.jsx'
import { courseFull } from '../data/courses.js'
import { WhatsAppLink } from './WhatsAppChooser.jsx'
import { enrollMessage, telHref } from '../data/site.js'

// Enroll Now opens WhatsApp with a ready-made message naming the course.
export default function CourseCtas({ course, layout = 'stack' }) {
  const wrap = layout === 'row' ? 'flex flex-col gap-3 sm:flex-row sm:flex-wrap' : 'flex flex-col gap-3'
  return (
    <div className={wrap}>
      <WhatsAppLink message={enrollMessage(courseFull(course))} className="btn btn-wa">
        <WhatsAppIcon size={18} /> Enroll Now <span className="sr-only">in {course.name} (opens WhatsApp)</span>
      </WhatsAppLink>
      <a href={telHref()} className="btn btn-navy"><Phone size={18} aria-hidden="true" /> Call the Institute</a>
      <Link to={`/contact?course=${course.id}`} className="btn btn-outline"><Send size={18} aria-hidden="true" /> Send an Enquiry</Link>
    </div>
  )
}
