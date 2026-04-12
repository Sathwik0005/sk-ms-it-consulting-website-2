import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const subSectors = [
  { icon: '🏥', label: 'GP Surgeries' },
  { icon: '🦷', label: 'Dental Practices' },
  { icon: '👁', label: 'Opticians' },
  { icon: '🏨', label: 'Private Hospitals' },
  { icon: '💊', label: 'Pharmacies' },
  { icon: '🧘', label: 'Allied Health Providers' },
  { icon: '🧬', label: 'Diagnostic Labs' },
  { icon: '🏠', label: 'Care Homes & Domiciliary Care' },
]

const challenges = [
  { icon: '🏥', title: 'Clinical System Integration', desc: 'Connecting EMIS, SystmOne, Medisoft, and other clinical systems with IT infrastructure — maintaining uptime that patient care depends on.' },
  { icon: '🔒', title: 'Patient Data & GDPR', desc: 'Special category health data is subject to the strictest GDPR requirements. Data breaches can trigger ICO enforcement and reputational damage.' },
  { icon: '📋', title: 'CQC & Regulatory Compliance', desc: 'Demonstrating to the CQC that your IT systems, data handling, and business continuity arrangements are fit for purpose.' },
  { icon: '⚡', title: 'System Availability', desc: 'Clinical systems cannot go down during patient appointments. IT resilience and rapid response are non-negotiable in healthcare settings.' },
  { icon: '🔐', title: 'N3/HSCN Connectivity', desc: 'Secure connection to NHS systems via HSCN (Health and Social Care Network) — required for NHS-integrated services and data sharing.' },
  { icon: '🦠', title: 'Cyber Threats Targeting Healthcare', desc: 'Healthcare is one of the most targeted sectors for ransomware and data theft. Patient data commands premium prices on criminal markets.' },
]

const services = [
  { icon: '🖥', title: 'Managed IT for Healthcare', desc: 'Proactive IT support with response times aligned to clinical needs — keeping your systems running throughout patient-facing hours.' },
  { icon: '🏥', title: 'Clinical System Support', desc: 'First and second-line support for EMIS, SystmOne, Vision, and other clinical systems — complementing your clinical system vendor support.' },
  { icon: '🔗', title: 'HSCN Connectivity', desc: 'Managed HSCN connections for GP practices, dental practices, and other NHS-integrated providers — reliably and securely.' },
  { icon: '🛡', title: 'Healthcare Cyber Security', desc: 'Data Security and Protection Toolkit (DSPT) compliance, Cyber Essentials, endpoint security, and email protection for clinical environments.' },
  { icon: '💾', title: 'Clinical Data Backup', desc: 'Secure, encrypted backup of clinical data with healthcare-appropriate retention periods and rapid recovery for business continuity.' },
  { icon: '📋', title: 'DSP Toolkit Support', desc: 'End-to-end support for completing and evidencing your NHS Data Security and Protection Toolkit submission — reducing the burden on your team.' },
]

const complianceItems = [
  { reg: 'DSPT', desc: 'NHS Data Security & Protection Toolkit' },
  { reg: 'GDPR / DPA 2018', desc: 'Special category health data obligations' },
  { reg: 'CQC', desc: 'Care Quality Commission IT requirements' },
  { reg: 'Cyber Essentials', desc: 'Required for HSCN access' },
  { reg: 'HSCN', desc: 'Health & Social Care Network connectivity' },
  { reg: 'ISO 27001', desc: 'Information security management' },
]

const steps = [
  { title: 'Healthcare IT Audit', desc: 'We assess your clinical and administrative IT systems, HSCN connectivity, data protection controls, and DSPT compliance status.' },
  { title: 'Compliance Gap Analysis', desc: 'We identify gaps against DSPT, CQC, and GDPR requirements — producing a clear, prioritised remediation plan.' },
  { title: 'Implementation', desc: 'Technical controls deployed around your clinical schedule — minimising disruption to patient appointments and clinical workflows.' },
  { title: 'Managed Support', desc: 'Ongoing managed IT support and DSPT annual review support — keeping you compliant and your systems running reliably year-round.' },
]

export default function Healthcare() {
  return (
    <PageLayout
      breadcrumb="Healthcare"
      tag="Sectors"
      title="IT Support & Solutions for Healthcare Providers"
      subtitle="Patient care depends on reliable, secure technology. We provide specialist IT support, clinical system expertise, and compliance-focused solutions to GP practices, dental surgeries, pharmacies, and private healthcare providers across the UK."
      heroStats={[
        { value: 'DSPT', label: 'Toolkit Specialists' },
        { value: 'HSCN', label: 'Connected Providers' },
        { value: 'CQC', label: 'Compliance Ready' },
      ]}
    >
      {/* Sub-sectors */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Who We Support</span>
            <h2 className="section-title">Across the Healthcare Sector</h2>
            <p className="section-subtitle">From single-site GP practices to multi-site private healthcare groups — we support healthcare providers of all sizes and specialisms.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
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
            <h2 className="section-title">Healthcare IT Is High Stakes</h2>
            <p className="section-subtitle">In healthcare, IT failure isn't just a business problem — it can affect patient safety. That's why healthcare IT demands specialist knowledge and absolute reliability.</p>
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
              <h2 className="section-title">IT Services for Clinical Environments</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Every solution we implement is designed with clinical workflows, patient data requirements, and regulatory compliance at its core.
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
                <div className="page-visual-box__icon">🏥</div>
                {/* Replace with: <img src="/images/healthcare.jpg" alt="Healthcare IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: GP practice / clinical IT setup / reception with computer</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Compliance Frameworks We Support</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {complianceItems.map(c => (
                    <div key={c.reg} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 14px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{c.reg}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', maxWidth: '60%' }}>{c.desc}</span>
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
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Clinical-First IT Delivery</h2>
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
              <div className="page-cta-banner__title">Reliable IT that supports your patient care</div>
              <div className="page-cta-banner__sub">Get a free healthcare IT review — we'll assess your clinical systems, DSPT compliance, and data security posture.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Healthcare IT Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}