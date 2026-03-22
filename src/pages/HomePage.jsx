import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MarketplaceBanner from '../components/MarketplaceBanner'

const categories = [
  { to: '/vaismedziai', title: 'Vaismedžiai', desc: 'Obelys, kriaušės, koloninės ir rojaus obelys — daugiau nei 40 veislių', icon: '🍎' },
  { to: '/vaiskrumiai', title: 'Vaiskrūmiai', desc: 'Avietės, šilauogės, agrastai, serbentai, gervuogės ir kiti uogakrūmiai', icon: '🫐' },
  { to: '/kaulavaisiai', title: 'Kaulavaisiai', desc: 'Trešnės, slyvos, vyšnios, abrikosai ir persikai', icon: '🍒' },
  { to: '/medus', title: 'Medus ir bitės', desc: 'Natūralus medus, bičių motinėlės ir bitininkystės produktai', icon: '🍯' },
  { to: '/kiti-augalai', title: 'Kiti augalai', desc: 'Riešutmedžiai, dekoratyvūs augalai, sakuros ir hortenzijos', icon: '🌳' },
]

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPast, setIsPast] = useState(false)

  useEffect(() => {
    const target = new Date('2026-03-28T08:00:00+03:00')
    const tick = () => {
      const now = new Date()
      const diff = target - now
      if (diff <= 0) {
        setIsPast(true)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (isPast) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FFB800] rounded-2xl px-6 py-4 inline-block">
        <p className="text-[#FFB800] text-xl md:text-2xl font-bold font-serif">
          Prekyvietė atidaryta! Laukiame Jūsų!
        </p>
      </div>
    )
  }

  const units = [
    { value: timeLeft.days, label: 'dienų' },
    { value: timeLeft.hours, label: 'val.' },
    { value: timeLeft.minutes, label: 'min.' },
    { value: timeLeft.seconds, label: 'sek.' },
  ]

  return (
    <div className="flex justify-center gap-3 md:gap-5">
      {units.map((u, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
          <div className="text-2xl md:text-4xl font-bold text-white font-serif leading-none">
            {String(u.value).padStart(2, '0')}
          </div>
          <div className="text-[#FFB800] text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function HomePage() {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Announcement */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a0a] via-[#2D5016] to-[#1a3a0a]"></div>
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFB800\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">

            {/* Top badge */}
            <div className="mb-6 animate-bounce">
              <span className="inline-flex items-center gap-2 bg-[#FFB800] text-[#2D5016] text-sm md:text-base font-bold uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg">
                <span className="w-2 h-2 bg-[#2D5016] rounded-full animate-pulse"></span>
                Pavasario sezonas 2026
                <span className="w-2 h-2 bg-[#2D5016] rounded-full animate-pulse"></span>
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-4">
              <span className="text-[#FFB800]">Atidarome sodinukų</span>
              <span className="block text-white mt-2">prekybos aikštelę!</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-serif">
              Kviečiame į pavasarinį atidarymą — daugiau nei 100 veislių vaismedžių ir vaiskrūmių
            </p>

            {/* Discount ribbon */}
            <div className="relative inline-block mb-10">
              <div className="bg-gradient-to-r from-[#E6A600] via-[#FFB800] to-[#E6A600] text-[#2D5016] px-10 md:px-16 py-4 md:py-5 shadow-2xl transform -rotate-1 skew-x-[-1deg]"
                   style={{clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)'}}>
                <p className="text-2xl md:text-4xl font-bold font-serif tracking-wide">
                  Iki <span className="text-red-700 text-3xl md:text-5xl">30%</span> nuolaida!
                </p>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-bold">Iki atidarymo liko</p>
              <Countdown />
            </div>

            {/* Date & Location card */}
            <div className="mb-10">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-sm border-2 border-[#FFB800]/50 rounded-2xl px-8 md:px-12 py-5 md:py-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFB800] rounded-full p-2.5">
                    <svg className="w-6 h-6 text-[#2D5016]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[#FFB800] text-xs uppercase tracking-widest font-bold">Data</p>
                    <p className="text-white text-xl md:text-2xl font-bold font-serif">Kovo 28 d., šeštadienis</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFB800] rounded-full p-2.5">
                    <svg className="w-6 h-6 text-[#2D5016]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[#FFB800] text-xs uppercase tracking-widest font-bold">Vieta</p>
                    <p className="text-white text-base md:text-lg font-bold">Vilniaus g. 1A, Valkininkai</p>
                    <p className="text-white/70 text-sm">Varėnos r.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:+37061500597"
                className="inline-flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-lg hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Rezervuoti sodinukus
              </a>
              <a
                href="https://maps.app.goo.gl/ZkyQ6NMSQnsw64Rz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full transition-all border-2 border-white/30 text-lg hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Kaip mus rasti
              </a>
            </div>

            {/* Working hours */}
            <div className="inline-flex items-center gap-2 bg-[#8B6F47]/40 backdrop-blur-sm text-white/90 px-6 py-3 rounded-full text-sm">
              <svg className="w-4 h-4 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Darbo laikas: I-V 8:00–18:00 &nbsp;|&nbsp; VI 8:00–15:00
            </div>
          </div>
        </div>

        {/* Bottom golden border */}
        <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FFB800] to-transparent"></div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">100+</div>
              <div className="text-gray-600 text-sm mt-1">Veislių asortimentas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">20+</div>
              <div className="text-gray-600 text-sm mt-1">Metų patirties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#FFB800]">30%</div>
              <div className="text-gray-600 text-sm mt-1">Nuolaida sodinukams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#2D5016]">100%</div>
              <div className="text-gray-600 text-sm mt-1">Užauginta Lietuvoje</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Reservation flow */}
      <section className="bg-[#F5F5F0] py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-1 w-12 bg-[#FFB800]"></div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2D5016]">
              Kaip užsakyti sodinukus?
            </h2>
            <div className="h-1 w-12 bg-[#FFB800]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#2D5016] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="text-4xl mb-4 mt-2">📞</div>
              <h3 className="font-bold font-serif text-lg text-[#2D5016] mb-2">Paskambinkite mums</h3>
              <p className="text-gray-600 text-sm">Susisiekite telefonu ir pasirinkite norimus sodinukus iš mūsų asortimento</p>
              <a href="tel:+37061500597" className="inline-block mt-3 text-[#2D5016] font-bold hover:text-[#FFB800] transition-colors">+370 615 00597</a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#FFB800] text-[#2D5016] rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="text-4xl mb-4 mt-2">📋</div>
              <h3 className="font-bold font-serif text-lg text-[#2D5016] mb-2">Rezervuokite</h3>
              <p className="text-gray-600 text-sm">Mes rezervuosime jūsų pasirinktus sodinukus ir paruošime atsiėmimui</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#2D5016] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="text-4xl mb-4 mt-2">🌱</div>
              <h3 className="font-bold font-serif text-lg text-[#2D5016] mb-2">Atsiimkite prekyvietėje</h3>
              <p className="text-gray-600 text-sm">Atvykite į mūsų prekyvietę Valkininkuose ir atsiimkite savo sodinukus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-[#8B6F47] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#FFB800]" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-white">
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
                  Aukšta sodinukų kokybė
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  20 metų patirties auginant sveikus ir stiprius vaismedžių bei vaisių krūmų sodinukus.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-[#FFB800] rounded-r-lg">
                <h3 className="font-bold font-serif text-xl text-[#2D5016] mb-3">
                  Natūralūs produktai
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Savo bitininkystė — natūralus medus, propolis ir žiedadulkės be cheminių priedų.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-[#8B6F47] rounded-r-lg">
                <h3 className="font-bold font-serif text-xl text-[#2D5016] mb-3">
                  Profesionalūs patarimai
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
      <section className="py-16 bg-[#F5F5F0]">
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
                <div className="bg-white border-l-4 border-[#2D5016] p-7 rounded-r-lg shadow-md hover:shadow-xl transition-all duration-300 h-full group-hover:border-[#FFB800]">
                  <span className="text-3xl mb-3 block">{cat.icon}</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketplaceBanner />
        </div>
      </section>
    </div>
  )
}

export default HomePage
