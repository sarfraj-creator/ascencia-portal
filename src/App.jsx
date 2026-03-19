import { useState, useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/global.css'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (target) => {
    setPage(target)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles = {
      home: 'Ascencia Business School Malta | World-Class Education',
      about: 'About Us | Ascencia Business School Malta',
      contact: 'Contact Us | Ascencia Business School Malta',
    }
    document.title = titles[page] || titles.home
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About navigate={navigate} />
      case 'contact':
        return <Contact navigate={navigate} />
      default:
        return <Home navigate={navigate} />
    }
  }

  return (
    <div className="app">
      <Navbar currentPage={page} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </div>
  )
}