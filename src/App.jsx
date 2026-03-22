import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import VaismedzaiPage from './pages/VaismedzaiPage'
import VaiskrumiaiPage from './pages/VaiskrumiaiPage'
import KaulavaisaiPage from './pages/KaulavaisaiPage'
import MedusPage from './pages/MedusPage'
import KitiAugalaiPage from './pages/KitiAugalaiPage'
import KontaktaiPage from './pages/KontaktaiPage'
import AugalasPage from './pages/AugalasPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vaismedziai" element={<VaismedzaiPage />} />
            <Route path="/vaiskrumiai" element={<VaiskrumiaiPage />} />
            <Route path="/kaulavaisiai" element={<KaulavaisaiPage />} />
            <Route path="/medus" element={<MedusPage />} />
            <Route path="/kiti-augalai" element={<KitiAugalaiPage />} />
            <Route path="/kontaktai" element={<KontaktaiPage />} />
            <Route path="/augalas/:id" element={<AugalasPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
