import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const m365Apps = [
  { icon: '📧', title: 'Exchange Online', desc: 'Enterprise email with 50GB+ mailboxes, shared calendars, contacts, and anti-spam protection — hosted and managed by Microsoft.' },
  { icon: '💬', title: 'Microsoft Teams', desc: 'Chat, video calls, meetings, and file sharing in one platform. Replace your phone system and connect your entire organisation.' },
  { icon: '📁', title: 'SharePoint & OneDrive', desc: 'Cloud document storage, team sites, and intranet portals. Access your files from any device, anywhere in the world.' },
  { icon: '💻', title: 'Microsoft 365 Apps', desc: 'Always up-to-date Word, Excel, PowerPoint, and Outlook — on up to 5 devices per user, installed or in the browser.' },
  { icon: '🔒', title: 'Microsoft Defender', desc: 'Built-in threat protection, anti-phishing, safe links, and endpoint security included across Microsoft 365 Business Premium.' },
  { icon: '🤖', title: 'Microsoft Copilot', desc: 'AI-powered productivity tools built into Word, Excel, Teams, and Outlook — helping your team work smarter and faster.' },
]

const licences = [
  { name: 'Microsoft 365 Business Basic', price: 'From £5/user/mo', features: ['Teams & Exchange Online', 'SharePoint & OneDrive (1TB)', 'Web & mobile Office apps', 'Standard security'] },
  { name: 'Microsoft 365 Business Standard', price: 'From £10.30/user/mo', features: ['Everything in Basic', 'Desktop Office apps (5 devices)', 'Webinars & recordings', 'Business-class email'] },
  { name: 'Microsoft 365 Business Premium', price: 'From £18.60/user/mo', features: ['Everything in Standard', 'Microsoft Defender for Business', 'Intune device management', 'Azure AD Premium P1', 'Advanced compliance tools'] },
]

const steps = [
  { title: 'Licence Assessment', desc: 'We review your team size, roles, and requirements to recommend the right licence mix — avoiding overspend.' },
  { title: 'Tenant Setup & Configuration', desc: 'We configure your Microsoft 365 tenant to security best practice, including MFA, conditional access, and data loss prevention.' },
  { title: 'Migration', desc: 'Email, calendars, contacts, and files migrated from your current system with zero data loss and minimal disruption.' },
  { title: 'Training & Adoption', desc: 'User training sessions and adoption materials ensure your team gets full value from their Microsoft 365 investment.' },
]

export default function Microsoft365() {
  return (
    <PageLayout
      breadcrumb="Microsoft 365"
      tag="Solutions"
      title="Microsoft 365 Setup, Migration & Management"
      subtitle="Get the most from Microsoft 365. We handle licensing, setup, migration, security configuration, and ongoing management — so your team can collaborate effectively from day one."
      heroStats={[
        { value: 'M365', label: 'Microsoft Partner' },
        { value: '100%', label: 'Secure Configuration' },
        { value: 'Zero', label: 'Data Loss Migrations' },
      ]}
    >
      {/* Apps */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">The Full Microsoft 365 Suite, Configured for You</h2>
            <p className="section-subtitle">
              Microsoft 365 is far more than email. We unlock the full platform for your business — properly configured, secured, and adopted by your team.
            </p>
          </div>
          <div className="benefit-grid">
            {m365Apps.map(a => (
              <div key={a.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{a.icon}</div>
                <div className="benefit-card__title">{a.title}</div>
                <div className="benefit-card__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licence guide */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Licensing</span>
            <h2 className="section-title">Which Licence Is Right for Your Business?</h2>
            <p className="section-subtitle">
              We'll help you choose the right Microsoft 365 plan — avoiding overpaying for features you don't need or underpaying and missing critical security tools.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {licences.map((l, i) => (
              <div key={l.name} className="benefit-card" style={{ textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
                {i === 2 && (
                  <div style={{ position: 'absolute', top: 16, right: -28, background: 'var(--accent)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 36px', transform: 'rotate(45deg)', letterSpacing: '0.08em' }}>POPULAR</div>
                )}
                <div className="benefit-card__icon">📦</div>
                <div className="benefit-card__title">{l.name}</div>
                <div style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', marginBottom: 14 }}>{l.price}</div>
                <ul className="checklist">
                  {l.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Prices are indicative. Contact us for exact pricing based on your user count and requirements.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">From Old System to Microsoft 365 — Smoothly</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                Our structured onboarding process means your team is productive on Microsoft 365 from day one —
                with security locked down and data fully migrated.
              </p>
              <div className="process-steps">
                {steps.map((s, i) => (
                  <div key={s.title} className="process-step">
                    <div className="process-step__num">{i + 1}</div>
                    <div className="process-step__body">
                      <div className="process-step__title">{s.title}</div>
                      <div className="process-step__desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">💻</div>
                {/* Replace with: <img src="/images/m365.jpg" alt="Microsoft 365" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Teams meeting / Office apps on laptop / collaboration scene</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Ready to move to Microsoft 365?</div>
              <div className="page-cta-banner__sub">Get a free licence assessment and migration plan — we'll have you up and running faster than you think.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}