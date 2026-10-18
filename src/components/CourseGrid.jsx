import CourseCard from './CourseCard.jsx'
import FeaturedCourse from './FeaturedCourse.jsx'
import { courses, FEATURED_COURSE_ID } from '../data/courses.js'

// Featured course first (full width), then every other course in priority order.
export default function CourseGrid() {
  const featured = courses.find((c) => c.id === FEATURED_COURSE_ID)
  const rest = courses.filter((c) => c.id !== FEATURED_COURSE_ID)
  return (
    <div className="space-y-8">
      {featured && <FeaturedCourse course={featured} />}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rest.map((c) => <li key={c.id}><CourseCard course={c} /></li>)}
      </ul>
    </div>
  )
}
