import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'
import { PLACEMENT } from '../data/placement.js'

// Stats + short text + "Read more" button (opens /placement). Used in the About sections.
export default function PlacementSummary({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-green-200 bg-green-50 p-4 sm:p-5 ${className}`}>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-2xl font-extrabold text-navy-900 sm:text-3xl">{PLACEMENT.placedCount}</p>
          <p className="text-sm font-semibold text-muted">Students placed</p>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-2xl font-extrabold text-green-800 sm:text-3xl">100%</p>
          <p className="text-sm font-semibold text-muted">Placement guarantee</p>
        </div>
      </div>
      <p className="mt-3 text-center text-[0.95rem] text-navy-900">{PLACEMENT.aboutText}</p>
      <div className="mt-3 text-center">
        <Link to={PLACEMENT.pagePath} className="btn btn-navy btn-sm">Read more <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  )
}
