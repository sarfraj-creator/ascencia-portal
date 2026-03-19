import { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import '../../styles/Navbar.css';

const programmes = [
  { label: 'DBA Degrees', sub: ['Doctor of Business Administration'] },
  { label: 'MBA Degrees', sub: ['MBA in Leadership Excellence'] },
  { label: 'Masters Degrees', sub: ['MSc in Business Economics', 'MSc in Computer Science', 'MA in Entrepreneurship', 'MA in Leadership & Business Development', 'MA in International Management', 'MA in Human Resource Management'] },
  { label: 'Postgraduate Programmes', sub: ['PG Diploma in Business Economics', 'PG Diploma in Computer Science', 'PG Diploma in Leadership & Business Development', 'PG Diploma in HRM'] },
  { label: 'Bachelor Degrees', sub: ['Bachelor in Business Administration', 'BSc in Computer Science'] },
  { label: 'Diploma Programmes', sub: ['Undergraduate Diploma in Business Administration', 'Undergraduate Diploma in Computer Science'] },
];

const navLinks = [
  {
    label: 'Ascencia Malta',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '#' },
      { label: 'Work With Us', href: '#' },
      { label: 'Accredited Members', href: '#' },
      { label: 'Erasmus+', href: '#' },
    ],
  },
  {
    label: 'Programmes',
    children: programmes.map(p => ({ label: p.label, href: '#' })),
  },
  { label: 'English School', href: '#' },
  {
    label: 'Living in Malta',
    children: [
      { label: 'Study in Malta', href: '#' },
      { label: 'Jobs in Malta', href: '#' },
      { label: 'Visa Requirements', href: '#' },
    ],
  },
  {
    label: 'Quality Assurance',
    children: [
      { label: 'IQA Policy', href: '#' },
      { label: 'Recruitment Process', href: '#' },
    ],
  },
  { label: 'Fees', href: '#' },
  { label: 'Events', href: '#' },
];

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href, page) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    if (page) navigate(page);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span><FiPhone size={12} /> +356 2757 0588</span>
            <span><FiMail size={12} /> info@ascencia-business-school.mt</span>
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
            onClick={() => handleNav('/', 'home')}
            aria-label="Ascencia Malta Home"
          >
            <div className="logo-mark">
              <span className="logo-a">A</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">ASCENCIA</span>
              <span className="logo-sub">MALTA</span>
            </div>
          </button>

          <nav className="navbar__links" role="navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="nav-item nav-item--dropdown"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="nav-link">
                    {link.label} <FiChevronDown size={14} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="dropdown">
                      {link.children.map(child => (
                        <button
                          key={child.label}
                          className="dropdown__item"
                          onClick={() => handleNav(child.href, child.label === 'About Us' ? 'about' : null)}
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
                  className="nav-link"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              )
            )}
            <button className="nav-cta" onClick={() => handleNav('/contact', 'contact')}>
              Apply Now
            </button>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="mobile-item">
                <button
                  className="mobile-link mobile-link--parent"
                  onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                >
                  {link.label}
                  <FiChevronDown
                    size={16}
                    className={mobileExpanded === link.label ? 'rotated' : ''}
                  />
                </button>
                {mobileExpanded === link.label && (
                  <div className="mobile-sub">
                    {link.children.map(child => (
                      <button
                        key={child.label}
                        className="mobile-sub__item"
                        onClick={() => handleNav(child.href, child.label === 'About Us' ? 'about' : null)}
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
                className="mobile-link"
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            )
          )}
          <button className="mobile-cta" onClick={() => handleNav('/contact', 'contact')}>
            Apply Now
          </button>
        </div>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}