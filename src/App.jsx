import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { WhatsAppProvider } from './components/WhatsAppChooser.jsx'

// Everything except the home page is split into its own chunk.
const About = lazy(() => import('./pages/About.jsx'))
const Courses = lazy(() => import('./pages/Courses.jsx'))
const CourseDetail = lazy(() => import('./pages/CourseDetail.jsx'))
const AchievementDetail = lazy(() => import('./pages/Achievements.jsx'))
const AchievementsIndex = lazy(() => import('./pages/Achievements.jsx').then((m) => ({ default: m.AchievementsIndex })))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Placement = lazy(() => import('./pages/Placement.jsx'))
const PlacementTerms = lazy(() => import('./pages/PlacementTerms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // wait a tick so lazy pages have rendered
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <WhatsAppProvider>
      <a
        href="#main"
        className="sr-only-focusable fixed left-3 top-3 z-[100] rounded bg-white px-4 py-2 font-semibold text-navy-900 shadow"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="min-h-[60vh] outline-none">
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/achievements" element={<AchievementsIndex />} />
            <Route path="/achievements/:id" element={<AchievementDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/placement-terms" element={<PlacementTerms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </WhatsAppProvider>
  )
}
