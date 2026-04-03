import './WhyChooseUs.css'

const reasons = [
  {
    icon: '🇬🇧',
    title: 'UK-Based Experts',
    desc: 'Our certified engineers are based in the UK with local knowledge of compliance, regulation, and business needs.',
  },
  {
    icon: '⚡',
    title: 'Rapid Response',
    desc: 'Average response time under 15 minutes. We resolve most issues remotely before they impact your business.',
  },
  {
    icon: '🔐',
    title: 'Security-First',
    desc: 'Every solution we deliver is built with security at its core. Cyber Essentials certified and GDPR compliant.',
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    desc: 'Whether you have 5 or 500 users, our services scale seamlessly with your business growth.',
  },
  {
    icon: '💬',
    title: 'No Jargon Advice',
    desc: 'We communicate in plain English, giving you clear guidance without the technical overwhelm.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: 'We act as an extension of your team, understanding your business goals and aligning technology to them.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why section-pad" id="about">
      <div className="container">
        <div className="why__layout">
          {/* Left: text */}
          <div className="why__left">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              Your Strategic IT Partner
              <span className="title-line"> in the UK</span>
            </h2>
            <p className="section-subtitle">
              SK &amp; MS IT Consulting was founded on a simple belief: technology should
              work for you, not the other way around. We combine deep technical expertise
              with genuine business understanding to deliver IT that drives real results.
            </p>

            <div className="why__accreditations">
              <p className="accred-label">Accreditations &amp; Partners</p>
              <div className="accred-grid">
                {['Microsoft Partner', 'Cyber Essentials', 'ISO 27001', 'GDPR Ready'].map(a => (
                  <div key={a} className="accred-badge">
                    <span className="accred-check">✓</span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <div className="why__ctas">
              <a href="#contact" className="btn-primary">Talk to an Expert</a>
              <a href="#about" className="btn-outline">About Us</a>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="why__right">
            {reasons.map((r) => (
              <div key={r.title} className="reason-card">
                <div className="reason-icon">{r.icon}</div>
                <div>
                  <h4 className="reason-title">{r.title}</h4>
                  <p className="reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}