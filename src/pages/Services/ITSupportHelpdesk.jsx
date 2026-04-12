import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const supportTiers = [
  { icon: '💬', title: 'Remote Helpdesk', desc: 'First-line support via phone, email, and live chat. Most issues resolved remotely within 15–60 minutes without anyone needing to visit.' },
  { icon: '🏢', title: 'On-Site Support', desc: 'When hands-on help is needed, our engineers come to you. We cover businesses across England and Wales with fast on-site dispatch.' },
  { icon: '🌙', title: '24/7 Out-of-Hours', desc: "Critical system failures don't respect office hours. Our out-of-hours service ensures you're never left stranded in a crisis." },
  { icon: '📱', title: 'Mobile Device Support', desc: 'Supporting laptops, tablets, smartphones, and remote workers — wherever your team is, we keep them connected and productive.' },
  { icon: '🖨', title: 'Peripheral & Hardware', desc: 'Printers, scanners, monitors, and network hardware — we support the full range of devices your business relies on daily.' },
  { icon: '🔗', title: 'Third-Party Liaison', desc: "We'll deal with your ISP, software vendors, and hardware suppliers on your behalf so you don't have to navigate technical conversations." },
]

const slaItems = [
  { level: 'P1 — Critical', time: '15 minutes', desc: 'Complete business outage or major security incident' },
  { level: 'P2 — High',     time: '1 hour',    desc: 'Key system or service unavailable, significant impact' },
  { level: 'P3 — Medium',   time: '4 hours',   desc: 'Degraded service, workaround available' },
  { level: 'P4 — Low',      time: 'Next day',  desc: 'Minor issue or change request' },
]

const steps = [
  { title: 'Log a Ticket', desc: 'Call our helpdesk, email us, or submit via our portal. A ticket is created instantly and an engineer assigned.' },
  { title: 'Triage & Diagnosis', desc: 'Our team assesses the issue, determines priority, and begins diagnosis — remotely in most cases.' },
  { title: 'Resolution', desc: 'We fix the issue and verify the fix with you before closing the ticket. You get a resolution note for your records.' },
  { title: 'Follow-Up', desc: 'For recurring issues we conduct root cause analysis and recommend changes to prevent recurrence.' },
]

export default function ITSupportHelpdesk() {
  return (
    <PageLayout
      breadcrumb="IT Support & Helpdesk"
      tag="Services"
      title="IT Support & Helpdesk for UK Businesses"
      subtitle="Fast, friendly IT support when you need it most. Our UK-based helpdesk resolves most issues remotely within the hour, with on-site engineers available across England and Wales."
      heroStats={[
        { value: '<15min', label: 'P1 Response Time' },
        { value: '93%',    label: 'First-Call Resolution' },
        { value: '24/7',   label: 'Support Available' },
      ]}
    >
      {/* Support Types */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Support Services</span>
            <h2 className="section-title">Comprehensive IT Support, Every Channel</h2>
            <p className="section-subtitle">
              Whether you need instant remote help or an engineer on-site, we've got every scenario covered.
            </p>
          </div>
          <div className="benefit-grid">
            {supportTiers.map(t => (
              <div key={t.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{t.icon}</div>
                <div className="benefit-card__title">{t.title}</div>
                <div className="benefit-card__desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Response Times</span>
              <h2 className="section-title">Clear SLAs You Can Hold Us To</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                We don't hide behind vague promises. Our Service Level Agreements are contractually
                guaranteed and reported on monthly.
              </p>
              <div className="feature-list">
                {slaItems.map(s => (
                  <div key={s.level} className="feature-list__item">
                    <div className="feature-list__icon" style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', width: 54 }}>
                      {s.time}
                    </div>
                    <div className="feature-list__text">
                      <strong>{s.level}</strong>
                      <span>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">📞</div>
                {/* Replace with: <img src="/images/helpdesk.jpg" alt="IT Helpdesk" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Helpdesk team / support engineer / ticket dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a ticket works */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">From Issue to Resolution</h2>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {steps.map((s, i) => (
              <div key={s.title} className="benefit-card">
                <div className="benefit-card__icon" style={{ fontSize: '1.4rem' }}>0{i + 1}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Need IT support right now?</div>
              <div className="page-cta-banner__sub">Contact us today to discuss a support contract or get emergency assistance.</div>
            </div>
            <a href="#contact" className="btn-primary">Talk to Our Helpdesk →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}