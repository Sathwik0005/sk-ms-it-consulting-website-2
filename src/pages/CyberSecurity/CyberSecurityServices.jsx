import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const services = [
  { icon: '🛡', title: 'Cyber Essentials Certification', desc: 'Government-backed certification that demonstrates your commitment to cyber security. Required for many public sector contracts and increasingly expected by enterprise clients.' },
  { icon: '🔒', title: 'Endpoint Security & Management', desc: 'Advanced threat detection and response across every device in your organisation — laptops, desktops, mobile devices, and servers.' },
  { icon: '📧', title: 'Email Security', desc: 'Block phishing, malware, and business email compromise before it reaches your inbox with enterprise-grade email filtering and sandboxing.' },
  { icon: '🔥', title: 'Managed Firewall', desc: 'Continuously monitored and managed firewall services. We configure, maintain, and alert on your network perimeter security around the clock.' },
  { icon: '🎓', title: 'Security Awareness Training', desc: 'Your people are your biggest vulnerability. Regular, engaging training programmes that build a security-conscious culture across your organisation.' },
  { icon: '🔍', title: 'Cyber Security Risk Assessment', desc: 'A comprehensive review of your security posture — identifying vulnerabilities, gaps, and providing a prioritised remediation roadmap.' },
]

const stats = [
  { value: '88%', label: 'Of UK businesses suffered a cyber attack last year' },
  { value: '£3.4M', label: 'Average cost of a data breach for a UK SME' },
  { value: '95%', label: 'Of breaches are caused by human error' },
  { value: '287', label: 'Average days to identify a breach without monitoring' },
]

const benefits = [
  { icon: '🇬🇧', title: 'UK-Based Security Team', desc: 'Our security engineers are UK-based, with deep knowledge of UK compliance requirements including GDPR, DPA 2018, and NIS Regulations.' },
  { icon: '📋', title: 'Compliance Support', desc: 'We help you meet regulatory requirements — GDPR, Cyber Essentials, ISO 27001, and sector-specific frameworks.' },
  { icon: '⚡', title: 'Rapid Incident Response', desc: 'In the event of a breach or suspected incident, our team responds immediately to contain, investigate, and remediate.' },
  { icon: '🔄', title: 'Continuous Improvement', desc: 'Cyber threats evolve constantly. We continuously review and improve your security posture as the threat landscape changes.' },
]

const steps = [
  { title: 'Security Assessment', desc: 'We audit your current security controls, identify vulnerabilities, and benchmark you against industry best practice.' },
  { title: 'Priority Remediation', desc: 'We address your highest-risk gaps first — quick wins that significantly reduce your exposure in days, not months.' },
  { title: 'Layered Protection', desc: 'We implement a defence-in-depth strategy — multiple security layers so no single point of failure exposes your business.' },
  { title: 'Monitor & Respond', desc: 'Ongoing monitoring, alerting, and incident response ensuring your security posture remains strong as threats evolve.' },
]

export default function CyberSecurityServices() {
  return (
    <PageLayout
      breadcrumb="Cyber Security Services"
      tag="Cyber Security"
      title="Cyber Security Services for UK Businesses"
      subtitle="Cyber attacks are no longer a question of if — they're a question of when. Our comprehensive cyber security services protect your business, your data, and your reputation from an ever-evolving threat landscape."
      heroStats={[
        { value: '24/7', label: 'Threat Monitoring' },
        { value: 'CE+', label: 'Cyber Essentials Certified' },
        { value: '100%', label: 'UK-Based Security Team' },
      ]}
    >
      {/* Threat reality */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Threat Reality</span>
            <h2 className="section-title">UK Businesses Are Under Attack — Right Now</h2>
            <p className="section-subtitle">The numbers are alarming. No business is too small to be targeted. The question is whether you're prepared.</p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map(s => (
              <div key={s.label} className="benefit-card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 8 }}>{s.value}</div>
                <div className="benefit-card__desc">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Cyber Security Protection</h2>
            <p className="section-subtitle">
              A layered, defence-in-depth approach covering every attack surface — from your inbox to your network perimeter.
            </p>
          </div>
          <div className="benefit-grid">
            {services.map(s => (
              <div key={s.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{s.icon}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why SK &amp; MS?</span>
              <h2 className="section-title">Security You Can Trust</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                We don't just sell security products — we become your security partner, taking ownership of your cyber risk so you can focus on your business.
              </p>
              <div className="feature-list">
                {benefits.map(b => (
                  <div key={b.title} className="feature-list__item">
                    <div className="feature-list__icon">{b.icon}</div>
                    <div className="feature-list__text">
                      <strong>{b.title}</strong>
                      <span>{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🔒</div>
                {/* Replace with: <img src="/images/cyber-security.jpg" alt="Cyber Security" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Security dashboard / SOC team / lock/shield graphic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">How We Secure Your Business</h2>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {steps.map((s, i) => (
              <div key={s.title} className="benefit-card">
                <div className="benefit-card__icon" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>0{i + 1}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps ps--light">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">How secure is your business, really?</div>
              <div className="page-cta-banner__sub">Get a free cyber security assessment — we'll identify your vulnerabilities and show you exactly how to address them.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Security Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}