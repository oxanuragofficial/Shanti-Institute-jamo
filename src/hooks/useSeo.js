import { useEffect } from 'react'

const DEFAULT_TITLE = 'Shanti Institute Technical Degree College Jamo | Technical & Computer Education'

// Sets the document title and meta description for the current page.
export default function useSeo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Shanti Institute Jamo` : DEFAULT_TITLE
    const meta = document.querySelector('meta[name="description"]')
    const prev = meta?.getAttribute('content')
    if (meta && description) meta.setAttribute('content', description)
    return () => {
      if (meta && prev) meta.setAttribute('content', prev)
    }
  }, [title, description])
}
