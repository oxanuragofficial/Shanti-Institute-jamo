import { logoSrc } from '../data/media.js'
// One consistent icon family (Lucide, 1.75px stroke) plus a hand-drawn WhatsApp mark,
// since brand logos are not part of Lucide.
import {
  Phone, MapPin, Mail, Menu, X, ArrowRight, ArrowUpRight, Monitor, Wrench, ClipboardList,
  Users, Route, Scale, Calculator, Cpu, Zap, Plug, Briefcase, Images, Calendar, Award,
  GraduationCap, ChevronLeft, ChevronRight, Maximize2, ExternalLink, Clock, CheckCircle2,
  Check, Building2, Camera, Search, Pause, Play, Globe, BookOpen, Layers, Navigation, Send,
  AlertCircle, Info, ImageOff, ChevronDown, ShieldCheck, HardHat, BadgeCheck, UserRound, Star,
} from 'lucide-react'

export {
  Phone, MapPin, Mail, Menu, X, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight,
  Maximize2, ExternalLink, Clock, CheckCircle2, Check, Building2, Camera, Search, Pause,
  Play, Globe, BookOpen, Layers, Navigation, Send, AlertCircle, Info, ImageOff, ChevronDown,
  Images, Calendar, Award, GraduationCap, ShieldCheck, HardHat, BadgeCheck, UserRound, Star,
}

export function WhatsAppIcon({ size = 20, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
      <path d="M9 8.6c.2 2.9 3.2 5.9 6.1 6.2l1.2-1.3a.7.7 0 0 0-.1-1l-1.5-.9a.7.7 0 0 0-.9.2l-.4.5a4.3 4.3 0 0 1-2-2l.5-.4a.7.7 0 0 0 .2-.9L11.2 7a.7.7 0 0 0-1-.1L9 8.1c-.1.2-.1.4 0 .5z" />
    </svg>
  )
}

const MAP = {
  monitor: Monitor,
  wrench: Wrench,
  clipboard: ClipboardList,
  users: Users,
  route: Route,
  scale: Scale,
  calculator: Calculator,
  cpu: Cpu,
  zap: Zap,
  plug: Plug,
  briefcase: Briefcase,
}

export function NamedIcon({ name, size = 22, className = '' }) {
  const C = MAP[name] || BookOpen
  return <C size={size} strokeWidth={1.75} className={className} aria-hidden="true" />
}

// Simple brand mark. The official logo is not available, so this is a neutral monogram.
// Uses src/assets/logo.* (same file as the banner) when present; otherwise the built-in mark.
export function LogoMark({ size = 40 }) {
  if (logoSrc) {
    return (
      <img src={logoSrc} alt="" width={size} height={size} decoding="async" aria-hidden="true"
        className="shrink-0 rounded-full bg-white object-cover" style={{ width: size, height: size }} />
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <rect width="48" height="48" rx="10" fill="#0b2a5b" />
      <path d="M24 11 8 19l16 8 12-6v8h3v-9.5L40 19 24 11z" fill="#fff" />
      <path d="M14 26v5c0 2.2 4.5 5 10 5s10-2.8 10-5v-5l-10 5-10-5z" fill="#c2410c" />
    </svg>
  )
}

// Round version of the mark, used centred on the home banner. If src/assets/logo.* exists it replaces this.
export function LogoRound({ className = '' }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="48" fill="#0b2a5b" />
      <path d="M48 22 18 37l30 15 22-11v14h5V38.5L78 37 48 22z" fill="#fff" />
      <path d="M28 51v9c0 4.2 8.5 9 20 9s20-4.8 20-9v-9L48 61 28 51z" fill="#c2410c" />
    </svg>
  )
}
