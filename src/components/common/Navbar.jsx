import { useState, useEffect } from 'react'
import { FiChevronDown, FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import '../../styles/Navbar.css'

const navLinks = [
  {
    label: 'Ascencia Malta',
    children: [
      { label: 'About Us',            page: 'about'   },
      { label: 'Our Team',            page: null       },
      { label: 'Work With Us',        page: null       },
      { label: 'Accredited Members',  page: null       },
      { label: 'Erasmus+',            page: null       },
    ],
  },
  {
    label: 'Programmes',
    children: [
      { label: 'Doctor of Business Administration', page: null },
      { label: 'MBA in Leadership Excellence',      page: null },
      { label: 'Masters Degrees',                   page: null },
      { label: 'Postgraduate Programmes',           page: null },
      { label: 'Bachelor Degrees',                  page: null },
      { label: 'Diploma Programmes',                page: null },
      { label: 'Award Certificates',                page: null },
    ],
  },
  { label: 'English School',  page: null },
  {
    label: 'Living in Malta',
    children: [
      { label: 'Study in Malta',    page: null },
      { label: 'Jobs in Malta',     page: null },
      { label: 'Visa Requirements', page: null },
    ],
  },
  {
    label: 'Quality Assurance',
    children: [
      { label: 'IQA Policy',          page: null },
      { label: 'Recruitment Process', page: null },
    ],
  },
  { label: 'Fees',   page: null },
  { label: 'Events', page: null },
]

const PAGE_TO_PATH = { home: '/', about: '/about', contact: '/contact' }

export default function Navbar({ currentPage, navigate }) {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [openDropdown,   setOpenDropdown]   = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const go = (page) => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
    if (page) navigate(page)
  }

  // currentPage is now a pathname like '/', '/about', '/contact'
  const isActive = (page) => page && currentPage === PAGE_TO_PATH[page]

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <a href="tel:+35627570588"><FiPhone size={12} /> +356 2757 0588</a>
            <a href="mailto:info@ascencia-business-school.mt"><FiMail size={12} /> info@ascencia-business-school.mt</a>
          </div>
          <div className="topbar__right">
            <span>Valletta, Malta</span>
          </div>
        </div>
      </div>

      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">

          <button
            className="navbar__logo"
            onClick={() => go('home')}
            aria-label="Ascencia Malta — go to homepage"
          >
            <div className="logo-mark"><span className="logo-a">A</span></div>
            <div className="logo-text">
              <span className="logo-name">ASCENCIA</span>
              <span className="logo-sub">MALTA</span>
            </div>
          </button>

          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="nav-item nav-item--dropdown"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav-link${link.children.some(c => isActive(c.page)) ? ' nav-link--active' : ''}`}
                  >
                    {link.label} <FiChevronDown size={13} />
                  </button>

                  {openDropdown === link.label && (
                    <div className="dropdown" role="menu">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          className={`dropdown__item${isActive(child.page) ? ' dropdown__item--active' : ''}`}
                          role="menuitem"
                          onClick={() => go(child.page)}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  className={`nav-link${isActive(link.page) ? ' nav-link--active' : ''}`}
                  onClick={() => go(link.page)}
                >
                  {link.label}
                </button>
              )
            )}

            <button
              className={`nav-cta${currentPage === '/contact' ? ' nav-cta--active' : ''}`}
              onClick={() => go('contact')}
            >
              Apply Now
            </button>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-menu__inner">

          <button
            className={`mobile-link${currentPage === '/' ? ' mobile-link--active' : ''}`}
            onClick={() => go('home')}
          >
            Home
          </button>

          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="mobile-item">
                <button
                  className="mobile-link mobile-link--parent"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <FiChevronDown
                    size={15}
                    style={{
                      transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {mobileExpanded === link.label && (
                  <div className="mobile-sub">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        className={`mobile-sub__item${isActive(child.page) ? ' mobile-sub__item--active' : ''}`}
                        onClick={() => go(child.page)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.label}
                className={`mobile-link${isActive(link.page) ? ' mobile-link--active' : ''}`}
                onClick={() => go(link.page)}
              >
                {link.label}
              </button>
            )
          )}

          <button className="mobile-cta" onClick={() => go('contact')}>
            Apply Now
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}