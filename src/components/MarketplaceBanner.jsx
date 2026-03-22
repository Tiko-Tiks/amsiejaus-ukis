function MarketplaceBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-[#2D5016] text-white p-8 shadow-lg rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold font-serif mb-3">Norite įsigyti?</h3>
          <p className="text-white/90 mb-4">
            Aplankykite mūsų prekybos aikštelę arba susisiekite telefonu
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://sodogerybes.lt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-6 py-2.5 rounded-full transition-colors shadow-md"
            >
              sodogerybes.lt →
            </a>
            <a
              href="tel:+37062441787"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-full transition-colors"
            >
              +370 624 41787
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-[#2D5016] text-white p-10 md:p-14 text-center shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-white">
        Prekybos aikštelė
      </h2>
      <p className="text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
        Aplankykite mūsų naują prekybos aikštelę, kur galite įsigyti vaismedžių,
        vaiskrūmių, medaus ir kitų ūkio produktų.
      </p>
      <a
        href="https://sodogerybes.lt"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E6A600] text-[#2D5016] font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg text-lg"
      >
        Eiti į sodogerybes.lt →
      </a>
    </section>
  )
}

export default MarketplaceBanner
