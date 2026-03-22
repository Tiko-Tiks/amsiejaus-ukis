import { Link } from 'react-router-dom'
import MarketplaceBanner from '../components/MarketplaceBanner'

const categories = [
  { to: '/vaismedziai', title: 'Vaismedžiai', desc: 'Obelys, kriaušės, koloninės ir rojaus obelys — daugiau nei 40 veislių' },
  { to: '/vaiskrumiai', title: 'Vaiskrūmiai', desc: 'Avietės, šilauogės, agrastai, serbentai, gervuogės ir kiti uogakrūmiai' },
  { to: '/kaulavaisiai', title: 'Kaulavaisiai', desc: 'Trešnės, slyvos, vyšnios, abrikosai ir persikai' },
  { to: '/medus', title: 'Medus ir bitės', desc: 'Natūralus medus, bičių motinėlės ir bitininkystės produktai' },
  { to: '/kiti-augalai', title: 'Kiti augalai', desc: 'Riešutmedžiai, dekoratyvūs augalai, sakuros ir hortenzijos' },
]

function HomePage() {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] md:h-[600px] bg-[#2D5016] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5016]/90 to-[#2D5016]/60"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="w-full text-white text-center">
              <div className="mb-8">
                <img src="/logo.png" alt="" className="h-24 md:h-32 mx-auto" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                Vaismedžiai, vaiskrūmiai ir bičių produkcija iš mūsų ūkio
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed font-serif">
                Kokybiškai užauginti sodinukai ir natūralus medus
              </p>
              <p className="text-xl md:text-2xl text-white font-serif font-bold mt-4">
                Vilniaus g. 1A, Valkininkai, Varėnos r.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://sodogerybes.lt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg text-base"
                >
                  Pirkti sodogerybes.lt →
                </a>
                <Link
                  to="/kontaktai"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-colors border-2 border-white/30 text-base"
                >
                  Susisiekti
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Info Strip */}
        <div className="bg-white border-b-4 border-[#2D5016]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#2D5016] text-white p-3 flex-shrink-0 rounded">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D5016] mb-1">Kokybė ir patirtis</h3>
                  <p className="text-gray-700">20 metų patirties auginant</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#2D5016] text-white p-3 flex-shrink-0 rounded">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D5016] mb-1">Greitas aptarnavimas</h3>
                  <p className="text-gray-700">Galimybė atsiimti tą pačią dieną</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#2D5016] text-white p-3 flex-shrink-0 rounded">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D5016] mb-1">Eksperto patarimai</h3>
                  <p className="text-gray-700">Padedame pasirinkti ir prižiūrėti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-[#8B6F47] text-white py-8 border-t-4 border-[#2D5016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div>
                <p className="text-lg md:text-xl font-bold">Aplankykite mūsų prekyvietę</p>
                <p className="text-sm text-white/90">Vilniaus g. 1A, Valkininkai, Varėnos r.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/ZkyQ6NMSQnsw64Rz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-5 py-2.5 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Google Maps
              </a>
              <a
                href="https://ul.waze.com/ul?ll=54.36295168%2C24.83314633&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#33CCFF] hover:bg-gray-100 font-bold px-5 py-2.5 rounded-full transition-colors shadow-lg"
              >
                Waze
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white border-t-4 border-[#2D5016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-16 bg-[#FFB800]"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
                Apie mūsų medelyną
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-96 shadow-lg overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1652993261001-7d9f956221f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHRyZWUlMjBudXJzZXJ5JTIwc2VlZGxpbmdzJTIwcm93c3xlbnwxfHx8fDE3Njk5NjM3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mūsų medelynas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFB800] text-[#2D5016] p-6 shadow-xl max-w-xs rounded-lg">
                <div className="text-4xl font-bold font-serif mb-1">20+</div>
                <div className="text-sm uppercase tracking-wide">Metų patirties</div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 border-l-4 border-[#2D5016] rounded-r-lg">
                <h3 className="font-bold font-serif text-xl text-[#2D5016] mb-3">
                  ✓ Aukšta sodinukų kokybė
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  20 metų patirties auginant sveikus ir stiprius vaismedžių bei vaisių krūmų sodinukus.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-[#FFB800] rounded-r-lg">
                <h3 className="font-bold font-serif text-xl text-[#2D5016] mb-3">
                  ✓ Natūralūs produktai
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Savo bitininkystė — natūralus medus, propolis ir žiedadulkės be cheminių priedų.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-[#8B6F47] rounded-r-lg">
                <h3 className="font-bold font-serif text-xl text-[#2D5016] mb-3">
                  ✓ Profesionalūs patarimai
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Padedame pasirinkti tinkamus augalus ir teikiame priežiūros patarimus.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed">
                  Mūsų asortimentą sudaro: obelys, kriaušės, vyšnios, trešnės, slyvos,
                  avietės, mėlynės, serbentai, agrastai ir natūralūs medaus produktai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white border-t-4 border-[#2D5016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-16 bg-[#FFB800]"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">
                Mūsų asortimentas
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link key={cat.to} to={cat.to} className="group">
                <div className="bg-gray-50 border-l-4 border-[#2D5016] p-7 rounded-r-lg shadow-md hover:shadow-xl transition-all duration-300 h-full group-hover:border-[#FFB800]">
                  <h3 className="text-xl font-bold font-serif text-[#2D5016] mb-2 group-hover:text-[#8B6F47] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#2D5016] font-bold text-sm group-hover:text-[#8B6F47] transition-colors">
                    Peržiūrėti
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketplaceBanner />
        </div>
      </section>
    </div>
  )
}

export default HomePage
