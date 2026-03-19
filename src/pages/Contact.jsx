import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiFacebook, FiLinkedin, FiInstagram, FiChevronDown } from 'react-icons/fi'

import '../styles/Contact.css'

const offices = [
  {
    title: 'Main Campus – Valletta',
    address: 'Triq id-Dejqa, Valletta VLT 1213, Malta',
    phone: '+356 2125 0169',
    email: 'info@ascencia-business-school.mt',
    hours: 'Mon – Fri: 09:00 – 17:00',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    primary: true,
  },
  {
    title: 'Admissions Office',
    address: 'Triq il-Merkanti, Valletta, Malta',
    phone: '+356 2125 0170',
    email: 'admissions@ascencia-business-school.mt',
    hours: 'Mon – Fri: 09:00 – 18:00',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    primary: false,
  },
]

const faqs = [
  {
    q: 'What are the entry requirements for MBA programmes?',
    a: 'Generally, an undergraduate degree from a recognised institution and at least 2 years of work experience. English proficiency (IELTS 6.0 or equivalent) is required for non-native speakers.',
  },
  {
    q: 'Can I study part-time while working?',
    a: 'Yes, most of our programmes are available in part-time and blended learning formats, designed for working professionals.',
  },
  {
    q: 'Are the qualifications recognised internationally?',
    a: 'Absolutely. All our programmes are accredited by MFHEA and comply with the Bologna Process, making them recognised across the EU and beyond.',
  },
  {
    q: 'How do I apply for a student visa?',
    a: 'Our dedicated student support team guides you through the visa application process. Contact our admissions office for personalised assistance.',
  },
  {
    q: 'Are there scholarships available?',
    a: 'Yes, we offer merit-based scholarships and early application discounts. Visit our fees page or contact us for current scholarship opportunities.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', programme: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85" alt="Contact" />
          <div className="contact-hero-overlay" />
        </div>
        <div className="container contact-hero-content">
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title" style={{ color: 'white', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
            We're Here to Help You<br />Take the Next Step
          </h1>
          <p>Have questions about our programmes? Want to apply? Our team is ready to guide you through every step of your journey.</p>
        </div>
      </section>

      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-quick">
            <div className="contact-quick-card">
              <div className="cq-icon"><FiPhone /></div>
              <div>
                <strong>Call Us</strong>
                <span>+356 2125 0169</span>
              </div>
            </div>
            <div className="contact-quick-card">
              <div className="cq-icon"><FiMail /></div>
              <div>
                <strong>Email Us</strong>
                <span>info@ascencia-business-school.mt</span>
              </div>
            </div>
            <div className="contact-quick-card">
              <div className="cq-icon"><FiMapPin /></div>
              <div>
                <strong>Visit Us</strong>
                <span>Valletta, Malta</span>
              </div>
            </div>
            <div className="contact-quick-card">
              <div className="cq-icon"><FiClock /></div>
              <div>
                <strong>Office Hours</strong>
                <span>Mon – Fri: 09:00 – 17:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <div className="contact-form-wrap">
            <span className="section-label">Send Us a Message</span>
            <div className="divider-red" />
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Get In Touch With Our Team</h2>
            <p className="section-sub" style={{ marginBottom: '36px' }}>
              Whether you're ready to apply or just exploring options, fill in the form and we'll be in touch within 24 hours.
            </p>

            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. Our admissions team will contact you within 1 business day.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '20px' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="programme">Programme of Interest</label>
                    <select id="programme" name="programme" value={form.programme} onChange={handleChange}>
                      <option value="">Select a programme</option>
                      <option>Doctor of Business Administration (DBA)</option>
                      <option>MBA in Leadership Excellence</option>
                      <option>MSc in Business Economics</option>
                      <option>MSc in Computer Science</option>
                      <option>MSc in Data Science & AI</option>
                      <option>MSc in Blockchain & Fintech</option>
                      <option>MA in Entrepreneurship</option>
                      <option>Bachelor in Business Administration</option>
                      <option>Undergraduate Diploma</option>
                      <option>English Language Course</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background and what you're looking for..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <FiSend />
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-wrap">
            <div className="contact-offices">
              {offices.map((o) => (
                <div key={o.title} className={`office-card ${o.primary ? 'primary' : ''}`}>
                  <div className="office-img">
                    <img src={o.img} alt={o.title} />
                    {o.primary && <span className="office-badge">Main Campus</span>}
                  </div>
                  <div className="office-body">
                    <h3>{o.title}</h3>
                    <div className="office-details">
                      <div className="office-detail"><FiMapPin /> <span>{o.address}</span></div>
                      <div className="office-detail"><FiPhone /> <span>{o.phone}</span></div>
                      <div className="office-detail"><FiMail /> <span>{o.email}</span></div>
                      <div className="office-detail"><FiClock /> <span>{o.hours}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social-block">
              <h4>Follow Us</h4>
              <div className="contact-social">
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <span className="section-label">Our Location</span>
            <div className="divider-red" />
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Find Us in Valletta</h2>
          </div>
          <div className="map-embed">
            <iframe
              title="Ascencia Malta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.2!2d14.5146!3d35.8997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45222fba69ed%3A0x8a37c4e01cbb8bd9!2sValletta%2C%20Malta!5e0!3m2!1sen!2smt!4v1"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="section-label">Frequently Asked Questions</span>
            <div className="divider-red" />
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Common Questions Answered</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <FiChevronDown className="faq-icon" />
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}