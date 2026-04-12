import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const features = [
  { icon: '⚙', title: 'Expert Configuration', desc: 'Firewall rules, zones, and policies configured by certified network security engineers — not default settings that leave gaps.' },
  { icon: '👁', title: '24/7 Monitoring & Alerting', desc: 'Continuous monitoring of firewall logs and traffic patterns. Immediate alerting on anomalous activity and potential intrusion attempts.' },
  { icon: '🔄', title: 'Firmware & Patch Management', desc: 'Regular firmware updates and security patches applied to your firewall devices — keeping you protected against known vulnerabilities.' },
  { icon: '🌐', title: 'VPN & Remote Access Management', desc: 'Secure site-to-site VPN and remote access VPN configuration and management — connecting your team securely wherever they work.' },
  { icon: '📊', title: 'Traffic Visibility & Reporting', desc: 'Detailed reports on network traffic, application usage, blocked threats, and policy violations — delivered monthly.' },
  { icon: '🔒', title: 'Intrusion Prevention (IPS)', desc: 'Next-generation firewall with integrated IPS that detects and blocks network-based attacks, exploits, and malicious traffic in real time.' },
  { icon: '🌍', title: 'Web Filtering & Application Control', desc: 'Control which websites and applications your team can access — blocking malicious sites, inappropriate content, and high-risk applications.' },
  { icon: '📋', title: 'Compliance Reporting', desc: 'Firewall logs and audit trails retained and reported on for compliance with GDPR, Cyber Essentials, PCI DSS, and other frameworks.' },
]

const firewallVendors = ['Fortinet FortiGate', 'Cisco Meraki', 'Sophos XGS', 'Palo Alto Networks', 'WatchGuard', 'Barracuda']

const benefits = [
  { icon: '🛡', title: 'Defence at the Perimeter', desc: 'Stop threats at your network boundary before they can reach your systems, users, or data.' },
  { icon: '🔍', title: 'Full Network Visibility', desc: 'See exactly what\'s traversing your network — by user, application, and destination — at all times.' },
  { icon: '⚡', title: 'Rapid Incident Response', desc: 'When a threat is detected, our team responds immediately — isolating, investigating, and remediating.' },
  { icon: '📈', title: 'Scalable as You Grow', desc: 'We right-size your firewall solution today and scale it as your team, sites, and cloud footprint grows.' },
]

const steps = [
  { title: 'Network Assessment', desc: 'We review your current network architecture, firewall configuration, and identify gaps in your perimeter security.' },
  { title: 'Firewall Design', desc: 'We design a firewall solution appropriate for your network size, complexity, and risk requirements.' },
  { title: 'Deployment & Configuration', desc: 'Firewall hardware or virtual appliances deployed and fully configured — with zero-downtime cutover planning.' },
  { title: 'Ongoing Management', desc: '24/7 monitoring, rule optimisation, firmware updates, and monthly performance and security reports.' },
]

export default function ManagedFirewall() {
  return (
    <PageLayout
      breadcrumb="Managed Firewall"
      tag="Cyber Security"
      title="Managed Firewall Services"
      subtitle="Your firewall is your first line of defence. Our managed firewall service ensures it's properly configured, continuously monitored, and always up to date — keeping threats out of your network around the clock."
      heroStats={[
        { value: '24/7', label: 'Firewall Monitoring' },
        { value: '100%', label: 'Managed & Maintained' },
        { value: 'NGFW', label: 'Next-Gen Protection' },
      ]}
    >
      {/* Features */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">Fully Managed Network Security</h2>
            <p className="section-subtitle">
              Our managed firewall service covers everything — from initial configuration to 24/7 monitoring and ongoing management.
            </p>
          </div>
          <div className="benefit-grid">
            {features.map(f => (
              <div key={f.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{f.icon}</div>
                <div className="benefit-card__title">{f.title}</div>
                <div className="benefit-card__desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Vendors */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Managed Firewall?</span>
              <h2 className="section-title">A Firewall Is Only as Good as Its Management</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Most businesses have a firewall — but few have it configured correctly, monitored continuously, or kept up to date. That's exactly the gap attackers exploit.
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="page-visual-box" style={{ flex: 1 }}>
                <div className="page-visual-box__icon">🔥</div>
                {/* Replace with: <img src="/images/managed-firewall.jpg" alt="Managed Firewall" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Network diagram / firewall appliance / monitoring dashboard</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Firewall Platforms We Support</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {firewallVendors.map(v => (
                    <span key={v} style={{ background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 14px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">From Assessment to Managed Protection</h2>
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

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Is your firewall protecting you — or just ticking a box?</div>
              <div className="page-cta-banner__sub">Get a free firewall configuration review and find out if your network perimeter is really secure.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Firewall Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}