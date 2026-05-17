import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = resolve(ROOT, 'dist')
const ORIGIN = 'https://amsiejausmedelynas.lt'

const products = JSON.parse(readFileSync(resolve(ROOT, 'src/data/products.json'), 'utf8'))

const baseHtml = readFileSync(resolve(DIST, 'index.html'), 'utf8')

// Static routes with custom meta
const staticRoutes = [
  {
    path: '/',
    title: 'Juozo Amšiejaus Ūkis — Vaismedžiai, Vaiskrūmiai, Medus | Valkininkai',
    description: 'Juozo Amšiejaus medelynas Valkininkuose — daugiau nei 100 veislių vaismedžių ir vaiskrūmių sodinukai. Natūralus medus ir bičių produktai. 30+ metų patirtis.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/vaismedziai',
    title: 'Vaismedžiai — obelys, kriaušės | Juozo Amšiejaus Ūkis',
    description: 'Obelų, kriaušių sodinukai — daugiau nei 50 veislių. Vasarinės, rudeninės, žieminės. Kokybiški vaismedžių sodinukai iš Dzūkijos.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/vaiskrumiai',
    title: 'Vaiskrūmiai — avietės, šilauogės, serbentai, agrastai | Juozo Amšiejaus Ūkis',
    description: 'Avietės, šilauogės, serbentai, agrastai, gervuogės, vynuogės, sausmedžiai. Kokybiški vaiskrūmių sodinukai iš Dzūkijos medelyno.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/kaulavaisiai',
    title: 'Kaulavaisiai — trešnės, slyvos, vyšnios, abrikosai | Juozo Amšiejaus Ūkis',
    description: 'Trešnių, slyvų, vyšnių, abrikosų ir persikų sodinukai. Lietuvos klimatui pritaikytos veislės iš Juozo Amšiejaus medelyno.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/medus',
    title: 'Medus ir bičių produktai | Juozo Amšiejaus Ūkis',
    description: 'Natūralus medus, bičių motinėlės, propolis ir žiedadulkės iš mūsų bitynų Dzūkijoje. Be cheminių priedų.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/kiti-augalai',
    title: 'Kiti augalai — riešutmedžiai, dekoratyviniai | Juozo Amšiejaus Ūkis',
    description: 'Riešutmedžiai, dekoratyviniai augalai — alyvos, ginkmedžiai, šermukšniai, gudobelės. Sodinukai iš Juozo Amšiejaus medelyno.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/kontaktai',
    title: 'Kontaktai | Juozo Amšiejaus Ūkis',
    description: 'Kontaktai: Vilniaus g. 1A, Valkininkų miestelis, Varėnos r. Tel. +370 624 41787. Dirbame kasdien 9:00–20:00.',
    priority: '0.6',
    changefreq: 'monthly',
  },
]

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function injectMeta(html, { title, description, url, image, jsonLd }) {
  const t = escapeHtml(title)
  const d = escapeHtml(description)
  const u = escapeHtml(url)
  const img = escapeHtml(image || `${ORIGIN}/logo.png`)

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/i, `$1${d}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/i, `$1${t}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/i, `$1${d}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/i, `$1${u}$2`)
    .replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/i, `$1${img}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/i, `$1${t}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/i, `$1${d}$2`)
    .replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/i, `$1${img}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, `$1${u}$2`)

  if (jsonLd) {
    const tag = `<script type="application/ld+json" id="page-jsonld">${JSON.stringify(jsonLd)}</script>`
    out = out.replace('</head>', `  ${tag}\n  </head>`)
  }

  return out
}

function writeRouteHtml(routePath, html) {
  if (routePath === '/') {
    writeFileSync(resolve(DIST, 'index.html'), html, 'utf8')
    return
  }
  const dir = resolve(DIST, routePath.replace(/^\//, ''))
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html, 'utf8')
}

// --- 1. Write per-route HTML with custom meta ---

let routeCount = 0

for (const route of staticRoutes) {
  const url = `${ORIGIN}${route.path === '/' ? '/' : route.path}`
  const html = injectMeta(baseHtml, {
    title: route.title,
    description: route.description,
    url,
  })
  writeRouteHtml(route.path, html)
  routeCount++
}

// Per-product pages
for (const p of products) {
  const url = `${ORIGIN}/augalas/${p.handle}`
  const title = `${p.name} | Juozo Amšiejaus Ūkis`
  const description = p.description_short
    || `${p.name} — ${p.category} sodinukas iš Juozo Amšiejaus medelyno Valkininkuose. 30+ metų patirties.`
  const image = p.image ? `${ORIGIN}${p.image}` : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    category: p.category,
    description: p.description_short || p.description || `${p.name} sodinukas iš Juozo Amšiejaus medelyno.`,
    ...(image ? { image } : {}),
    brand: { '@type': 'Brand', name: 'Juozo Amšiejaus Ūkis' },
    offers: {
      '@type': 'Offer',
      availability: p.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      priceCurrency: 'EUR',
      url,
      seller: {
        '@type': 'LocalBusiness',
        name: 'Juozo Amšiejaus Ūkis',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Vilniaus g. 1A',
          addressLocality: 'Valkininkų miestelis',
          addressRegion: 'Varėnos r.',
          addressCountry: 'LT',
        },
      },
    },
  }

  const html = injectMeta(baseHtml, { title, description, url, image, jsonLd })
  writeRouteHtml(`/augalas/${p.handle}`, html)
  routeCount++
}

// --- 2. Generate sitemap.xml ---

const today = new Date().toISOString().slice(0, 10)

const urls = []
for (const r of staticRoutes) {
  urls.push({
    loc: `${ORIGIN}${r.path === '/' ? '/' : r.path}`,
    lastmod: today,
    changefreq: r.changefreq,
    priority: r.priority,
  })
}
for (const p of products) {
  urls.push({
    loc: `${ORIGIN}/augalas/${p.handle}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: p.inStock ? '0.7' : '0.5',
  })
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync(resolve(DIST, 'sitemap.xml'), sitemap, 'utf8')

console.log(`✓ SEO postbuild: ${routeCount} prerendered HTML files`)
console.log(`✓ sitemap.xml: ${urls.length} URLs`)
