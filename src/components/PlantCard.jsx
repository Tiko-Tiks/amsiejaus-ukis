import { Link } from 'react-router-dom'

function PlantCard({ plant }) {
  const getCoverImage = () => {
    if (plant.image) return plant.image
    if (plant.images && plant.images.length > 0) {
      if (typeof plant.images[0] === 'string') return plant.images[0]
      const coverImg = plant.images.find(img => img.cover) || plant.images[0]
      return `/img/p/${coverImg.path}/${coverImg.id}-home_default.jpg`
    }
    return null
  }

  return (
    <Link to={`/augalas/${plant.id}`} className="group block">
      <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-4 border-[#2D5016]">
          {getCoverImage() ? (
            <img
              src={getCoverImage()}
              alt={plant.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100"><svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>'
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {plant.category && (
            <div className="absolute top-0 left-0 bg-[#2D5016]/90 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-br-lg">
              {plant.category}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-serif font-bold text-lg text-[#2D5016] mb-1 group-hover:text-[#8B6F47] transition-colors line-clamp-2 min-h-[3rem]">
            {plant.name}
          </h3>
          {plant.description_short && (
            <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
              {plant.description_short}
            </p>
          )}
          <div className="border-t border-gray-200 pt-3">
            <span className="inline-flex items-center gap-2 text-[#2D5016] font-bold text-sm group-hover:text-[#8B6F47] transition-colors">
              Plačiau
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PlantCard
