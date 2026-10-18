import SectionHeading from './SectionHeading.jsx'
import { faculty } from '../data/faculty.js'
import { getFacultyImage } from '../data/media.js'

export default function FacultySection() {
  return (
    <section id="faculty" className="section" aria-labelledby="fac-h">
      <div className="container-x">
        <SectionHeading eyebrow="Faculty & leadership" title="Meet our team" id="fac-h" center />
        <ul className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {faculty.map((m) => {
            const src = getFacultyImage(m.id)
            return (
              <li key={m.id} className={`card flex flex-col items-center p-6 text-center sm:p-8 ${m.featured ? 'border-2 border-accent/40 shadow-[0_14px_32px_-18px_rgba(11,42,91,.5)] md:-mt-3 md:pb-10' : ''}`}>
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-navy-100 shadow-[0_6px_20px_-6px_rgba(11,42,91,.45)] ring-2 ring-navy-100 sm:h-40 sm:w-40">
                  {src && <img src={src} alt={`${m.name}, ${m.role}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />}
                </div>
                <h3 className="mt-5 !text-xl">{m.name}</h3>
                {m.nickname && <p className="text-sm font-semibold text-muted">{m.nickname}</p>}
                <p className="mt-1 inline-block rounded-full bg-navy-50 px-3 py-1 text-sm font-semibold text-navy-800">{m.role}</p>
                <div className="mt-4 space-y-3 text-[0.95rem] text-muted">
                  {m.bio.map((p) => <p key={p}>{p}</p>)}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
