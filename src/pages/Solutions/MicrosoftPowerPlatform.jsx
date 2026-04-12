import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const tools = [
  {
    icon: '📱',
    title: 'Power Apps',
    tag: 'Build',
    desc: 'Create custom business applications without writing code. Replace paper forms, manual spreadsheets, and siloed processes with purpose-built apps that work on any device.',
    examples: ['Inspection & audit apps', 'HR onboarding tools', 'Job management apps', 'Approval workflows'],
  },
  {
    icon: '⚡',
    title: 'Power Automate',
    tag: 'Automate',
    desc: 'Automate repetitive tasks and business processes. Connect your apps, services, and data sources to eliminate manual work and reduce human error across your organisation.',
    examples: ['Invoice approval flows', 'Email notification systems', 'Data sync between systems', 'Scheduled reporting'],
  },
  {
    icon: '📊',
    title: 'Power BI',
    tag: 'Analyse',
    desc: 'Turn your business data into interactive dashboards and reports that anyone can understand. Connect to virtually any data source and make decisions based on real-time insight.',
    examples: ['Sales performance dashboards', 'Financial reporting', 'Operations KPI tracking', 'Customer analytics'],
  },
  {
    icon: '🌐',
    title: 'Power Pages',
    tag: 'Publish',
    desc: 'Build secure, data-driven external websites and self-service portals. Give customers, suppliers, and partners controlled access to your business data without complex development.',
    examples: ['Customer self-service portals', 'Supplier onboarding', 'Event registration sites', 'Knowledge bases'],
  },
  {
    icon: '🤖',
    title: 'Copilot Studio',
    tag: 'Automate with AI',
    desc: 'Build intelligent AI-powered chatbots and agents that handle enquiries, automate processes, and assist your team — without needing data scientists or AI specialists.',
    examples: ['IT helpdesk bots', 'HR FAQ chatbots', 'Customer service agents', 'Internal knowledge assistants'],
  },
]

const benefits = [
  { icon: '⏱', title: 'Save Hundreds of Hours', desc: 'Automating manual processes typically saves businesses 5–20 hours per week per department.' },
  { icon: '💰', title: 'No Custom Dev Costs', desc: 'Power Platform solutions cost a fraction of bespoke software development — built in days, not months.' },
  { icon: '🔗', title: '900+ Connectors', desc: 'Connect to Microsoft 365, Dynamics, SharePoint, Salesforce, SAP, and hundreds of other business systems.' },
  { icon: '🛡', title: 'Enterprise Security', desc: 'Built on Microsoft\'s enterprise security platform with data loss prevention, audit trails, and compliance tools.' },
]

const steps = [
  { title: 'Process Workshop', desc: 'We run a discovery session to identify your highest-value automation and app opportunities — quick wins and strategic projects.' },
  { title: 'Proof of Concept', desc: 'We build a rapid prototype so you can see and test the solution before committing to full development.' },
  { title: 'Build & Test', desc: 'Full development and rigorous user-acceptance testing with your team to ensure the solution works in the real world.' },
  { title: 'Deploy & Adopt', desc: 'We deploy the solution, train your team, and provide ongoing support as the platform evolves with your business.' },
]

export default function MicrosoftPowerPlatform() {
  return (
    <PageLayout
      breadcrumb="Microsoft Power Platform"
      tag="Solutions"
      title="Microsoft Power Platform Consulting"
      subtitle="Automate processes, build custom apps, and unlock the power of your data — without writing a line of code. Our Power Platform consultants help UK businesses work smarter using tools already included in their Microsoft 365 licences."
      heroStats={[
        { value: '10x', label: 'Faster Than Custom Dev' },
        { value: '900+', label: 'Data Connectors' },
        { value: 'Low', label: 'Code Required' },
      ]}
    >
      {/* Tools */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Platform</span>
            <h2 className="section-title">Five Tools. Endless Possibilities.</h2>
            <p className="section-subtitle">
              The Microsoft Power Platform is a suite of five low-code tools that work together to help you
              build apps, automate workflows, analyse data, and deploy AI agents.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {tools.map((t, i) => (
              <div key={t.title} className="benefit-card" style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 32, alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: '2rem' }}>{t.icon}</span>
                    <div>
                      <div className="benefit-card__title" style={{ marginBottom: 2 }}>{t.title}</div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, background: 'rgba(10,36,99,0.08)', color: 'var(--primary)', padding: '2px 10px', borderRadius: 30, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t.tag}</span>
                    </div>
                  </div>
                </div>
                <p className="benefit-card__desc" style={{ paddingTop: 4 }}>{t.desc}</p>
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Examples</p>
                  <ul className="checklist">
                    {t.examples.map(e => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Power Platform?</span>
              <h2 className="section-title">Maximum Value from Your Microsoft Investment</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                If you already have Microsoft 365, you likely have access to Power Platform tools already.
                We help you unlock that value and automate your way to greater efficiency.
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
                <div className="page-visual-box__icon">⚡</div>
                {/* Replace with: <img src="/images/power-platform.jpg" alt="Power Platform" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Power BI dashboard / Power Apps canvas / automation flow</span>
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
            <h2 className="section-title">From Workshop to Working Solution</h2>
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
              <div className="page-cta-banner__title">Ready to automate your business?</div>
              <div className="page-cta-banner__sub">Book a free Power Platform workshop — we'll identify your best automation opportunities and show you what's possible.</div>
            </div>
            <a href="#contact" className="btn-primary">Book a Free Workshop →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}