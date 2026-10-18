import { Link, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'
import Carousel from '../components/Carousel.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { showsPlacement } from '../data/placement.js'
import PlacementNote from '../components/PlacementNote.jsx'
import CourseCtas from '../components/CourseCtas.jsx'
import { Check, Clock, Phone, WhatsAppIcon } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'
import { getCourse, courses, courseShort, courseFull } from '../data/courses.js'
import { getCourseImages } from '../data/media.js'
import { WhatsAppLink } from '../components/WhatsAppChooser.jsx'
import { enrollMessage, telHref } from '../data/site.js'

const List = ({ items }) => (
  <ul className="mt-4 space-y-2.5">
    {items.map((s) => (
      <li key={s} className="flex items-start gap-2.5"><Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{s}</li>
    ))}
  </ul>
)

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourse(id)
  useSeo({
    title: course ? course.name : 'Course not found',
    description: course ? `${course.name} at Shanti Institute Technical Degree College, Jamo. ${course.summary}` : undefined,
  })
  if (!course) return <NotFound />

  const short = courseShort(course)
  const images = getCourseImages(course)
  const others = courses.filter((c) => c.id !== course.id).slice(0, 3)
  const enrollMsg = enrollMessage(courseFull(course))

  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x grid items-center gap-8 py-8 lg:grid-cols-2 lg:gap-12 lg:py-12">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link to="/courses" className="hover:underline">Courses</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{short}</li>
              </ol>
            </nav>
            <h1 className="mt-3">{course.name}</h1>
            {course.code && <p className="mt-1 text-lg font-semibold text-navy-700">{course.code}</p>}
            <p className="mt-3 text-[1.02rem] text-muted">{course.summary}</p>
            {course.duration && (
              <p className="mt-4 inline-flex items-center gap-2 font-semibold text-navy-800"><Clock size={18} aria-hidden="true" /> Duration: {course.duration}</p>
            )}
            <div className="mt-6 hidden sm:block"><WhatsAppLink message={enrollMsg} className="btn btn-wa"><WhatsAppIcon size={18} /> Enroll Now<span className="sr-only"> (opens WhatsApp)</span></WhatsAppLink></div>
          </div>
          <Carousel images={images} priority label={`${course.name} images`} />
        </div>
      </section>

      <div className="container-x grid gap-10 py-10 pb-28 lg:grid-cols-[1fr_20rem] lg:gap-12 lg:py-14 lg:pb-14">
        <div className="min-w-0 space-y-12">
          <section aria-labelledby="about-h">
            <h2 id="about-h" className="!text-2xl">About this course</h2>
            <div className="mt-3 space-y-3 text-[1.02rem]">
              {course.description.map((p) => <p key={p}>{p}</p>)}
            </div>
          </section>

          <section aria-labelledby="details-h">
            <h2 id="details-h" className="!text-2xl">Course details</h2>
            <dl className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {[
                ['Course', course.name],
                ['Duration', course.duration || 'Contact the institute'],
                ['Fees', 'Contact the institute'],
                ['Batch timing', 'Contact the institute'],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-4"><dt className="text-sm font-semibold text-muted">{k}</dt><dd className="mt-0.5 font-semibold text-navy-900">{v}</dd></div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="who-h">
            <h2 id="who-h" className="!text-2xl">Who is this course for?</h2>
            <List items={course.audience} />
          </section>

          <section aria-labelledby="learn-h">
            <h2 id="learn-h" className="!text-2xl">What you will learn</h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {course.modules.map((m, i) => (
                <li key={m.title} className="card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">Module {i + 1}</p>
                  <h3 className="mt-1">{m.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-[0.95rem] text-muted">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-navy-700" aria-hidden="true" />{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section aria-label="Skills and uses" className="grid gap-8 md:grid-cols-2">
            <div><h2 className="!text-2xl">Practical skills</h2><List items={course.skills} /></div>
            <div><h2 className="!text-2xl">Career and use cases</h2><List items={course.useCases} /></div>
          </section>

          {showsPlacement(course) && <PlacementNote detailed />}

          <section aria-labelledby="enroll-h" className="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
            <h2 id="enroll-h" className="!text-2xl !text-white">Ready to join {short}?</h2>
            <p className="mt-2 text-navy-100">Tap Enroll Now to message the institute on WhatsApp. Your message is ready; just press send.</p>
            <div className="mt-5 max-w-md"><CourseCtas course={course} /></div>
          </section>

          <section aria-labelledby="more-h">
            <h2 id="more-h" className="!text-2xl">Other courses</h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {others.map((c) => <li key={c.id}><CourseCard course={c} /></li>)}
            </ul>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="card sticky top-24 p-6">
            <h2 className="!font-sans !text-lg !font-bold">Interested in {short}?</h2>
            <p className="mt-2 text-sm text-muted">Fees, batch timing and admission details are shared by the institute.</p>
            <div className="mt-5"><CourseCtas course={course} /></div>
          </div>
        </aside>
      </div>

      <div className="no-print fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden">
        <a href={telHref()} className="btn btn-navy btn-sm"><Phone size={17} aria-hidden="true" /> Call</a>
        <WhatsAppLink message={enrollMsg} className="btn btn-wa btn-sm"><WhatsAppIcon size={17} /> Enroll Now<span className="sr-only"> in {short} (opens WhatsApp)</span></WhatsAppLink>
      </div>
    </>
  )
}
