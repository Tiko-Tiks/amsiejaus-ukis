import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import productsData from '../data/products.json'
import usePageMeta from '../hooks/usePageMeta'

function AugalasPage() {
  const { id } = useParams()
  const plantId = parseInt(id)
  const plant = productsData.find(p => p.id === plantId)
  const [selectedImage, setSelectedImage] = useState(0)
  usePageMeta(plant ? plant.name : 'Augalas nerastas', plant ? `${plant.name} — ${plant.category}. Sodinukas iš Juozo Amšiejaus medelyno.` : undefined)

  if (!plant) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl text-[#2D5016] mb-4">Augalas nerastas</h1>
        <Link to="/" className="text-[#2D5016] hover:underline font-bold">
          Grįžti į pradžią
        </Link>
      </div>
    )
  }

  const getImageUrl = (img) => {
    if (typeof img === 'string') return img
    return `/img/p/${img.path}/${img.id}-large_default.jpg`
  }

  const groupMap = {
    'vaismedziai': { name: 'Vaismedžiai', path: '/vaismedziai' },
    'vaiskrumiai': { name: 'Vaiskrūmiai', path: '/vaiskrumiai' },
    'kaulavaisiai': { name: 'Kaulavaisiai', path: '/kaulavaisiai' },
    'kiti-augalai': { name: 'Kiti augalai', path: '/kiti-augalai' },
    'medus': { name: 'Medus ir bitės', path: '/medus' },
  }
  const catInfo = groupMap[plant.categoryGroup] || groupMap['vaismedziai']
  const categoryName = catInfo.name
  const categoryPath = catInfo.path

  return (
    <div className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#2D5016]">Pradžia</Link>
          <span className="mx-2">/</span>
          <Link to={categoryPath} className="hover:text-[#2D5016]">{categoryName}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{plant.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            {plant.images && plant.images.length > 0 ? (
              <>
                <div className="bg-white shadow-md overflow-hidden rounded-lg border-b-4 border-[#2D5016] mb-4">
                  <img
                    src={getImageUrl(plant.images[selectedImage])}
                    alt={plant.name}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src = ''
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                {plant.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {plant.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? 'border-[#FFB800]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={getImageUrl(img)}
                          alt={`${plant.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {plant.category && (
              <div className="inline-block bg-[#2D5016]/10 text-[#2D5016] px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3 rounded-full">
                {plant.category}
              </div>
            )}
            <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#2D5016] mb-6">{plant.name}</h1>

            {plant.description_short && (
              <div className="bg-white p-6 border-l-4 border-[#FFB800] mb-6 rounded-r-lg shadow-sm">
                <p className="text-gray-700">{plant.description_short}</p>
              </div>
            )}

            {plant.description && (
              <div>
                <h2 className="text-lg font-bold font-serif text-[#2D5016] mb-3">Aprašymas</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {plant.description}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 pt-8 border-t-4 border-[#2D5016]">
              <p className="text-[#2D5016] font-bold text-lg mb-2">Norite įsigyti?</p>
              <p className="text-gray-700 text-sm mb-5">
                Šį augalą galite rasti mūsų prekybos aikštelėje arba susisiekti dėl daugiau informacijos.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://sodogerybes.lt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-6 py-2.5 rounded-full transition-colors shadow-md text-sm"
                >
                  Pirkti sodogerybes.lt →
                </a>
                <Link
                  to="/kontaktai"
                  className="inline-flex items-center gap-2 border-2 border-[#2D5016] text-[#2D5016] font-bold px-6 py-2.5 rounded-full hover:bg-[#2D5016] hover:text-white transition-colors text-sm"
                >
                  Susisiekti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AugalasPage
