import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import CategorySection from '../components/CategorySection'
import MarketplaceBanner from '../components/MarketplaceBanner'
import usePageMeta from '../hooks/usePageMeta'

function MedusPage() {
  usePageMeta('Medus ir bitės', 'Natūralus medus ir bičių produktai iš Dzūkijos. Bičių motinėlės ir bitininkystės reikmenys.')
  const allProducts = productsData.filter(p => p.categoryGroup === 'medus')
  const medus = allProducts.filter(p => p.categorySub === 'medus')
  const motineles = allProducts.filter(p => p.categorySub === 'biciu-motineles')

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Medus ir bitės</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Medus ir bitininkystė
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Užsiimame bitininkyste — mūsų bitės apdulkina sodo augalus ir gamina natūralų,
            kokybišką medų. Taip pat auginame bičių motinėles.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white p-8 border-l-4 border-[#FFB800] shadow-md rounded-r-lg">
            <h2 className="text-xl font-bold font-serif text-[#2D5016] mb-4">
              ✓ Natūralus medus
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mūsų bitės renka nektarą iš sodo žiedų ir laukinių augalų, todėl medus yra
              ypatingai aromatiškas ir naudingas sveikatai.
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Natūralus, be priedų
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Iš vietinių augalų
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Šviežias ir aromatiškas
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border-l-4 border-[#2D5016] shadow-md rounded-r-lg">
            <h2 className="text-xl font-bold font-serif text-[#2D5016] mb-4">
              ✓ Bičių motinėlės
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Auginame kokybiškas bičių motinėles, pritaikytas Lietuvos klimatui.
              Mūsų motinėlės pasižymi geru produktyvumu ir atsparumu ligoms.
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Selekcijos darbas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Pritaikytos vietiniam klimatui
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2D5016] font-bold">✓</span> Konsultacijos bitininkams
              </li>
            </ul>
          </div>
        </div>

        {/* Why bees matter */}
        <div className="bg-[#2D5016] text-white p-8 shadow-lg rounded-lg mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-serif mb-4 text-white">
              Kodėl bitės svarbios sodui?
            </h2>
            <p className="text-white/90 leading-relaxed">
              Bitės yra vieni svarbiausių apdulkintojų. Jos apdulkina vaismedžių ir vaiskrūmių
              žiedus, užtikrindamos gerą derlių. Be bičių, daugelis vaismedžių negalėtų duoti
              vaisių. Todėl bitininkystė ir sodininkystė puikiai dera tarpusavyje.
            </p>
          </div>
        </div>

        <CategorySection title="Medus" plants={medus} />
        <CategorySection title="Bičių motinėlės" plants={motineles} />

        {/* CTA */}
        <div className="text-center mb-10">
          <p className="text-gray-700 mb-4">
            Dėl medaus ir bičių motinėlių susisiekite su mumis tiesiogiai.
          </p>
          <Link
            to="/kontaktai"
            className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-6 py-2.5 rounded-full transition-colors shadow-md text-sm"
          >
            Susisiekti
          </Link>
        </div>

        <MarketplaceBanner compact />
      </div>
    </div>
  )
}

export default MedusPage
