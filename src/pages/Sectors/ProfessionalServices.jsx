import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const subSectors = [
  { icon: '⚖️', label: 'Law Firms' },
  { icon: '📊', label: 'Accountancy Practices' },
  { icon: '🏗', label: 'Architecture & Engineering' },
  { icon: '💼', label: 'Management Consultancies' },
  { icon: '📢', label: 'Marketing & PR Agencies' },
  { icon: '🏠', label: 'Estate Agencies' },
  { icon: '💰', label: 'Financial Advisors (IFAs)' },
  { icon: '🧠', label: 'Recruitment Firms' },
]

const challenges = [
  { icon: '🔒', title: 'Client Data Confidentiality', desc: 'Professional services firms hold highly sensitive client data. A breach can be reputationally catastrophic — and trigger regulatory action.' },
  { icon: '📋', title: 'Regulatory Compliance', desc: 'SRA, FCA, ICAEW, and ICO requirements demand robust data handling, access controls, and breach reporting — with evidence to back it up.' },
  { icon: '🌍', title: 'Remote & Hybrid Working', desc: 'Fee earners, partners, and support staff working from offices, home, and client sites — all needing secure, seamless access to systems.' },
  { icon: '⚡', title: 'Productivity & Billable Time', desc: 'IT downtime directly costs billable time. Your technology must be fast, reliable, and supported quickly when issues arise.' },
  { icon: '📱', title: 'Mobile & Flexible Access', desc: 'Accessing case management, practice management, and client files securely from any device, anywhere — without compromising security.' },
  { icon: '🤝', title: 'Client Collaboration', desc: 'Secure document sharing, e-signature, and client portals that deliver a professional experience without creating security risks.' },
]

const services = [
  { icon: '🖥', title: 'Managed IT for Professional Services', desc: 'Responsive, expert IT support with SLAs designed around professional services — fast resolution that protects your billable time.' },
  { icon: '🔒', title: 'Data Security & Compliance', desc: 'Technical controls, policies, and evidence to meet SRA, FCA, GDPR, and ISO 27001 requirements — with audit-ready documentation.' },
  { icon: '☁', title: 'Microsoft 365 & Teams', desc: 'Modern workplace solutions — email, document management, video conferencing, and collaboration — configured securely for professional use.' },
  { icon: '🛡', title: 'Cyber Security', desc: 'Endpoint protection, email security, MFA, and cyber awareness training — protecting your firm and your clients from growing cyber threats.' },
  { icon: '🔗', title: 'Practice Management Integration', desc: 'Connecting your practice management software (Clio, LEAP, IRIS, Xero, Sage) with the rest of your IT environment.' },
  { icon: '📱', title: 'Mobile Device Management', desc: 'Secure access to firm systems from smartphones and tablets — with remote wipe, encryption, and app management.' },
]

const complianceItems = [
  { reg: 'SRA', desc: 'Solicitors Regulation Authority data security requirements' },
  { reg: 'FCA', desc: 'Financial Conduct Authority IT and data resilience rules' },
  { reg: 'ICAEW', desc: 'Institute of Chartered Accountants IT governance guidance' },
  { reg: 'GDPR / DPA 2018', desc: 'UK data protection law and ICO enforcement' },
  { reg: 'Cyber Essentials', desc: 'NCSC-backed baseline security certification' },
  { reg: 'ISO 27001', desc: 'International information security management standard' },
]

const steps = [
  { title: 'Practice IT Review', desc: 'We audit your current IT environment against your regulatory obligations and identify gaps in security, compliance, and resilience.' },
  { title: 'Compliance Roadmap', desc: 'A prioritised action plan addressing your most critical compliance and security requirements — mapped to your regulatory deadlines.' },
  { title: 'Implementation', desc: 'Technical controls, policies, and configurations implemented by engineers who understand professional services requirements.' },
  { title: 'Managed Support', desc: 'Ongoing managed IT with rapid response SLAs — keeping your team productive and your firm protected every working day.' },
]

export default function ProfessionalServices() {
  return (
    <PageLayout
      breadcrumb="Professional Services"
      tag="Sectors"
      title="IT Support for Professional Services Firms"
      subtitle="Professional services firms depend on confidentiality, reliability, and compliance. We provide specialist IT support, security, and compliance solutions to law firms, accountants, consultancies, and agencies — protecting your clients and your reputation."
      heroStats={[
        { value: 'SRA', label: '& FCA Aware' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: 'GDPR', label: 'Compliant Solutions' },
      ]}
    >
      {/* Sub-sectors */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Who We Work With</span>
            <h2 className="section-title">Specialists Across Professional Services</h2>
            <p className="section-subtitle">We work with a wide range of professional services firms — each with their own regulatory environment and IT requirements.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
            {subSectors.map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 20px', fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)' }}>
                <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Sector Challenges</span>
            <h2 className="section-title">IT Challenges Unique to Professional Services</h2>
            <p className="section-subtitle">Your clients trust you with sensitive information. Your regulators hold you to high standards. Your IT must support both — without slowing your team down.</p>
          </div>
          <div className="benefit-grid">
            {challenges.map(c => (
              <div key={c.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{c.icon}</div>
                <div className="benefit-card__title">{c.title}</div>
                <div className="benefit-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Compliance */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">What We Deliver</span>
              <h2 className="section-title">IT Services for Professional Firms</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Every service we deliver is designed with professional services compliance and confidentiality requirements in mind — from day one.
              </p>
              <div className="feature-list">
                {services.map(s => (
                  <div key={s.title} className="feature-list__item">
                    <div className="feature-list__icon">{s.icon}</div>
                    <div className="feature-list__text">
                      <strong>{s.title}</strong>
                      <span>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="page-visual-box" style={{ flex: 1 }}>
                <div className="page-visual-box__icon">💼</div>
                {/* Replace with: <img src="/images/professional-services.jpg" alt="Professional Services IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Office meeting / lawyer at desk / accountant with laptop</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Regulations We Help You Meet</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {complianceItems.map(c => (
                    <div key={c.reg} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 14px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{c.reg}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', maxWidth: '55%' }}>{c.desc}</span>
                    </div>
                  ))}
                </div>
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
            <h2 className="section-title">Compliant IT from Day One</h2>
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
              <div className="page-cta-banner__title">Protect your firm, your clients, and your reputation</div>
              <div className="page-cta-banner__sub">Get a free professional services IT review — we'll identify compliance gaps and security risks specific to your firm.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Practice IT Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}