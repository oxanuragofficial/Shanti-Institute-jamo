import { useState } from 'react'
import { courses, courseFull } from '../data/courses.js'
import {
  SITE, courseEnquiryMessage, generalEnquiryMessage, telHref,
} from '../data/site.js'
import { WhatsAppLink } from './WhatsAppChooser.jsx'
import { AlertCircle, CheckCircle2, Phone, Send, WhatsAppIcon } from './Icons.jsx'

// Indian mobile numbers: optional +91 / 0, then 10 digits starting 6-9.
// Landlines are also accepted (8-11 digits) so parents can leave a home number.
const normalisePhone = (v) => v.replace(/[\s\-()]/g, '')
const validPhone = (v) => {
  const p = normalisePhone(v)
  return /^(\+?91|0)?[6-9]\d{9}$/.test(p) || /^0?\d{8,11}$/.test(p)
}
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

function validate(values) {
  const e = {}
  if (values.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!values.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!validPhone(values.phone)) e.phone = 'Enter a valid phone number, for example 98765 43210.'
  if (values.email.trim() && !validEmail(values.email.trim())) e.email = 'Enter a valid email address or leave this blank.'
  if (!values.course) e.course = 'Please choose a course, or “General enquiry”.'
  return e
}

export default function EnquiryForm({ initialCourse = '' }) {
  const [values, setValues] = useState({ name: '', phone: '', email: '', course: initialCourse, message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | prepared | failed

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const courseObj = courses.find((c) => c.id === values.course)

  const buildMessage = () => {
    const base = courseObj ? courseEnquiryMessage(courseFull(courseObj)) : generalEnquiryMessage
    const lines = [base, '', `Name: ${values.name.trim()}`, `Phone: ${values.phone.trim()}`]
    if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`)
    if (values.message.trim()) lines.push('', values.message.trim())
    return lines.join('\n')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      // move focus to the first invalid field
      const first = Object.keys(errs)[0]
      document.getElementById(`enq-${first}`)?.focus()
      return
    }
    // No backend configured: do NOT pretend it was delivered.
    if (!SITE.enquiryEndpoint) {
      setStatus('prepared')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(SITE.enquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          course: courseObj ? courseObj.name : 'General enquiry',
          message: values.message.trim(),
        }),
      })
      setStatus(res.ok ? 'sent' : 'failed')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-6 sm:p-8" role="status">
        <CheckCircle2 size={36} className="text-wa" aria-hidden="true" />
        <h3 className="mt-3 text-xl">Thank you, your enquiry has been sent.</h3>
        <p className="mt-2 text-muted">The institute will contact you on the number you provided. For a faster reply you can also call {SITE.primaryPhone.display}.</p>
      </div>
    )
  }

  if (status === 'prepared') {
    return (
      <div className="card p-6 sm:p-8" role="status">
        <CheckCircle2 size={36} className="text-navy-800" aria-hidden="true" />
        <h3 className="mt-3 text-xl">Your enquiry is ready to send</h3>
        <p className="mt-2 text-muted">
          This website does not send forms by email yet, so your details have <strong>not</strong> been delivered.
          Tap below to send them to the institute on WhatsApp, or call directly.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <WhatsAppLink message={buildMessage()} className="btn btn-wa">
            <WhatsAppIcon size={18} /> Send on WhatsApp <span className="sr-only">(opens WhatsApp)</span>
          </WhatsAppLink>
          <a href={telHref()} className="btn btn-outline"><Phone size={18} aria-hidden="true" /> Call {SITE.primaryPhone.display}</a>
        </div>
        <button type="button" onClick={() => setStatus('idle')} className="mt-5 text-sm font-semibold text-navy-800 underline underline-offset-2">
          Edit my details
        </button>
      </div>
    )
  }

  const err = (k) => (errors[k] ? <p id={`enq-${k}-err`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-red-700"><AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{errors[k]}</p> : null)
  const aria = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? `enq-${k}-err` : undefined })

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-5 sm:p-8" aria-label="Enquiry form">
      <div>
        <label htmlFor="enq-name" className="mb-1.5 block text-sm font-semibold text-navy-900">Name <span aria-hidden="true" className="text-accent">*</span></label>
        <input id="enq-name" className="field" autoComplete="name" required value={values.name} onChange={set('name')} {...aria('name')} />
        {err('name')}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block text-sm font-semibold text-navy-900">Phone <span aria-hidden="true" className="text-accent">*</span></label>
          <input id="enq-phone" className="field" type="tel" inputMode="tel" autoComplete="tel" required value={values.phone} onChange={set('phone')} {...aria('phone')} />
          {err('phone')}
        </div>
        <div>
          <label htmlFor="enq-email" className="mb-1.5 block text-sm font-semibold text-navy-900">Email <span className="font-normal text-muted">(optional)</span></label>
          <input id="enq-email" className="field" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={set('email')} {...aria('email')} />
          {err('email')}
        </div>
      </div>
      <div>
        <label htmlFor="enq-course" className="mb-1.5 block text-sm font-semibold text-navy-900">Course interested in <span aria-hidden="true" className="text-accent">*</span></label>
        <select id="enq-course" className="field" required value={values.course} onChange={set('course')} {...aria('course')}>
          <option value="">Select a course</option>
          <option value="general">General enquiry</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{courseFull(c)}</option>
          ))}
        </select>
        {err('course')}
      </div>
      <div>
        <label htmlFor="enq-message" className="mb-1.5 block text-sm font-semibold text-navy-900">Message <span className="font-normal text-muted">(optional)</span></label>
        <textarea id="enq-message" rows={4} className="field" value={values.message} onChange={set('message')}
          placeholder="For example: preferred batch time, or questions about fees and admission" />
      </div>
      {status === 'failed' && (
        <p role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          Sorry, we could not send your enquiry. Please call {SITE.primaryPhone.display} or use WhatsApp instead.
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
        <Send size={18} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
