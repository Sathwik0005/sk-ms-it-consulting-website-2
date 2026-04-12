import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const services = [
  { icon: '💾', title: 'On-Premise Backup', desc: 'Local backup solutions using enterprise-grade NAS, tape, or backup appliances — providing fast local restores when you need them most.' },
  { icon: '☁', title: 'Cloud Backup', desc: 'Automated off-site backup to secure UK cloud data centres. Your data is encrypted in transit and at rest, always.' },
  { icon: '🔀', title: 'Hybrid Backup (3-2-1)', desc: 'The gold standard 3-2-1 backup strategy: 3 copies of data, on 2 different media, with 1 stored off-site. Fully managed.' },
  { icon: '📧', title: 'Microsoft 365 Backup', desc: "Microsoft doesn't back up your 365 data — we do. Email, Teams, SharePoint, and OneDrive protected against deletion and ransomware." },
  { icon: '⚡', title: 'Disaster Recovery Planning', desc: "A tested, documented DR plan so your team knows exactly what to do when the worst happens — and how fast you'll recover." },
  { icon: '🔄', title: 'Business Continuity', desc: 'Failover solutions that keep your business running even during a major incident — minimising downtime to minutes, not days.' },
]

const rtoRpo = [
  { metric: 'RTO', full: 'Recovery Time Objective', desc: 'How quickly your systems are back online after an incident. We help you define and achieve your target RTO.', value: 'Minutes to hours' },
  { metric: 'RPO', full: 'Recovery Point Objective', desc: 'How much data you can afford to lose — i.e. how often backups run. We configure backups to meet your RPO target.', value: 'Near-zero possible' },
]

const threats = [
  { icon: '🦠', title: 'Ransomware', desc: 'Immutable backups that ransomware cannot encrypt or delete — restoring your business to before the attack.' },
  { icon: '🔥', title: 'Hardware Failure', desc: 'Server or storage failure? We restore from backup to new hardware or cloud — fast.' },
  { icon: '🌊', title: 'Natural Disaster', desc: "Off-site and cloud backups ensure a flooded or destroyed office doesn't mean lost data." },
  { icon: '👤', title: 'Human Error', desc: 'Accidental file deletion or overwrite recovered quickly from granular backup — down to individual files or emails.' },
  { icon: '⚡', title: 'Power Outage', desc: 'Unplanned outages and corruption events recovered cleanly from the last good backup point.' },
  { icon: '🔓', title: 'Cyber Attack', desc: 'Even if attackers penetrate your systems, clean backups mean you can restore to an uncompromised state.' },
]

const steps = [
  { title: 'Backup Assessment', desc: 'We review your current backup posture, identify gaps, and understand your RTO/RPO requirements.' },
  { title: 'Solution Design', desc: 'We design a backup architecture covering all your data sources — servers, endpoints, cloud, and SaaS.' },
  { title: 'Deployment & Testing', desc: 'We deploy and configure the solution, then perform restore tests to prove it actually works before you need it.' },
  { title: 'Monitor & Report', desc: 'Daily monitoring of backup jobs, automated alerting for failures, and monthly backup health reports.' },
]

export default function BackupDisasterRecovery() {
  return (
    <PageLayout
      breadcrumb="Backup & Disaster Recovery"
      tag="Solutions"
      title="Backup & Disaster Recovery Services"
      subtitle="Don't find out your backups don't work when you need them most. Our managed backup and disaster recovery services protect your business-critical data and ensure rapid recovery from any incident."
      heroStats={[
        { value: '100%', label: 'Backup Success Rate' },
        { value: '<1hr', label: 'Target Recovery Time' },
        { value: '0',    label: 'Data Loss Incidents' },
      ]}
    >
      {/* Services */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Complete Data Protection Coverage</h2>
            <p className="section-subtitle">
              We protect every layer of your IT environment — on-premise servers, cloud workloads, endpoints, and SaaS applications.
            </p>
          </div>
          <div className="benefit-grid">
            {services.map(s => (
              <div key={s.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{s.icon}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RTO/RPO */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Understanding Recovery</span>
              <h2 className="section-title">RTO & RPO — What They Mean for Your Business</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Two critical metrics define how well your backup strategy protects your business. We help you set and achieve both.
              </p>
              <div className="feature-list">
                {rtoRpo.map(r => (
                  <div key={r.metric} className="feature-list__item">
                    <div className="feature-list__icon" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--primary)', width: 54 }}>{r.metric}</div>
                    <div className="feature-list__text">
                      <strong>{r.full} — {r.value}</strong>
                      <span>{r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🛡</div>
                {/* Replace with: <img src="/images/backup.jpg" alt="Backup & Disaster Recovery" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Data protection graphic / backup dashboard / server room</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What We Protect Against</span>
            <h2 className="section-title">Every Threat. Every Scenario. Covered.</h2>
          </div>
          <div className="benefit-grid">
            {threats.map(t => (
              <div key={t.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{t.icon}</div>
                <div className="benefit-card__title">{t.title}</div>
                <div className="benefit-card__desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">From Assessment to Protected in Days</h2>
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
              <div className="page-cta-banner__title">Are your backups actually working?</div>
              <div className="page-cta-banner__sub">Get a free backup health check — we'll review your current setup and identify any gaps in your data protection.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Backup Audit →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}