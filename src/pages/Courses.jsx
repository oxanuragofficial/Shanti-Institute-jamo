import useSeo from '../hooks/useSeo.js'
import CourseGrid from '../components/CourseGrid.jsx'

export default function Courses() {
  useSeo({
    title: 'Courses',
    description:
      'Courses at Shanti Institute Technical Degree College, Jamo: ADCA, DCA, Computer Accounting, DTP, Tally, Typing, AutoCAD and more. View details and enroll on WhatsApp.',
  })
  return (
    <>
      <section className="border-b border-line bg-navy-50">
        <div className="container-x py-10 lg:py-14">
          <p className="eyebrow">Courses</p>
          <h1 className="mt-2">Our Courses</h1>
        </div>
      </section>
      <section className="section" aria-label="Course list">
        <div className="container-x"><CourseGrid /></div>
      </section>
    </>
  )
}
