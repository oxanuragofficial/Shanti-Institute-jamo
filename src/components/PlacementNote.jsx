import { BadgeCheck, Check } from './Icons.jsx'
import { PLACEMENT } from '../data/placement.js'

// "100% placement guarantee" badge shown only on courses listed in PLACEMENT.courses.
// `detailed` adds a short description. No terms link here: terms are reached from About -> Read more -> /placement.
export default function PlacementNote({ className = '', detailed = false }) {
  return (
    <aside aria-label="Placement guarantee" className={`rounded-xl border border-green-200 bg-green-50 p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-white"><BadgeCheck size={22} aria-hidden="true" /></span>
        <p className="text-lg font-bold leading-snug text-navy-900">{PLACEMENT.headline}</p>
      </div>
      {detailed && (
        <div className="mt-3 space-y-2 text-[0.93rem] text-navy-900">
          <p>
            {PLACEMENT.statement} This course trains students for safety roles in factories, construction and other workplaces.
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2"><Check size={17} className="mt-1 shrink-0 text-green-700" aria-hidden="true" />{PLACEMENT.placedLine}</li>
            <li className="flex items-start gap-2"><Check size={17} className="mt-1 shrink-0 text-green-700" aria-hidden="true" />Practical training, interview tips and smart classes</li>
            <li className="flex items-start gap-2"><Check size={17} className="mt-1 shrink-0 text-green-700" aria-hidden="true" />Ask the institute about eligibility before you enrol</li>
          </ul>
        </div>
      )}
    </aside>
  )
}
