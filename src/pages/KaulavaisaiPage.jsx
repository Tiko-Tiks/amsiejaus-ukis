import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import CategorySection from '../components/CategorySection'
import MarketplaceBanner from '../components/MarketplaceBanner'

function KaulavaisaiPage() {
  const allProducts = productsData.filter(p => p.categoryGroup === 'kaulavaisiai')

  const tresnes = allProducts.filter(p => p.categorySub === 'tresnes')
  const slyvos = allProducts.filter(p => p.categorySub === 'slyvos')
  const vysnios = allProducts.filter(p => p.categorySub === 'vysnios')
  const abrikosai = allProducts.filter(p => p.categorySub === 'abrikosai')
  const persikai = allProducts.filter(p => p.categorySub === 'persikai')
  const kiti = allProducts.filter(p =>
    !['tresnes', 'slyvos', 'vysnios', 'abrikosai', 'persikai'].includes(p.categorySub)
  )

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Kaulavaisiai</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Kaulavaisiai
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Trešnės, slyvos, vyšnios, abrikosai ir persikai — kaulavaisių veislės,
            pritaikytos Lietuvos klimatui.
          </p>
        </div>

        <CategorySection title="Trešnės" plants={tresnes} />
        <CategorySection title="Slyvos" plants={slyvos} />
        <CategorySection title="Vyšnios" plants={vysnios} />
        <CategorySection title="Abrikosai" plants={abrikosai} />
        <CategorySection title="Persikai" plants={persikai} />
        <CategorySection title="Kiti kaulavaisiai" plants={kiti} />

        <div className="mt-8">
          <MarketplaceBanner compact />
        </div>
      </div>
    </div>
  )
}

export default KaulavaisaiPage
