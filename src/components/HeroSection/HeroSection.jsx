import './HeroSection.css'

const stats = [
  { value: '500+', label: 'Businesses Supported' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '24/7', label: 'Expert IT Support' },
  { value: '15+', label: 'Years Experience' },
]

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__grid"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">

          <h1 className="hero__title">
            Crafting Digital
            <span className="hero__title-accent"> Advantage</span>
            <br />for UK Businesses
          </h1>

          <p className="hero__desc">
            SK &amp; MS IT Consulting delivers enterprise-grade IT services, cloud solutions,
            and cyber security to help UK businesses thrive in the digital age. From
            managed support to full digital transformation — we're your strategic IT partner.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#services" className="btn-outline-white">
              Explore Services
            </a>
          </div>

          <div className="hero__trust">
            <span className="trust-label">Trusted by UK businesses in:</span>
            <div className="trust-tags">
              {['Education', 'Manufacturing', 'Healthcare', 'Professional Services'].map(t => (
                <span key={t} className="trust-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual">
          <div className="hero-card hero-card--main">
            {/* Placeholder for hero image/illustration */}
            <div className="hero-placeholder">
              <div className="hero-icon-grid">
                {[
                  { icon: '☁', label: 'Cloud' },
                  { icon: '🔒', label: 'Security' },
                  { icon: '⚡', label: 'Support' },
                  { icon: '📊', label: 'Analytics' },
                  { icon: '🌐', label: 'Network' },
                  { icon: '🤖', label: 'Automation' },
                ].map(item => (
                  <div key={item.label} className="hero-icon-item">
                    <span className="hero-icon">{item.icon}</span>
                    <span className="hero-icon-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-placeholder-label">Your IT Ecosystem</div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hero-float hero-float--1">
            <div className="float-icon">✓</div>
            <div>
              <div className="float-title">Systems Online</div>
              <div className="float-sub">All services running</div>
            </div>
          </div>
          <div className="hero-float hero-float--2">
            <div className="float-icon">🛡</div>
            <div>
              <div className="float-title">Cyber Secure</div>
              <div className="float-sub">Protected 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}