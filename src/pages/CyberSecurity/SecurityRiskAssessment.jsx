import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const assessmentAreas = [
  { icon: '🏗', title: 'Infrastructure & Network', desc: 'Review of your network architecture, firewall configuration, segmentation, and exposure of services to the internet.' },
  { icon: '💻', title: 'Endpoint Security', desc: 'Assessment of device security posture — patch levels, antivirus coverage, encryption, and endpoint management controls.' },
  { icon: '📧', title: 'Email & Communication', desc: 'Analysis of email authentication records, email security controls, and historical phishing exposure.' },
  { icon: '👤', title: 'Identity & Access Management', desc: 'Review of user accounts, privilege levels, MFA adoption, password policies, and Active Directory or Azure AD configuration.' },
  { icon: '☁', title: 'Cloud Security', desc: 'Assessment of cloud platform security settings, data exposure, misconfiguration risks, and access controls in Azure, M365, or AWS.' },
  { icon: '📋', title: 'Policies & Procedures', desc: 'Review of your security policies, incident response plans, business continuity arrangements, and staff security awareness.' },
  { icon: '🔒', title: 'Data Protection & GDPR', desc: 'Assessment of how personal data is handled, stored, and protected — including data retention, breach reporting, and subject rights.' },
  { icon: '🤝', title: 'Third-Party & Supply Chain', desc: 'Review of supplier and vendor access to your systems, software supply chain risks, and third-party security controls.' },
]

const deliverables = [
  { icon: '📄', title: 'Executive Summary Report', desc: 'A clear, jargon-free summary of your security posture — written for business leaders, not just IT teams.' },
  { icon: '🗺', title: 'Detailed Technical Findings', desc: 'A comprehensive technical report of every vulnerability, misconfiguration, and gap identified during the assessment.' },
  { icon: '📊', title: 'Risk Register', desc: 'A prioritised risk register scoring each finding by likelihood and business impact — so you know exactly what to fix first.' },
  { icon: '🛣', title: 'Remediation Roadmap', desc: 'A practical, prioritised action plan with timelines, effort estimates, and recommendations for immediate, short, and long-term actions.' },
  { icon: '💰', title: 'Cost-Benefit Analysis', desc: 'Where relevant, we provide cost estimates for recommended security investments alongside the risk reduction they deliver.' },
  { icon: '🔄', title: 'Reassessment Review', desc: 'A follow-up review at 3 or 6 months to measure progress against the roadmap and update the risk register.' },
]

const frameworks = [
  { name: 'Cyber Essentials', desc: 'UK government-backed baseline' },
  { name: 'NCSC CAF', desc: 'Cyber Assessment Framework' },
  { name: 'ISO 27001', desc: 'International security standard' },
  { name: 'NIST CSF', desc: 'US NIST Cybersecurity Framework' },
  { name: 'CIS Controls', desc: 'Center for Internet Security' },
  { name: 'GDPR / DPA 2018', desc: 'Data protection compliance' },
]

const steps = [
  { title: 'Scoping Call', desc: 'We agree the scope, objectives, and methodology for the assessment based on your business size, sector, and risk profile.' },
  { title: 'Information Gathering', desc: 'We collect documentation, access credentials, and conduct interviews with key stakeholders and IT personnel.' },
  { title: 'Technical Assessment', desc: 'Hands-on technical review of your systems, configurations, and controls — combined with vulnerability scanning where applicable.' },
  { title: 'Report & Debrief', desc: 'We deliver your written report and host a debrief session to walk through findings, answer questions, and agree next steps.' },
]

export default function SecurityRiskAssessment() {
  return (
    <PageLayout
      breadcrumb="Security Risk Assessment"
      tag="Cyber Security"
      title="Cyber Security Risk Assessment"
      subtitle="You can't protect what you don't understand. Our comprehensive cyber security risk assessment gives you a clear, honest picture of your security posture — and a prioritised roadmap to improve it."
      heroStats={[
        { value: '360°', label: 'Security Coverage' },
        { value: 'Plain', label: 'English Reporting' },
        { value: 'Prioritised', label: 'Remediation Roadmap' },
      ]}
    >
      {/* Assessment areas */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What We Assess</span>
            <h2 className="section-title">A Comprehensive View of Your Security Posture</h2>
            <p className="section-subtitle">
              Our risk assessment covers every dimension of your cyber security — from technical controls to people, processes, and policies.
            </p>
          </div>
          <div className="benefit-grid">
            {assessmentAreas.map(a => (
              <div key={a.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{a.icon}</div>
                <div className="benefit-card__title">{a.title}</div>
                <div className="benefit-card__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">What You Get</span>
              <h2 className="section-title">Clear Outputs. Actionable Results.</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Our assessments don't end with a thick report that gathers dust. You get a practical roadmap your team can act on from day one.
              </p>
              <div className="feature-list">
                {deliverables.map(d => (
                  <div key={d.title} className="feature-list__item">
                    <div className="feature-list__icon">{d.icon}</div>
                    <div className="feature-list__text">
                      <strong>{d.title}</strong>
                      <span>{d.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="page-visual-box" style={{ flex: 1 }}>
                <div className="page-visual-box__icon">🔍</div>
                {/* Replace with: <img src="/images/risk-assessment.jpg" alt="Security Risk Assessment" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Risk matrix / consultant reviewing systems / assessment report</span>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Frameworks We Assess Against</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {frameworks.map(f => (
                    <div key={f.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 14px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{f.name}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{f.desc}</span>
                    </div>
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
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">From Scoping to Remediation Roadmap</h2>
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
              <div className="page-cta-banner__title">Know your risks. Fix what matters most.</div>
              <div className="page-cta-banner__sub">Book a cyber security risk assessment today and get a clear, prioritised action plan to protect your business.</div>
            </div>
            <a href="#contact" className="btn-primary">Book a Risk Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}