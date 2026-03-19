import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiArrowRight } from 'react-icons/fi';
import '../../styles/Footer.css';

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__newsletter">
            <span className="section-label">Stay Updated</span>
            <h3>Get the latest news from Ascencia Malta</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn-primary">Subscribe <FiArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <button className="footer-logo" onClick={() => navigate('home')}>
              <div className="footer-logo-mark">
                <span>A</span>
              </div>
              <div>
                <div className="footer-logo-name">ASCENCIA</div>
                <div className="footer-logo-sub">MALTA</div>
              </div>
            </button>
            <p>A proud member of the Galileo Global Education group — one of Europe's leading higher education institutions, dedicated to shaping tomorrow's business leaders.</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="YouTube"><FiYoutube /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Programmes</h4>
            <ul>
              <li><a href="#">Doctor of Business Administration</a></li>
              <li><a href="#">MBA in Leadership Excellence</a></li>
              <li><a href="#">MSc in Business Economics</a></li>
              <li><a href="#">MSc in Computer Science</a></li>
              <li><a href="#">Bachelor in Business Administration</a></li>
              <li><a href="#">Undergraduate Diploma</a></li>
              <li><a href="#">English School</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => navigate('about')}>About Us</button></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Accredited Members</a></li>
              <li><a href="#">Study in Malta</a></li>
              <li><a href="#">Visa Requirements</a></li>
              <li><a href="#">IQA Policy</a></li>
              <li><button onClick={() => navigate('contact')}>Contact Us</button></li>
            </ul>
          </div>

          <div className="footer__col footer__contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FiMapPin size={16} />
                <span>171/2 Old Bakery Street, Valletta, VLT 1455, Malta</span>
              </li>
              <li>
                <FiPhone size={16} />
                <a href="tel:+35627570588">+356 2757 0588</a>
              </li>
              <li>
                <FiMail size={16} />
                <a href="mailto:info@ascencia-business-school.mt">info@ascencia-business-school.mt</a>
              </li>
            </ul>
            <div className="footer__accreditation">
              <span>Accredited by</span>
              <div className="accreditation-badges">
                <div className="badge">MFHEA</div>
                <div className="badge">ISO 9001</div>
                <div className="badge">Erasmus+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Ascencia Business School Malta. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}