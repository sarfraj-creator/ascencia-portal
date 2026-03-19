import { Link, useLocation } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="main-header">
      <div className="container header-inner">
        <div className="logo">
          <Link to="/"><img src="Ascencia-Malta-Logo.svg" alt="Ascencia Logo" height="45" /></Link>
        </div>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About Us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;