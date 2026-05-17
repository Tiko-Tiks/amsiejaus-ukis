import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import usePageMeta from '../hooks/usePageMeta'

function NotFoundPage() {
  usePageMeta('Puslapis nerastas', 'Ieškomas puslapis nerastas. Grįžkite į pradžią arba peržiūrėkite mūsų sodinukų asortimentą.')

  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]')
    if (meta) {
      meta.setAttribute('content', 'noindex,follow')
    } else {
      const el = document.createElement('meta')
      el.setAttribute('name', 'robots')
      el.setAttribute('content', 'noindex,follow')
      document.head.appendChild(el)
    }
    return () => {
      const m = document.querySelector('meta[name="robots"]')
      if (m) m.remove()
    }
  }, [])

  return (
    <div className="bg-[#F5F5F0] min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-[#FFB800] text-sm font-bold uppercase tracking-widest mb-3">404</p>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-4">
          Puslapis nerastas
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
          Atsiprašome, ieškomas puslapis nepasiekiamas. Galbūt jis buvo perkeltas arba ištrintas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-8 py-3 rounded-full transition-colors shadow-md"
          >
            Grįžti į pradžią
          </Link>
          <Link
            to="/vaismedziai"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#2D5016] text-[#2D5016] font-bold px-8 py-3 rounded-full hover:bg-[#2D5016] hover:text-white transition-colors"
          >
            Peržiūrėti asortimentą
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
