import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const srcPath = resolve(__dirname, '../../ps_products_extracted.json')
const dstPath = resolve(__dirname, '../src/data/products.json')

const raw = JSON.parse(readFileSync(srcPath, 'utf8'))

function stripHtml(html) {
  if (!html) return ''
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/\\\"/g, '"')
    .replace(/\\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(text) {
  const charMap = {
    'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i',
    'š': 's', 'ų': 'u', 'ū': 'u', 'ž': 'z',
    'Ą': 'a', 'Č': 'c', 'Ę': 'e', 'Ė': 'e', 'Į': 'i',
    'Š': 's', 'Ų': 'u', 'Ū': 'u', 'Ž': 'z',
  }
  return text
    .trim()
    .split('')
    .map(c => charMap[c] || c)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Name-based overrides for products only in generic categories
const nameOverrides = {
  'Ilgaamžė bambukinė lazdelė augalams remti': { categoryGroup: 'kiti-augalai', categorySub: 'trasos', category: 'Priemonė' },
  'Kvanza': { categoryGroup: 'vaiskrumiai', categorySub: 'avietes', category: 'Avietė' },
  'Šaltalankis Trofimovskaja': { categoryGroup: 'vaiskrumiai', categorySub: 'saltalankiai', category: 'Šaltalankis' },
}

// Map PrestaShop categories to our site structure
function mapCategory(categories, productName) {
  if (nameOverrides[productName]) return nameOverrides[productName]

  const catNames = categories.map(c => c.name)

  let categoryGroup = 'vaismedziai'
  let categorySub = ''
  let category = ''

  if (catNames.includes('Obelys')) {
    categoryGroup = 'vaismedziai'; categorySub = 'obelys'; category = 'Obelis'
  } else if (catNames.includes('Koloninės obelys')) {
    categoryGroup = 'vaismedziai'; categorySub = 'kolonines-obelys'; category = 'Koloninė obelis'
  } else if (catNames.includes('Kriaušės')) {
    categoryGroup = 'vaismedziai'; categorySub = 'kriauses'; category = 'Kriaušė'
  } else if (catNames.includes('Riešutmedžiai')) {
    categoryGroup = 'vaismedziai'; categorySub = 'riestumedziai'; category = 'Riešutmedis'
  } else if (catNames.includes('Vaismedžiai')) {
    categoryGroup = 'vaismedziai'; categorySub = 'obelys'; category = 'Obelis'
  } else if (catNames.includes('Avietės')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'avietes'; category = 'Avietė'
  } else if (catNames.includes('Šilauogės')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'silauoges'; category = 'Šilauogė'
  } else if (catNames.includes('Agrastai')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'agrastai'; category = 'Agrastas'
  } else if (catNames.includes('Juodieji serbentai')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'serbentai'; category = 'Juodasis serbentas'
  } else if (catNames.includes('Raudonieji serbentai')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'serbentai'; category = 'Raudonasis serbentas'
  } else if (catNames.includes('Valgomieji sausmedžiai')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'sausmedžiai'; category = 'Sausmedis'
  } else if (catNames.includes('Spanguolės')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'spanguoles'; category = 'Spanguolė'
  } else if (catNames.includes('Vaiskrūmiai')) {
    categoryGroup = 'vaiskrumiai'; categorySub = 'kiti'; category = 'Vaiskrūmis'
  } else if (catNames.includes('Trešnės')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'tresnes'; category = 'Trešnė'
  } else if (catNames.includes('Slyvos')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'slyvos'; category = 'Slyva'
  } else if (catNames.includes('Vyšnios')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'vysnios'; category = 'Vyšnia'
  } else if (catNames.includes('Abrikosai')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'abrikosai'; category = 'Abrikosas'
  } else if (catNames.includes('Persikai')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'persikai'; category = 'Persikas'
  } else if (catNames.includes('Kaulavaisiai')) {
    categoryGroup = 'kaulavaisiai'; categorySub = 'kiti'; category = 'Kaulavaisinis'
  } else if (catNames.includes('Dekoratyvūs augalai')) {
    categoryGroup = 'kiti-augalai'; categorySub = 'dekoratyvus'; category = 'Dekoratyvus augalas'
  } else if (catNames.includes('Trąšos')) {
    categoryGroup = 'kiti-augalai'; categorySub = 'trasos'; category = 'Trąša'
  } else if (catNames.includes('Bičių motinėlės')) {
    categoryGroup = 'kiti-augalai'; categorySub = 'biciu-motineles'; category = 'Bičių motinėlė'
  } else if (catNames.includes('Medus')) {
    categoryGroup = 'kiti-augalai'; categorySub = 'medus'; category = 'Medus'
  }

  return { categoryGroup, categorySub, category }
}

const products = raw.map((p, index) => {
  const { categoryGroup, categorySub, category } = mapCategory(p.categories, p.name)

  // Build local image paths using image IDs
  const images = p.images.map(img => `/images/products/${img.id}.jpg`)
  const coverImg = p.images.find(img => img.cover)
  const image = coverImg ? `/images/products/${coverImg.id}.jpg` : (images[0] || '')

  return {
    id: index + 1,
    name: p.name.trim(),
    category,
    categoryGroup,
    categorySub,
    description: stripHtml(p.description),
    description_short: stripHtml(p.description_short),
    handle: p.slug || slugify(p.name),
    images,
    image
  }
})

// Sort by categoryGroup then name
products.sort((a, b) => {
  if (a.categoryGroup !== b.categoryGroup) return a.categoryGroup.localeCompare(b.categoryGroup)
  return a.name.localeCompare(b.name, 'lt')
})

// Re-number IDs after sorting
products.forEach((p, i) => { p.id = i + 1 })

writeFileSync(dstPath, JSON.stringify(products, null, 2))

// Print summary
const groups = {}
products.forEach(p => {
  if (!groups[p.categoryGroup]) groups[p.categoryGroup] = 0
  groups[p.categoryGroup]++
})
console.log(`Generated ${products.length} products -> ${dstPath}`)
console.log('By group:', JSON.stringify(groups))
