import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiGlobe, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import '../styles/About.css';

const leadership = [
  {
    name: 'Prof. Anthony Sciberras',
    role: 'Academic Director',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80',
    bio: 'Over 20 years of experience in higher education management and academic leadership across Europe.',
  },
  {
    name: 'Dr. Marie-Claire Bugeja',
    role: 'Head of Business Faculty',
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&q=80',
    bio: 'Specialist in international business strategy with a PhD from INSEAD and extensive corporate experience.',
  },
  {
    name: 'Mr. Jean-Paul Vassallo',
    role: 'Director of Operations',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
    bio: 'Expertise in institutional development, student services, and building global academic partnerships.',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Head of Computer Science',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
    bio: 'Research expertise in AI and data science, driving innovation in technology programmes at Ascencia.',
  },
];

const milestones = [
  { year: '2009', event: 'Founded as a premier business school in Malta' },
  { year: '2012', event: 'Accredited by MFHEA — Malta Further and Higher Education Authority' },
  { year: '2015', event: 'Joined Galileo Global Education — Europe\'s largest private higher education group' },
  { year: '2018', event: 'Launched MSc programmes in Computer Science and Technology' },
  { year: '2020', event: 'Introduced blended learning and expanded online programme delivery' },
  { year: '2022', event: 'Achieved Erasmus+ partnership and expanded international student intake' },
  { year: '2024', event: 'Launched DBA programme and celebrated 3,000+ enrolled students milestone' },
];

const values = [
  { icon: <FiTarget size={24} />, title: 'Excellence', desc: 'We pursue academic and professional excellence in everything we do — from curriculum design to student support.' },
  { icon: <FiEye size={24} />, title: 'Innovation', desc: 'We embrace forward-thinking pedagogy, technology integration, and dynamic learning methodologies.' },
  { icon: <FiHeart size={24} />, title: 'Integrity', desc: 'We uphold the highest ethical standards in all our academic, administrative, and social practices.' },
  { icon: <FiUsers size={24} />, title: 'Inclusivity', desc: 'We celebrate diversity and foster an inclusive environment where every student can thrive and belong.' },
  { icon: <FiGlobe size={24} />, title: 'Global Outlook', desc: 'We prepare students for success in an interconnected, multicultural world economy.' },
  { icon: <FiAward size={24} />, title: 'Accountability', desc: 'We take ownership of our responsibilities to students, partners, and the wider community.' },
];

const accreditations = [
  { name: 'MFHEA', desc: 'Malta Further & Higher Education Authority' },
  { name: 'MQF', desc: 'Malta Qualifications Framework Level 7' },
  { name: 'EQF', desc: 'European Qualifications Framework' },
  { name: 'Erasmus+', desc: 'European Exchange Programme Partner' },
  { name: 'GGE', desc: 'Galileo Global Education Group Member' },
  { name: 'ISO', desc: 'ISO 9001:2015 Quality Management' },
];

export default function About({ navigate }) {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
            alt="Ascencia Malta campus"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="section-label" style={{color:'rgba(255,255,255,0.75)'}}>Ascencia Malta</span>
          <h1>
            About <em>Ascencia</em><br />
            Business School Malta
          </h1>
          <p>
            A member of the Galileo Global Education Group, we are committed to delivering
            world-class higher education that shapes leaders, innovators, and global citizens.
          </p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'2rem'}}>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Apply Now <FiArrowRight size={16} />
            </button>
            <button className="btn-outline-white">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container about-intro__inner">
          <div className="about-intro__text">
            <span className="section-label">Our Story</span>
            <h2>Shaping Business Leaders<br /><em>Since 2009</em></h2>
            <p>
              Ascencia Business School Malta was established with a singular purpose: to provide an accessible,
              high-quality, internationally accredited higher education experience in one of Europe's most
              beautiful and historically rich islands.
            </p>
            <p>
              Since joining the Galileo Global Education network — one of Europe's largest private higher
              education groups with over 170 schools across 15 countries — we have continuously elevated
              our standards, expanded our programme offerings, and strengthened our global partnerships.
            </p>
            <p>
              Today, we are home to students from over 50 nationalities, offering programmes from
              undergraduate diplomas to doctoral degrees across business, management, and technology.
            </p>
            <div className="about-intro__checks">
              {['Internationally recognised degrees', 'Industry-connected faculty', 'Multilingual student support', 'Career development services'].map(c => (
                <div key={c} className="check-item">
                  <FiCheckCircle size={18} color="var(--crimson)" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-intro__visual">
            <div className="about-img-stack">
              <img
                className="about-img-main"
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
                alt="Students at Ascencia"
              />
              <img
                className="about-img-accent"
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80"
                alt="Ascencia lecture"
              />
              <div className="about-img-stat">
                <strong>50+</strong>
                <span>Countries represented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-card__icon"><FiTarget size={32} /></div>
              <h3>Our Mission</h3>
              <p>
                To deliver internationally accredited, career-focused higher education programmes
                that empower students to develop professional competencies, critical thinking, and
                ethical leadership skills for the global workplace.
              </p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-card__icon"><FiEye size={32} /></div>
              <h3>Our Vision</h3>
              <p>
                To be the leading higher education institution in Malta and the Mediterranean region,
                recognised globally for academic excellence, innovation, and the transformational
                impact of our graduates.
              </p>
            </div>
            <div className="mv-card mv-card--values">
              <div className="mv-card__icon"><FiHeart size={32} /></div>
              <h3>Our Commitment</h3>
              <p>
                We commit to providing every student with personalised academic support,
                industry-connected learning experiences, and a diverse, inclusive community
                that prepares them to thrive in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Values</span>
            <h2>The Principles That<br /><em>Guide Everything We Do</em></h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2>Key Milestones in<br /><em>Our History</em></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item${i % 2 === 0 ? ' timeline-item--left' : ' timeline-item--right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership Team</span>
            <h2>Meet the People Behind<br /><em>Ascencia Malta</em></h2>
          </div>
          <div className="leadership-grid">
            {leadership.map(l => (
              <article key={l.name} className="leader-card">
                <div className="leader-card__img">
                  <img src={l.img} alt={l.name} loading="lazy" />
                </div>
                <div className="leader-card__info">
                  <h4>{l.name}</h4>
                  <span>{l.role}</span>
                  <p>{l.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="accreditation-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recognition & Quality</span>
            <h2>Internationally Accredited<br /><em>& Recognised</em></h2>
            <p>
              Our programmes meet the highest European and international academic quality standards,
              ensuring your qualification is recognised by employers and institutions worldwide.
            </p>
          </div>
          <div className="accreditation-grid">
            {accreditations.map(a => (
              <div key={a.name} className="accr-card">
                <span className="accr-card__name">{a.name}</span>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="galileo-section">
        <div className="container galileo-inner">
          <div className="galileo-text">
            <span className="section-label">Our Group</span>
            <h2>Part of the<br /><em>Galileo Global Education</em> Network</h2>
            <p>
              Ascencia Malta is a proud member of Galileo Global Education — one of Europe's
              largest private higher education groups, operating more than 170 schools in
              15 countries with over 150,000 students globally.
            </p>
            <p>
              This membership gives our students access to international exchange programmes,
              research collaborations, global alumni networks, and unparalleled career pathways
              across Europe and beyond.
            </p>
            <button className="btn-primary" style={{marginTop:'1.5rem'}} onClick={() => navigate('contact')}>
              Learn More <FiArrowRight size={16} />
            </button>
          </div>
          <div className="galileo-visual">
            <img
              src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=700&q=80"
              alt="Global education network"
            />
            <div className="galileo-stat">
              <strong>170+</strong>
              <span>Schools Worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}