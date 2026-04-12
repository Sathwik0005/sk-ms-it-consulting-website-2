import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const solutions = [
  { icon: '📊', title: "Dynamics 365 Business Central', desc: 'Microsoft's all-in-one ERP for SMEs. Finance, inventory, purchasing, sales, and project management in a single connected system."},
  { icon: '⚡', title: 'Power Automate', desc: 'Automate repetitive tasks and workflows — from approval processes to data entry — saving your team hours every week.' },
  { icon: '📱', title: 'Power Apps', desc: 'Build custom business applications without code. Replace spreadsheets and paper forms with purpose-built digital tools.' },
  { icon: '📈', title: 'Power BI', desc: 'Transform your business data into interactive dashboards and reports. Make decisions based on real-time data, not gut feel.' },
  { icon: '🌐', title: 'Power Pages', desc: 'Create secure, data-driven external websites and portals — customer self-service, supplier portals, and more.' },
  { icon: '🤖', title: 'Copilot Studio', desc: 'Build AI-powered chatbots and agents for customer service, internal HR queries, IT support, and business process automation.' },
]

const erpBenefits = [
  { icon: '🔗', title: 'Single Source of Truth', desc: 'One system for finance, operations, and sales eliminates data silos and manual reconciliation between spreadsheets.' },
  { icon: '📋', title: 'Real-Time Visibility', desc: 'See your business performance in real time — stock levels, cash flow, project profitability, and team utilisation.' },
  { icon: '⚙', title: 'Process Automation', desc: 'Automate purchase orders, invoicing, stock replenishment, and approval workflows to reduce manual effort.' },
  { icon: '📦', title: 'Inventory Management', desc: 'Track stock across multiple locations, manage purchase orders, and forecast demand with built-in intelligence.' },
]

const sectors = [
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🚚', label: 'Distribution & Wholesale' },
  { icon: '🛍', label: 'Retail' },
  { icon: '⚖️', label: 'Professional Services' },
  { icon: '🏗', label: 'Construction' },
  { icon: '🌱', label: 'Non-Profit' },
]

const steps = [
  { title: 'Business Process Review', desc: 'We map your current processes, understand pain points, and define what a successful system looks like for your organisation.' },
  { title: 'Solution Design', desc: 'We design and configure the solution to match your processes — including customisations, integrations, and data migration.' },
  { title: 'Implementation & Testing', desc: "Phased deployment with thorough testing at every stage. We don't go live until you're confident everything works as expected." },
  { title: 'Training & Hypercare', desc: 'Role-based training for all users and an intensive hypercare period post-go-live to ensure smooth adoption.' },
]

export default function BusinessAppsERP() {
  return (
    <PageLayout
      breadcrumb="Business Apps & ERP"
      tag="Solutions"
      title="Business Apps & ERP Solutions"
      subtitle="Stop managing your business in spreadsheets. Our Microsoft-certified consultants implement Dynamics 365 Business Central and Power Platform solutions that streamline operations and deliver real-time business intelligence."
      heroStats={[
        { value: 'MS', label: 'Certified Partner' },
        { value: '50+', label: 'ERP Implementations' },
        { value: '30%', label: 'Avg. Process Efficiency Gain' },
      ]}
    >
      {/* Solutions */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Solutions</span>
            <h2 className="section-title">The Full Microsoft Business Application Stack</h2>
            <p className="section-subtitle">
              We implement, configure, and support the complete Microsoft business application platform —
              from ERP to AI-powered automation.
            </p>
          </div>
          <div className="benefit-grid">
            {solutions.map(s => (
              <div key={s.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{s.icon}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Benefits + Sectors */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Business Central?</span>
              <h2 className="section-title">Replace Disconnected Systems with One Powerful ERP</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Dynamics 365 Business Central connects every part of your business — giving leadership real-time insight and giving your team the tools to work more efficiently.
              </p>
              <div className="feature-list">
                {erpBenefits.map(b => (
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
                <div className="page-visual-box__icon">📊</div>
                {/* Replace with: <img src="/images/erp.jpg" alt="Business Apps ERP" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Business Central dashboard / Power BI report screenshot</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Sectors We Serve</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {sectors.map(s => (
                    <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '7px 14px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                      {s.icon} {s.label}
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
            <span className="section-tag">Implementation Process</span>
            <h2 className="section-title">A Proven Path to Go-Live</h2>
            <p className="section-subtitle">
              Our implementation methodology is tried, tested, and designed to minimise risk and maximise adoption across your organisation.
            </p>
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
              <div className="page-cta-banner__title">Ready to transform how your business operates?</div>
              <div className="page-cta-banner__sub">Book a free discovery call to discuss your business processes and see how Business Central could work for you.</div>
            </div>
            <a href="#contact" className="btn-primary">Book a Discovery Call →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}