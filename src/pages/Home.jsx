import { FiArrowRight, FiAward, FiUsers, FiGlobe, FiBookOpen, FiCheckCircle, FiChevronRight, FiStar } from 'react-icons/fi';
import '../styles/Home.css';

const stats = [
  { value: '3,000+', label: 'Students Enrolled' },
  { value: '50+', label: 'Nationalities' },
  { value: '20+', label: 'Degree Programmes' },
  { value: '15+', label: 'Years of Excellence' },
];

const programmes = [
  {
    level: 'Doctoral',
    title: 'Doctor of Business Administration',
    desc: 'Advance your academic and professional career with a research-driven doctorate in business.',
    img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80',
    tag: 'DBA',
  },
  {
    level: 'Masters',
    title: 'MBA in Leadership Excellence',
    desc: 'Develop transformational leadership skills and strategic management expertise.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    tag: 'MBA',
  },
  {
    level: 'Masters',
    title: 'MSc in Computer Science',
    desc: 'Specialize in AI, data science, blockchain, or cybersecurity for the digital economy.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    tag: 'MSc',
  },
  {
    level: 'Bachelor',
    title: 'Bachelor in Business Administration',
    desc: 'Build a strong foundation in business, management, and entrepreneurship.',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    tag: 'BBA',
  },
  {
    level: 'Postgraduate',
    title: 'PG Diploma in Business Economics',
    desc: 'Bridge theory and practice with a focused postgraduate qualification.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
    tag: 'PGD',
  },
  {
    level: 'Diploma',
    title: 'Undergraduate Diploma in Computer Science',
    desc: 'Kickstart your tech career with a structured and practical computer science programme.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    tag: 'Diploma',
  },
];

const whyItems = [
  { icon: <FiAward size={28} />, title: 'Internationally Accredited', desc: 'Recognized by MFHEA and aligned with European QF standards for global recognition of your qualification.' },
  { icon: <FiGlobe size={28} />, title: 'Study in the Heart of Europe', desc: 'Malta — an EU member state with rich history, Mediterranean climate, and an English-speaking environment.' },
  { icon: <FiUsers size={28} />, title: 'Diverse Student Community', desc: 'Learn alongside peers from 50+ nationalities in a truly multicultural academic environment.' },
  { icon: <FiBookOpen size={28} />, title: 'Flexible Learning Pathways', desc: 'Full-time, part-time, and blended learning options designed to fit your lifestyle and goals.' },
];

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    country: 'UAE',
    programme: 'MBA in Leadership Excellence',
    text: 'Studying at Ascencia Malta was a life-changing experience. The faculty\'s real-world expertise and the exposure to a global student body shaped my leadership perspective profoundly.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Maria Fernandez',
    country: 'Spain',
    programme: 'MSc in Computer Science',
    text: 'The programme in data science was cutting-edge. I had access to industry projects, research opportunities, and an incredible network of professionals across Europe.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Emmanuel Osei',
    country: 'Ghana',
    programme: 'Bachelor in Business Administration',
    text: 'Malta is the perfect place to grow — safe, welcoming, and full of opportunities. Ascencia gave me the skills and confidence to launch my own business within a year of graduating.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80',
  },
];

const maltaFeatures = [
  'English-speaking EU member state',
  'Safe and welcoming island nation',
  'Affordable cost of living',
  'Rich cultural heritage & history',
  'Gateway to European job market',
  'Year-round Mediterranean climate',
];

export default function Home({ navigate }) {
  return (
    <main>
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=85"
            alt="Ascencia Malta campus"
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <span className="hero__tag">Accredited · European · Excellence</span>
            <h1>
              Shape Your Future at<br />
              <em>Ascencia Business</em><br />
              School Malta
            </h1>
            <p>
              Join thousands of students from around the world pursuing internationally
              recognised business and technology degrees in the heart of the Mediterranean.
            </p>
            <div className="hero__actions">
              <button className="btn-primary" onClick={() => navigate('contact')}>
                Apply Now <FiArrowRight size={16} />
              </button>
              <button className="btn-outline-white" onClick={() => navigate('about')}>
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="hero__stats">
          <div className="container">
            <div className="stats-row">
              {stats.map(s => (
                <div key={s.label} className="stat-item">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="programmes">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Academic Programmes</span>
            <h2>Find Your Path to<br /><em>Academic Excellence</em></h2>
            <p>
              From diplomas to doctoral degrees, our programmes are designed to equip
              you with the knowledge, skills, and networks to thrive globally.
            </p>
          </div>
          <div className="programmes__grid">
            {programmes.map(prog => (
              <article key={prog.title} className="prog-card">
                <div className="prog-card__img">
                  <img src={prog.img} alt={prog.title} loading="lazy" />
                  <span className="prog-card__tag">{prog.tag}</span>
                </div>
                <div className="prog-card__body">
                  <span className="prog-card__level">{prog.level}</span>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                  <button className="prog-card__cta">
                    Learn More <FiChevronRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="programmes__footer">
            <button className="btn-outline-dark">
              View All Programmes <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="why-ascencia">
        <div className="container why-ascencia__inner">
          <div className="why-ascencia__visual">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
              alt="Students at Ascencia Malta"
            />
            <div className="why-ascencia__badge">
              <FiAward size={24} />
              <span>MFHEA<br />Accredited</span>
            </div>
          </div>
          <div className="why-ascencia__content">
            <span className="section-label">Why Choose Us</span>
            <h2>A World-Class Education<br /><em>On a Mediterranean Island</em></h2>
            <p>
              Ascencia Business School Malta is part of the Galileo Global Education network —
              one of Europe's most respected higher education groups. We deliver career-focused,
              internationally accredited programmes in a vibrant, multicultural environment.
            </p>
            <div className="why-grid">
              {whyItems.map(item => (
                <div key={item.title} className="why-item">
                  <div className="why-item__icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => navigate('about')}>
              About Ascencia Malta <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="malta-section">
        <div className="malta__bg">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Valletta Malta"
          />
          <div className="malta__overlay" />
        </div>
        <div className="container malta__content">
          <div className="malta__text">
            <span className="section-label" style={{color:'rgba(255,255,255,0.8)'}}>Living in Malta</span>
            <h2>
              Study in One of<br />
              <em>Europe's Most Beautiful</em><br />
              Islands
            </h2>
            <p>
              Malta's strategic location in the Mediterranean, combined with its rich
              history, vibrant culture, and English-speaking environment, makes it
              the ideal destination for international students.
            </p>
            <ul className="malta__features">
              {maltaFeatures.map(f => (
                <li key={f}><FiCheckCircle size={16} /> {f}</li>
              ))}
            </ul>
            <button className="btn-primary" style={{marginTop:'1.5rem'}} onClick={() => navigate('contact')}>
              Plan Your Journey <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Student Stories</span>
            <h2>What Our Students<br /><em>Have to Say</em></h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map(t => (
              <article key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, i) => <FiStar key={i} size={14} fill="#c9a84c" color="#c9a84c" />)}
                </div>
                <blockquote>"{t.text}"</blockquote>
                <div className="testimonial-card__author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.programme} · {t.country}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div className="cta-banner__text">
            <h2>Ready to Start Your<br /><em>Academic Journey?</em></h2>
            <p>Applications are now open for the upcoming intake. Secure your place today.</p>
          </div>
          <div className="cta-banner__actions">
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Apply Now <FiArrowRight size={16} />
            </button>
            <button className="btn-outline-white" onClick={() => navigate('contact')}>
              Request Information
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}