import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import CategorySection from '../components/CategorySection'
import MarketplaceBanner from '../components/MarketplaceBanner'
import usePageMeta from '../hooks/usePageMeta'

function KitiAugalaiPage() {
  usePageMeta('Kiti augalai', 'Riešutmedžiai, dekoratyviniai augalai, vynuogės ir kiti sodinukai iš Juozo Amšiejaus medelyno.')
  const allProducts = productsData.filter(p => p.categoryGroup === 'kiti-augalai')

  const riesutmedziai = allProducts.filter(p => p.categorySub === 'riestumedziai')
  const dekoratyvus = allProducts.filter(p => p.categorySub === 'dekoratyvus')
  const trasos = allProducts.filter(p => p.categorySub === 'trasos')
  const kiti = allProducts.filter(p =>
    !['riestumedziai', 'dekoratyvus', 'trasos'].includes(p.categorySub)
  )

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Kiti augalai</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Kiti augalai
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Riešutmedžiai, dekoratyvūs augalai ir kiti sodinukai jūsų sodui.
          </p>
        </div>

        <CategorySection title="Riešutmedžiai" plants={riesutmedziai} />
        <CategorySection title="Dekoratyvūs augalai" plants={dekoratyvus} />
        <CategorySection title="Trąšos ir priemonės" plants={trasos} />
        <CategorySection title="Kiti" plants={kiti} />

        <div className="mt-8">
          <MarketplaceBanner compact />
        </div>
      </div>
    </div>
  )
}

export default KitiAugalaiPage
