import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/global.css'

const PAGE_TITLES = {
  '/':        'Ascencia Business School Malta | World-Class Education',
  '/about':   'About Us | Ascencia Business School Malta',
  '/contact': 'Contact & Apply | Ascencia Business School Malta',
}

export default function App() {
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/']
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const go = (page) => {
    const routes = { home: '/', about: '/about', contact: '/contact' }
    navigate(routes[page] ?? '/')
  }

  return (
    <div className="app">
      <Navbar currentPage={location.pathname} navigate={go} />
      <Routes>
        <Route path="/"        element={<Home    navigate={go} />} />
        <Route path="/about"   element={<About   navigate={go} />} />
        <Route path="/contact" element={<Contact navigate={go} />} />
        <Route path="*"        element={<Home    navigate={go} />} />
      </Routes>
      <Footer navigate={go} />
    </div>
  )
}