import { useEffect } from 'react'

const SITE = 'Juozo Amšiejaus Ūkis'

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} — Vaismedžiai, Vaiskrūmiai, Medus | Valkininkai`

    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) {
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
