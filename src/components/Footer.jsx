import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#2D5016] text-[#F5F5F0] mt-auto">
      <div className="border-t-4 border-[#FFB800]">
        {/* Main Footer */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* About */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/logo.png" alt="" className="h-8 w-auto" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">Juozo Amšiejaus Ūkis</h3>
                    <p className="text-sm uppercase tracking-wide text-white/70">Medelynas ir medus</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Auginame kokybiškas vaismedžių ir vaiskrūmių sodinukes bei gaminame natūralų medų Dzūkijos regione.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-lg font-bold font-serif mb-4 pb-2 border-b-2 border-[#FFB800] text-white">Navigacija</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-white/80 hover:text-white hover:underline transition-colors">Pagrindinis</Link></li>
                  <li><Link to="/vaismedziai" className="text-white/80 hover:text-white hover:underline transition-colors">Vaismedžiai</Link></li>
                  <li><Link to="/vaiskrumiai" className="text-white/80 hover:text-white hover:underline transition-colors">Vaiskrūmiai</Link></li>
                  <li><Link to="/kaulavaisiai" className="text-white/80 hover:text-white hover:underline transition-colors">Kaulavaisiai</Link></li>
                  <li><Link to="/kontaktai" className="text-white/80 hover:text-white hover:underline transition-colors">Kontaktai</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-bold font-serif mb-4 pb-2 border-b-2 border-[#FFB800] text-white">Kontaktai</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-1 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-white/80">
                      <p>Vilniaus g. 1A</p>
                      <p>Valkininkai, Varėnos r.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+37062441787" className="text-white/80 hover:text-white transition-colors">
                      +370 624 41787
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@amsiejausmedelynas.lt" className="text-white/80 hover:text-white transition-colors text-xs">
                      info@amsiejausmedelynas.lt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours Banner */}
        <div className="bg-[#8B6F47] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="font-bold text-sm sm:text-base">
                <span className="mr-4">Pr-Pn: 9:00-18:00</span>
                <span className="mr-4">Še: 10:00-16:00</span>
                <span>Sk: Uždaryta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1F2819] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-white/60">
              &copy; {new Date().getFullYear()} Juozo Amšiejaus Ūkis. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
