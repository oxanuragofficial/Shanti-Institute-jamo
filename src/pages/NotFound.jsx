import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="container-x py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-2">We couldn’t find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">The page may have moved. Try the course list or go back to the home page.</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
        <Link to="/" className="btn btn-outline">Home</Link>
      </div>
    </section>
  )
}
