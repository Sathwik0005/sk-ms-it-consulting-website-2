import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const capabilities = [
  { icon: '🔍', title: 'Endpoint Detection & Response (EDR)', desc: 'Advanced threat detection that goes beyond signature-based antivirus — identifying and stopping sophisticated attacks in real time using behavioural analysis.' },
  { icon: '🛡', title: 'Next-Gen Antivirus (NGAV)', desc: 'AI-powered antivirus that detects and blocks malware, ransomware, and zero-day threats that traditional antivirus solutions miss.' },
  { icon: '📱', title: 'Mobile Device Management (MDM)', desc: 'Manage and secure smartphones, tablets, and laptops used by your team — enforce encryption, remote wipe, and app policies from a single console.' },
  { icon: '🔒', title: 'Device Encryption', desc: 'BitLocker and FileVault encryption enforced across all managed endpoints — ensuring data on lost or stolen devices cannot be accessed.' },
  { icon: '🔄', title: 'Patch Management', desc: 'Automated detection and deployment of OS and third-party software patches across all endpoints — closing vulnerabilities before attackers exploit them.' },
  { icon: '🌐', title: 'Web Filtering & DNS Security', desc: 'Block malicious websites, phishing pages, and inappropriate content at the DNS level — protecting users on and off the corporate network.' },
  { icon: '📊', title: 'Centralised Management Console', desc: 'Single-pane-of-glass visibility across every managed device — health status, threat alerts, patch compliance, and policy enforcement in one place.' },
  { icon: '🚨', title: '24/7 Threat Alerting', desc: 'Automated alerts for critical security events with our team responding to high-severity threats around the clock, including out of hours.' },
]

const devices = [
  { icon: '💻', label: 'Windows Laptops & Desktops' },
  { icon: '🍎', label: 'Apple Mac Devices' },
  { icon: '📱', label: 'iOS & Android Mobile' },
  { icon: '🖥', label: 'Windows Servers' },
  { icon: '🐧', label: 'Linux Systems' },
  { icon: '🏢', label: 'Virtual Machines' },
]

const benefits = [
  { icon: '🎯', title: 'Prevent Ransomware', desc: 'EDR solutions detect ransomware behaviour in its early stages and terminate the process before files are encrypted.' },
  { icon: '🔍', title: 'Full Threat Visibility', desc: 'See exactly what\'s happening on every device in your organisation — threats, vulnerabilities, and compliance status.' },
  { icon: '⚡', title: 'Automated Response', desc: 'Threats are contained automatically in seconds — isolating affected devices before they can spread to the rest of your network.' },
  { icon: '📋', title: 'Compliance Evidence', desc: 'Detailed audit logs and compliance reporting for Cyber Essentials, ISO 27001, GDPR, and other frameworks.' },
]

const steps = [
  { title: 'Device Inventory', desc: 'We discover every device in your environment — managed, unmanaged, and shadow IT — giving you complete visibility from day one.' },
  { title: 'Agent Deployment', desc: 'Lightweight security agents deployed silently to all managed endpoints with minimal disruption to end users.' },
  { title: 'Policy Configuration', desc: 'Security policies configured to match your risk appetite and business requirements — protection without unnecessary friction.' },
  { title: 'Monitor & Manage', desc: 'Ongoing monitoring, threat response, patch management, and monthly endpoint health reports delivered to you.' },
]

export default function EndpointSecurity() {
  return (
    <PageLayout
      breadcrumb="Endpoint Security"
      tag="Cyber Security"
      title="Endpoint Security & Management"
      subtitle="Every laptop, desktop, phone, and server is a potential entry point for attackers. Our managed endpoint security solution protects every device in your organisation with next-generation detection, automated response, and 24/7 monitoring."
      heroStats={[
        { value: '100%', label: 'Device Visibility' },
        { value: '<1s',  label: 'Threat Containment' },
        { value: '24/7', label: 'Monitoring & Alerting' },
      ]}
    >
      {/* Capabilities */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Complete Endpoint Protection Stack</h2>
            <p className="section-subtitle">
              We layer multiple security technologies to ensure comprehensive protection — from antivirus to EDR, patch management to encryption.
            </p>
          </div>
          <div className="benefit-grid">
            {capabilities.map(c => (
              <div key={c.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{c.icon}</div>
                <div className="benefit-card__title">{c.title}</div>
                <div className="benefit-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices + Benefits */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why It Matters</span>
              <h2 className="section-title">Every Device is a Target</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Attackers don't care whether it's a company laptop or a personal phone accessing your systems.
                We protect every endpoint, regardless of platform or location.
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
                <div className="page-visual-box__icon">🖥</div>
                {/* Replace with: <img src="/images/endpoint-security.jpg" alt="Endpoint Security" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Security dashboard / protected devices / EDR console</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Platforms We Protect</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {devices.map(d => (
                    <span key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '7px 14px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                      {d.icon} {d.label}
                    </span>
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
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">Fully Protected in Days, Not Weeks</h2>
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
              <div className="page-cta-banner__title">Are your endpoints properly protected?</div>
              <div className="page-cta-banner__sub">Get a free endpoint security review — we'll identify gaps in your current protection and show you how to close them.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}