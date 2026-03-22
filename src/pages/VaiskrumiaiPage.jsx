import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import CategorySection from '../components/CategorySection'
import MarketplaceBanner from '../components/MarketplaceBanner'
import usePageMeta from '../hooks/usePageMeta'

function VaiskrumiaiPage() {
  usePageMeta('Vaiskrūmiai', 'Avietės, šilauogės, serbentai, agrastai ir kiti vaiskrūmių sodinukai. Platus veislių pasirinkimas iš Juozo Amšiejaus medelyno.')
  const allProducts = productsData.filter(p => p.categoryGroup === 'vaiskrumiai')

  const avietes = allProducts.filter(p => p.categorySub === 'avietes')
  const silauoges = allProducts.filter(p => p.categorySub === 'silauoges')
  const agrastai = allProducts.filter(p => p.categorySub === 'agrastai')
  const serbentai = allProducts.filter(p => p.categorySub === 'serbentai')
  const spanguoles = allProducts.filter(p => p.categorySub === 'spanguoles')
  const saltalankiai = allProducts.filter(p => p.categorySub === 'saltalankiai')
  const kiti = allProducts.filter(p =>
    !['avietes', 'silauoges', 'agrastai', 'serbentai', 'spanguoles', 'saltalankiai'].includes(p.categorySub)
  )

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Vaiskrūmiai</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Vaiskrūmiai
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Uogakrūmiai — puikus pasirinkimas kiekvienam sodui. Avietės, šilauogės,
            agrastai, serbentai ir kiti vaiskrūmiai.
          </p>
        </div>

        <CategorySection title="Avietės" plants={avietes} />
        <CategorySection title="Šilauogės" plants={silauoges} />
        <CategorySection title="Agrastai" plants={agrastai} />
        <CategorySection title="Serbentai" plants={serbentai} />
        <CategorySection title="Spanguolės" plants={spanguoles} />
        <CategorySection title="Šaltalankiai" plants={saltalankiai} />
        <CategorySection title="Kiti vaiskrūmiai" plants={kiti} />

        <div className="mt-8">
          <MarketplaceBanner compact />
        </div>
      </div>
    </div>
  )
}

export default VaiskrumiaiPage
