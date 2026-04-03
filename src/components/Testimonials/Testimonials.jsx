import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: "SK & MS IT Consulting transformed our IT infrastructure completely. Their team responded to every issue within minutes and the migration to Microsoft 365 was seamless. Our staff couldn't believe how smooth the transition was.",
    name: 'Sarah Thompson',
    role: 'Operations Director',
    company: 'Meridian Manufacturing Ltd',
    sector: 'Manufacturing',
    rating: 5,
  },
  {
    quote: "As a multi-academy trust, we needed an IT partner who understood safeguarding and education-specific needs. SK & MS delivered exactly that — and their proactive monitoring has prevented several incidents before they became problems.",
    name: 'James Whitfield',
    role: 'IT Manager',
    company: 'Broadfields Academy Trust',
    sector: 'Education',
    rating: 5,
  },
  {
    quote: "After a ransomware scare with our previous provider, we moved to SK & MS. The cyber security audit was eye-opening and the improvements they implemented have given us genuine peace of mind. Excellent, knowledgeable team.",
    name: 'Priya Patel',
    role: 'Finance Director',
    company: 'Apex Legal Services',
    sector: 'Professional Services',
    rating: 5,
  },
  {
    quote: "The move to hosted VoIP and Microsoft Teams completely changed how our team communicates. We're a charity with a tight budget, and SK & MS found us charity licensing that saved us thousands. Truly outstanding service.",
    name: 'David Carroll',
    role: 'CEO',
    company: 'Compass Community Trust',
    sector: 'Charity',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-tag">Client Testimonials</span>
          <h2 className="section-title">Trusted by UK Businesses</h2>
          <p className="section-subtitle">
            Don't just take our word for it — here's what our clients say about working with SK &amp; MS IT Consulting.
          </p>
        </div>

        <div className="testimonials__layout">
          {/* Main testimonial */}
          <div className="testimonial-main">
            <div className="quote-mark">"</div>
            <p className="quote-text">{current.quote}</p>
            <div className="quote-rating">
              {'★'.repeat(current.rating)}
            </div>
            <div className="quote-author">
              {/* Placeholder avatar */}
              <div className="author-avatar">
                {current.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="author-name">{current.name}</div>
                <div className="author-role">{current.role}, {current.company}</div>
                <div className="author-sector">{current.sector}</div>
              </div>
            </div>
          </div>

          {/* Selector cards */}
          <div className="testimonials__sidebar">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonial-thumb ${i === active ? 'testimonial-thumb--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="thumb-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="thumb-name">{t.name}</div>
                  <div className="thumb-company">{t.company}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? 'dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}