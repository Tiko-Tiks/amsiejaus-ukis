import { Link } from 'react-router-dom'
import MarketplaceBanner from '../components/MarketplaceBanner'

function KontaktaiPage() {
  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Kontaktai</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-[#FFB800]"></div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
              Susisiekite su mumis
            </h1>
          </div>
          <p className="text-lg text-gray-700">
            Kviečiame aplankyti mūsų medelyną arba skambinkite dėl detalesnės informacijos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="bg-white p-8 border-l-4 border-[#2D5016] shadow-md rounded-r-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#2D5016] text-white p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold font-serif text-xl text-[#2D5016]">Adresas</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>Vilniaus g. 1A</strong><br />
              Valkininkų miestelis<br />
              Varėnos r. sav.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://maps.app.goo.gl/ZkyQ6NMSQnsw64Rz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] px-5 py-2.5 text-sm font-bold rounded-full transition-colors shadow-md"
              >
                Google Maps
              </a>
              <a
                href="https://ul.waze.com/ul?ll=54.36295168%2C24.83314633&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#33CCFF] hover:bg-[#2BB8E8] text-white px-5 py-2.5 text-sm font-bold rounded-full transition-colors shadow-md"
              >
                Waze
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 border-l-4 border-[#FFB800] shadow-md rounded-r-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#FFB800] text-[#2D5016] p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold font-serif text-xl text-[#2D5016]">Telefonas</h3>
            </div>
            <a href="tel:+37062441787" className="text-2xl font-bold text-[#2D5016] hover:text-[#8B6F47] transition-colors">
              +370 624 41787
            </a>
            <p className="text-gray-700 mt-3 text-base">
              <strong>Darbo laikas:</strong><br />
              9:00-20:00 val.
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 border-l-4 border-[#8B6F47] shadow-md rounded-r-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#8B6F47] text-white p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold font-serif text-xl text-[#2D5016]">El. paštas</h3>
            </div>
            <a href="mailto:rytis.amsiejus@gmail.com" className="text-lg text-[#8B6F47] hover:text-[#8B6F47]/80 transition-colors break-all">
              rytis.amsiejus@gmail.com
            </a>
            <p className="text-gray-700 mt-3">
              Atsakome per 24 val.
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#2D5016] text-white p-8 shadow-lg rounded-lg mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-serif mb-3 text-white">Kviečiame aplankyti mūsų medelyną!</h3>
            <p className="text-lg text-white/90">
              Galimybė atsiimti augalus tiesiogiai. Rekomenduojame susitarti dėl apsilankymo telefonu,
              kad užtikrintume pasirinktų produktų prieinamumą.
            </p>
          </div>
        </div>

        <MarketplaceBanner compact />
      </div>
    </div>
  )
}

export default KontaktaiPage
