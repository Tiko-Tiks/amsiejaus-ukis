import { useEffect } from 'react'

const SITE = 'Juozo Amšiejaus Ūkis'
const ORIGIN = 'https://amsiejausmedelynas.lt'
const DEFAULT_DESC = 'Juozo Amšiejaus medelynas Valkininkuose — daugiau nei 100 veislių vaismedžių ir vaiskrūmių sodinukai. Natūralus medus ir bičių produktai. 30+ metų patirtis.'
const DEFAULT_IMAGE = `${ORIGIN}/logo.png`

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (data == null) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function usePageMeta(title, description, options = {}) {
  const { image, jsonLd } = options

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE}`
      : `${SITE} — Vaismedžiai, Vaiskrūmiai, Medus | Valkininkai`
    const desc = description || DEFAULT_DESC
    const url = `${ORIGIN}${window.location.pathname}`
    const img = image || DEFAULT_IMAGE

    document.title = fullTitle
    setMetaByName('description', desc)

    setMetaByProperty('og:title', fullTitle)
    setMetaByProperty('og:description', desc)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:image', img)

    setMetaByName('twitter:title', fullTitle)
    setMetaByName('twitter:description', desc)
    setMetaByName('twitter:image', img)

    setLinkRel('canonical', url)

    setJsonLd('page-jsonld', jsonLd || null)
  }, [title, description, image, JSON.stringify(jsonLd)])
}
