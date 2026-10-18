import { aboutImages } from '../data/media.js'
import { courses } from '../data/courses.js'
import { faculty } from '../data/faculty.js'

// Photo collage for the About sections: one large photo, a second photo and two facts.
// Photos come from src/assets/about/ (first two photographs, file-name order).
export default function AboutCollage({ className = '' }) {
  const [main, second] = aboutImages
  if (!main) return null
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${className}`}>
      <figure className="relative col-span-2 m-0 aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-navy-50 shadow-sm">
        <img src={main} alt="Students at a practical safety training session of Shanti Institute, Jamo" width="1600" height="1200" loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_40%]" />
        <figcaption className="absolute left-3 top-3 rounded-full bg-navy-950/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">Practical training</figcaption>
      </figure>
      {second && (
        <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-navy-50 shadow-sm">
          <img src={second} alt="Students with trophies at an institute event" width="1600" height="1200" loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_30%]" />
          <figcaption className="absolute left-2 top-2 rounded-full bg-navy-950/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">Events</figcaption>
        </figure>
      )}
      <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${second ? '' : 'col-span-2'}`}>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-navy-900 p-3 text-center text-white">
          <p className="font-serif text-3xl font-bold leading-none text-[#ffd400] sm:text-4xl">{courses.length}</p>
          <p className="mt-1.5 text-xs font-semibold text-navy-100 sm:text-sm">Courses</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-accent p-3 text-center text-white">
          <p className="font-serif text-3xl font-bold leading-none sm:text-4xl">{faculty.length}</p>
          <p className="mt-1.5 text-xs font-semibold text-white/90 sm:text-sm">Faculty members</p>
        </div>
      </div>
    </div>
  )
}
