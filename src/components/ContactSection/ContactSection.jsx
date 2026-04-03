import { useState } from 'react'
import './ContactSection.css'

const services = [
  'Managed IT Services',
  'Cloud Solutions',
  'Cyber Security',
  'IT Support & Helpdesk',
  'Microsoft 365',
  'Unified Communications',
  'Business Apps & ERP',
  'IT Consultancy',
  'Other',
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your form submission logic (e.g. EmailJS, API call)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="contact__layout">
          {/* Left: info */}
          <div className="contact__info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Let's Talk About<br />Your IT Needs
            </h2>
            <p className="section-subtitle">
              Whether you need immediate IT support, want to move to the cloud,
              or are looking for a long-term technology partner — we're here to help.
              Get a free, no-obligation consultation today.
            </p>

            <div className="contact__details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <a href="mailto:info@skmsit.com" className="contact-value">info@skmsit.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div>
                  <div className="contact-label">Website</div>
                  <a href="https://skmsitconsulting.co.uk" target="_blank" rel="noreferrer" className="contact-value">skmsitconsulting.co.uk</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">4 Wesleyan Court, Everton,<br />Doncaster, DN10 5DN</div>
                </div>
              </div>
            </div>

            <div className="contact__promise">
              <div className="promise-item">
                <span className="promise-icon">⚡</span>
                <span>Response within 2 business hours</span>
              </div>
              <div className="promise-item">
                <span className="promise-icon">🔒</span>
                <span>Your data is safe with us — GDPR compliant</span>
              </div>
              <div className="promise-item">
                <span className="promise-icon">✅</span>
                <span>Free, no-obligation consultation</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for getting in touch. One of our consultants will contact you within 2 business hours.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Get a Free Consultation</h3>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+44 7700 000000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Ltd"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your IT needs or the challenges you're facing..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M12 8l-4-4M12 8l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>

                <p className="form-note">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}