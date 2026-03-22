import PlantCard from './PlantCard'

function CategorySection({ title, plants }) {
  if (!plants || plants.length === 0) return null
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-1 w-12 bg-[#FFB800]"></div>
        <h2 className="text-2xl font-bold font-serif text-[#2D5016]">{title}</h2>
        <span className="text-sm text-gray-500 font-normal">({plants.length})</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
