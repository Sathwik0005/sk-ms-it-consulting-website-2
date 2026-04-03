import './CyberSecurity.css'

const threats = [
  { icon: '📧', label: 'Phishing Attacks' },
  { icon: '💸', label: 'Ransomware' },
  { icon: '🕵️', label: 'Data Breaches' },
  { icon: '🔓', label: 'Unauthorised Access' },
  { icon: '🦠', label: 'Malware & Viruses' },
  { icon: '⚠️', label: 'Insider Threats' },
]

const cyberServices = [
  {
    title: 'Cyber Essentials Certification',
    desc: 'Government-backed certification that demonstrates your commitment to cyber security. Required by many public sector contracts.',
  },
  {
    title: 'Endpoint Security & Management',
    desc: 'Protect every device on your network with advanced endpoint detection, response, and management solutions.',
  },
  {
    title: 'Email Security',
    desc: 'Block phishing, spam, and malicious attachments before they reach your inbox with enterprise-grade email filtering.',
  },
  {
    title: 'Managed Firewall',
    desc: 'Continuously monitored and managed firewall services that keep your network protected around the clock.',
  },
  {
    title: 'Security Awareness Training',
    desc: 'Your people are your biggest risk. Train your team to recognise and respond to cyber threats with engaging training programmes.',
  },
  {
    title: 'Cyber Security Risk Assessment',
    desc: 'Identify vulnerabilities across your organisation with a thorough security audit and receive a clear action plan.',
  },
]

export default function CyberSecurity() {
  return (
    <section className="cyber section-pad" id="cyber">
      <div className="cyber__bg">
        <div className="cyber__bg-grid"></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cyber__header">
          <span className="section-tag section-tag--light">Cyber Security</span>
          <h2 className="section-title section-title--light">
            Protect Your Business
            <br />from Cyber Threats
          </h2>
          <p className="section-subtitle section-subtitle--light">
            Cyber attacks are at an all-time high. UK businesses face increasing threats every day.
            Our comprehensive cyber security services keep you protected and compliant.
          </p>
        </div>

        {/* Threat pills */}
        <div className="cyber__threats">
          <p className="threats-label">Threats we protect you from:</p>
          <div className="threats-list">
            {threats.map(t => (
              <div key={t.label} className="threat-pill">
                <span>{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="cyber__grid">
          {cyberServices.map(cs => (
            <div key={cs.title} className="cyber-card">
              <div className="cyber-card__bullet"></div>
              <div>
                <h4 className="cyber-card__title">{cs.title}</h4>
                <p className="cyber-card__desc">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber__cta">
          <a href="#contact" className="btn-primary">Get a Security Assessment</a>
          <a href="#contact" className="btn-outline-white">View Security Packages</a>
        </div>
      </div>
    </section>
  )
}