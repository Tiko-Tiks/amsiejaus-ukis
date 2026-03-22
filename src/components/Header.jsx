import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import products from '../data/products.json'

const navItems = [
  { to: '/', label: 'Pradžia', end: true, mobileOnly: true },
  { to: '/vaismedziai', label: 'Vaismedžiai' },
  { to: '/vaiskrumiai', label: 'Vaiskrūmiai' },
  { to: '/kaulavaisiai', label: 'Kaulavaisiai' },
  { to: '/medus', label: 'Medus ir bitės' },
  { to: '/kiti-augalai', label: 'Kiti augalai' },
  { to: '/kontaktai', label: 'Kontaktai' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  const results = search.length >= 2
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
    : []

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 font-bold transition-all duration-300 uppercase text-[13px] whitespace-nowrap rounded-full ${
      isActive
        ? 'bg-[#2D5016] text-white'
        : 'text-gray-800 hover:bg-[#2D5016] hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#2D5016]">
      {/* Top Bar */}
      <div className="bg-[#8B6F47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+37062441787" className="hover:underline font-medium">
                +370 624 41787
              </a>
            </div>
            <div className="hidden md:block">
              <span className="font-medium">Darbo laikas: 9:00-20:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="bg-white p-1.5 rounded-xl ring-2 ring-[#2D5016]/70 shadow-sm">
              <img src="/logo.png" alt="Juozo Amšiejaus Ūkis" className="h-12 w-auto object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold font-serif text-[#2D5016] leading-tight">
                Juozo Amšiejaus Ūkis
              </p>
              <p className="text-xs text-gray-600 uppercase tracking-wide">Medelynas ir medus</p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:block relative" ref={searchRef}>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Ieškoti augalų..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setSearchOpen(true) }}
                onFocus={() => setSearchOpen(true)}
                className="w-48 lg:w-56 pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#2D5016] focus:ring-1 focus:ring-[#2D5016] bg-gray-50"
              />
              {search && (
                <button onClick={() => { setSearch(''); setSearchOpen(false) }} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
            {searchOpen && results.length > 0 && (
              <div className="absolute top-full mt-1 left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                {results.map(p => (
                  <button
                    key={p.id}
                    onClick={() => { navigate(`/augalas/${p.id}`); setSearch(''); setSearchOpen(false) }}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#F5F5F0] transition-colors text-left"
                  >
                    {p.image && <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#2D5016] truncate">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.category}</p>
                    </div>
                    {p.inStock && <span className="ml-auto text-[10px] font-bold uppercase bg-[#FFB800] text-[#2D5016] px-2 py-0.5 rounded-full flex-shrink-0">Prekyboje</span>}
                  </button>
                ))}
              </div>
            )}
            {searchOpen && search.length >= 2 && results.length === 0 && (
              <div className="absolute top-full mt-1 left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4 text-center text-sm text-gray-500">
                Nieko nerasta. Pabandykite kitą paiešką.
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.filter(item => !item.mobileOnly).map(item => (
              <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="https://sodogerybes.lt"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-5 py-2.5 rounded-full transition-colors shadow-md text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Pirkti
            </a>

            <button
              className="xl:hidden bg-[#2D5016] text-white p-3 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meniu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="xl:hidden pb-4 border-t-2 border-gray-200 mt-2">
            {/* Mobile Search */}
            <div className="px-4 py-3 border-b border-gray-200 relative" ref={searchRef}>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Ieškoti augalų..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setSearchOpen(true) }}
                  onFocus={() => setSearchOpen(true)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#2D5016] focus:ring-1 focus:ring-[#2D5016] bg-gray-50"
                />
              </div>
              {searchOpen && results.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {results.map(p => (
                    <button
                      key={p.id}
                      onClick={() => { navigate(`/augalas/${p.id}`); setSearch(''); setSearchOpen(false); setMenuOpen(false) }}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#F5F5F0] transition-colors text-left"
                    >
                      {p.image && <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#2D5016] truncate">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block px-4 py-3 text-gray-800 hover:bg-[#2D5016] hover:text-white font-bold transition-colors uppercase text-sm border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
                end={item.end}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 px-4">
              <a
                href="https://sodogerybes.lt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-6 py-2.5 rounded-full transition-colors shadow-md text-sm"
              >
                Pirkti sodogerybes.lt →
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
