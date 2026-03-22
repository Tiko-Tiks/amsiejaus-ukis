import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import CategorySection from '../components/CategorySection'
import MarketplaceBanner from '../components/MarketplaceBanner'
import usePageMeta from '../hooks/usePageMeta'

function VaismedzaiPage() {
  usePageMeta('Vaismedžiai', 'Obelų, kriaušių sodinukai — daugiau nei 50 veislių. Kokybiški vaismedžių sodinukai iš Juozo Amšiejaus medelyno Dzūkijoje.')
  const allProducts = productsData.filter(p => p.categoryGroup === 'vaismedziai')

  const obelys = allProducts.filter(p => p.categorySub === 'obelys')
  const kriausės = allProducts.filter(p => p.categorySub === 'kriauses')
  const kiti = allProducts.filter(p =>
    !['obelys', 'kriauses'].includes(p.categorySub)
  )

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Vaismedžiai</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Vaismedžiai
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Obelys, kriaušės ir kiti vaismedžiai — veislės, pritaikytos Lietuvos klimatui.
          </p>
        </div>

        <CategorySection title="Obelys" plants={obelys} />
        <CategorySection title="Kriaušės" plants={kriausės} />
        <CategorySection title="Kiti vaismedžiai" plants={kiti} />

        {allProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>Šiuo metu informacija ruošiama.</p>
          </div>
        )}

        <div className="mt-8">
          <MarketplaceBanner compact />
        </div>
      </div>
    </div>
  )
}

export default VaismedzaiPage
