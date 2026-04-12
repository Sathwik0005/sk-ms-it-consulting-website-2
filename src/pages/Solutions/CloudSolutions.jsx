import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const features = [
  { icon: '☁', title: 'Public Cloud Migration', desc: 'Migrate workloads, applications, and data to the public cloud with a structured, low-risk migration plan tailored to your business.' },
  { icon: '🏢', title: 'Private Cloud Setup', desc: 'Deploy a private cloud environment for workloads that require greater control, compliance, or data sovereignty.' },
  { icon: '🔀', title: 'Hybrid Cloud Architecture', desc: "Combine on-premise infrastructure with public cloud for the best of both — flexibility where you need it, control where you don't." },
  { icon: '📊', title: 'Cloud Cost Management', desc: 'Eliminate wasted cloud spend with usage analysis, right-sizing recommendations, and reserved instance planning.' },
  { icon: '🔒', title: 'Cloud Security & Governance', desc: 'Policies, identity controls, and monitoring to keep your cloud environment secure, compliant, and auditable at all times.' },
  { icon: '⚡', title: 'Cloud Performance Optimisation', desc: 'Tune your cloud workloads for speed and reliability — ensuring your applications perform as expected at every scale.' },
]

const benefits = [
  { icon: '📈', title: 'Elastic Scalability', desc: 'Scale computing resources up or down instantly as your business demands change — no over-provisioning.' },
  { icon: '💰', title: 'CapEx to OpEx', desc: 'Replace large upfront hardware investments with predictable monthly cloud costs aligned to actual usage.' },
  { icon: '🌍', title: 'Work from Anywhere', desc: 'Cloud-hosted systems are accessible from any device, anywhere — enabling truly flexible and remote working.' },
  { icon: '🛡', title: 'Built-in Resilience', desc: 'Enterprise-grade redundancy, automated failover, and geo-replication protect your business from outages.' },
  { icon: '🔄', title: 'Always Up to Date', desc: 'Cloud platforms update automatically — your team always works with the latest features and security patches.' },
  { icon: '🧠', title: 'Access to Innovation', desc: 'AI, machine learning, advanced analytics, and automation tools are all available natively in the cloud.' },
]

const steps = [
  { title: 'Cloud Readiness Assessment', desc: 'We audit your current infrastructure, applications, and data to identify what should move to the cloud and when.' },
  { title: 'Migration Strategy', desc: 'We design a cloud architecture and migration plan with clear timelines, risk mitigation, and rollback options.' },
  { title: 'Migration & Deployment', desc: 'Our engineers execute the migration in phases, minimising downtime and testing thoroughly at each stage.' },
  { title: 'Optimise & Manage', desc: 'Post-migration, we monitor performance, manage costs, and continuously optimise your cloud environment.' },
]

export default function CloudSolutions() {
  return (
    <PageLayout
      breadcrumb="Cloud Solutions"
      tag="Solutions"
      title="Cloud Solutions for UK Businesses"
      subtitle="Move to the cloud with confidence. Our cloud experts design, migrate, and manage cloud environments that give your business the flexibility, resilience, and cost efficiency it needs to grow."
      heroStats={[
        { value: '40%', label: 'Avg. Infrastructure Cost Saving' },
        { value: '99.99%', label: 'Cloud Uptime SLA' },
        { value: '100+', label: 'Cloud Migrations Delivered' },
      ]}
    >
      {/* Features */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">End-to-End Cloud Services</h2>
            <p className="section-subtitle">
              Whether you're just starting your cloud journey or looking to optimise an existing environment,
              we have the expertise to guide you every step of the way.
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

      {/* Benefits */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Move to the Cloud?</span>
              <h2 className="section-title">The Business Case for Cloud</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Cloud adoption isn't just a technology decision — it's a business transformation that impacts
                cost, agility, and competitive advantage.
              </p>
              <ul className="checklist">
                {benefits.slice(0, 4).map(b => (
                  <li key={b.title}><strong>{b.title}</strong> — {b.desc}</li>
                ))}
              </ul>
            </div>
            <div className="benefit-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {benefits.map(b => (
                <div key={b.title} className="benefit-card">
                  <div className="benefit-card__icon">{b.icon}</div>
                  <div className="benefit-card__title">{b.title}</div>
                  <div className="benefit-card__desc">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">Our Cloud Migration Process</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                A proven four-phase approach that ensures your cloud migration is safe, structured, and delivers
                measurable results from day one.
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
                <div className="page-visual-box__icon">☁</div>
                {/* Replace with: <img src="/images/cloud-solutions.jpg" alt="Cloud Solutions" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Cloud architecture diagram / server room / team at screens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Ready to move your business to the cloud?</div>
              <div className="page-cta-banner__sub">Get a free cloud readiness assessment and migration roadmap from our certified cloud architects.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}