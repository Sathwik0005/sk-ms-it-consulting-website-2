import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const challenges = [
  { icon: '🔗', title: 'OT/IT Integration', desc: 'Safely connecting operational technology (OT) — PLCs, SCADA, MES — with your IT network without creating security vulnerabilities.' },
  { icon: '⏱', title: 'Zero Downtime Tolerance', desc: 'Production lines cannot stop. IT systems must be resilient, with rapid response and failover to avoid costly production halts.' },
  { icon: '🏭', title: 'Legacy Systems', desc: 'Many manufacturing environments run legacy systems that can\'t be patched or replaced — requiring specialist security and integration approaches.' },
  { icon: '🔒', title: 'Ransomware Targeting', desc: 'Manufacturing is the most targeted sector for ransomware attacks. Operational disruption is a powerful lever for attackers demanding payment.' },
  { icon: '📊', title: 'ERP & MES Integration', desc: 'Connecting your ERP (Business Central, SAP) with MES, production scheduling, and shop floor data systems for real-time operational insight.' },
  { icon: '🌍', title: 'Multi-Site Connectivity', desc: 'Reliable, secure connectivity between manufacturing sites, head offices, and remote workers — with consistent IT standards across all locations.' },
]

const services = [
  { icon: '🖥', title: 'Managed IT for Manufacturing', desc: '24/7 monitoring and rapid support for your IT infrastructure — with SLAs designed around production schedules and shift patterns.' },
  { icon: '🔗', title: 'OT/IT Network Segmentation', desc: 'Secure segmentation of your operational and IT networks using DMZs and firewalls — enabling data flow without exposing production systems.' },
  { icon: '🛡', title: 'Industrial Cyber Security', desc: 'Specialist cyber security for manufacturing environments — including OT-aware monitoring, vulnerability assessment, and incident response.' },
  { icon: '📊', title: 'Dynamics 365 Business Central', desc: 'Microsoft ERP implementation for manufacturers — production orders, inventory management, purchasing, and financial control in one system.' },
  { icon: '☁', title: 'Cloud & Hybrid Infrastructure', desc: 'Cloud solutions that complement your on-premise manufacturing systems — with hybrid connectivity that keeps production data local where needed.' },
  { icon: '💾', title: 'Disaster Recovery for Production', desc: 'Business continuity and disaster recovery solutions designed for manufacturing — with RTO targets that align to your production requirements.' },
]

const stats = [
  { value: '#1', label: 'Most targeted sector for ransomware attacks' },
  { value: '£847K', label: 'Average ransomware recovery cost for manufacturers' },
  { value: '4hrs', label: 'Average production downtime cost per hour for UK SME manufacturers' },
  { value: '60%', label: 'Of manufacturers have suffered an OT/IT security incident' },
]

const steps = [
  { title: 'Manufacturing IT Assessment', desc: 'We audit your IT and OT environments, identify integration points, security gaps, and single points of failure.' },
  { title: 'Risk-Prioritised Roadmap', desc: 'A practical improvement plan prioritised by production risk — addressing the highest-impact vulnerabilities first.' },
  { title: 'Phased Implementation', desc: 'Changes implemented around production schedules — minimising disruption to operations while improving resilience.' },
  { title: 'Managed Support', desc: 'Ongoing managed IT with shift-aware SLAs, 24/7 monitoring, and a dedicated account manager who understands your environment.' },
]

export default function Manufacturing() {
  return (
    <PageLayout
      breadcrumb="Manufacturing"
      tag="Sectors"
      title="IT Support & Solutions for Manufacturing"
      subtitle="Manufacturing businesses depend on technology that works. We provide specialist IT support, industrial cyber security, and ERP solutions that keep your production lines running and your data protected — without disrupting operations."
      heroStats={[
        { value: '24/7', label: 'Production-Aware Monitoring' },
        { value: 'OT/IT', label: 'Integration Specialists' },
        { value: '<2hr', label: 'Critical Response SLA' },
      ]}
    >
      {/* Stats */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Manufacturing Threat</span>
            <h2 className="section-title">Manufacturing Is Under Attack</h2>
            <p className="section-subtitle">Attackers target manufacturers because operational disruption creates enormous pressure to pay. The cost of getting it wrong is devastating.</p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map(s => (
              <div key={s.label} className="benefit-card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 8 }}>{s.value}</div>
                <div className="benefit-card__desc">{s.label}</div>
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
            <h2 className="section-title">Manufacturing IT Is Different</h2>
            <p className="section-subtitle">Standard IT approaches don't work in manufacturing environments. You need a partner who understands OT, production systems, and the unique constraints of the factory floor.</p>
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

      {/* Services */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">What We Deliver</span>
              <h2 className="section-title">IT Built Around Your Production Environment</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                From shop floor to head office — we deliver IT and OT solutions that enhance production efficiency, strengthen security, and support business growth.
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
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🏭</div>
                {/* Replace with: <img src="/images/manufacturing.jpg" alt="Manufacturing IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Factory floor / control room / engineer at terminal</span>
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
            <h2 className="section-title">Production-First IT Delivery</h2>
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
              <div className="page-cta-banner__title">Keep your production lines protected and connected</div>
              <div className="page-cta-banner__sub">Get a free manufacturing IT and OT security assessment — we'll identify your risks and build a plan around your production schedule.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}