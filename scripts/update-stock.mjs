import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const productsPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// In-stock variety keywords (from user's list)
const inStockKeywords = [
  // Obelys vasarinės (konfetnoje=konfetnaja, sava=sawa, novomac=novamac)
  'konfetnoje', 'konfetnaja', 'konfetnaj', 'julija', 'isbranica', 'baltasis alyvinis',
  // Obelys rudeninės
  'auksis', 'ananasinis', 'sava', 'sawa', 'novomac', 'novamac',
  // Obelys žieminės
  'antaninis', 'šampion', 'topaz', 'koštelė', 'bochemija', 'gold bochemija', 'jonagold', 'belaruskaja',
  // Kriaušės vasarinės
  'sviestinė', 'izolda', 'kliapo mėgstam', 'kliapo raudon', 'liepinukė',
  // Kriaušės rudeninės
  'konferencinė', 'patten',
  // Kriaušės žieminės
  'general leclerc', 'general leaclearc', 'xena',
  // Slyvos
  'kometa', 'vetrazi', 'narač', 'herman', 'vallor', 'jubiliejum', 'vengerka', 'lodva',
  // Abrikosai
  'šiaurės triumf',
  // Persikai
  'maira',
  // Rojaus obelaitės
  'kelsey', 'royalty',
  // Vyšnios
  'žagarvyšnė', 'pandy',
  // Trešnės
  'burlat', 'tamara',
  // Šilauogės
  'patriot', 'bluecrop', 'chandler',
];

// Sub-categories always in stock
const inStockSubCategories = [
  'agrastai', 'aviete', 'aviet', 'serbent', 'šilauog', 'sausmedž', 'valgomieji sausmedžiai',
  'gervuog', 'vynuog', 'brašk', 'spanguol',
];

products.forEach(p => {
  const nameLC = p.name.toLowerCase();
  const catSubLC = (p.categorySub || '').toLowerCase();
  const catLC = (p.category || '').toLowerCase();

  // Special case: "Sausmedis Karina" is in stock as sausmedis, NOT as trešnė Karina
  // "Karina" alone should only match trešnė Karina
  const isNameMatch = inStockKeywords.some(kw => nameLC.includes(kw));
  const isCatMatch = inStockSubCategories.some(c => catSubLC.includes(c) || catLC.includes(c));

  // Special: Trešnė Karina (need exact trešnė + karina)
  const isTresneKarina = nameLC.includes('karina') && (catLC.includes('trešn') || catSubLC.includes('trešn') || nameLC.includes('trešn'));

  p.inStock = isNameMatch || isCatMatch || isTresneKarina;
});

// Make sure "Karina" in Trešnės is marked
products.forEach(p => {
  const nameLC = p.name.toLowerCase();
  if (nameLC.includes('trešn') && nameLC.includes('karina')) {
    p.inStock = true;
  }
});

const inStock = products.filter(p => p.inStock);
const orderable = products.filter(p => !p.inStock);

console.log(`Total: ${products.length}`);
console.log(`In stock (prekyboje): ${inStock.length}`);
console.log(`Orderable (užsakoma): ${orderable.length}`);
console.log('\nIn stock:');
inStock.forEach(p => console.log(`  ✓ ${p.name} [${p.categorySub || p.category}]`));
console.log('\nOrderable:');
orderable.forEach(p => console.log(`  ⬜ ${p.name} [${p.categorySub || p.category}]`));

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('\nSaved!');
