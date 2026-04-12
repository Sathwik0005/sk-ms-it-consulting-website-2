import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const tiers = [
  {
    name: 'Cyber Essentials',
    icon: '🛡',
    price: 'Self-assessed',
    desc: 'The foundation certification. A self-assessment questionnaire verified by an independent certification body. Covers the five core technical controls.',
    features: [
      'Self-assessment questionnaire',
      'Independent verification',
      'CE certificate & badge',
      'Valid for 12 months',
      'NCSC-backed certification',
    ],
    highlight: false,
  },
  {
    name: 'Cyber Essentials Plus',
    icon: '🔐',
    price: 'Technical audit',
    desc: 'A higher level of assurance. Everything in Cyber Essentials, plus an independent technical audit of your systems by a certified assessor.',
    features: [
      'Everything in Cyber Essentials',
      'On-site or remote technical audit',
      'Vulnerability scanning',
      'Internal & external testing',
      'Higher assurance certificate',
    ],
    highlight: true,
  },
]

const fiveControls = [
  { icon: '🔥', title: 'Firewalls', desc: 'Boundary firewalls and internet gateways configured to protect your devices from unsolicited network traffic.' },
  { icon: '⚙', title: 'Secure Configuration', desc: 'Computers and network devices configured to reduce vulnerabilities — removing unnecessary software and default passwords.' },
  { icon: '👤', title: 'User Access Control', desc: 'User accounts with just the access they need. Admin rights only where necessary. Strong password policies enforced.' },
  { icon: '🛡', title: 'Malware Protection', desc: 'Protection against viruses and malware through antivirus software, sandboxing, or application allow-listing.' },
  { icon: '🔄', title: 'Security Update Management', desc: 'Software and devices patched and updated promptly. No unsupported software in use on internet-connected devices.' },
]

const whyGetCertified = [
  { icon: '🏛', title: 'Government Contracts', desc: 'Mandatory for suppliers to UK government contracts handling sensitive data. Many public sector tenders require it.' },
  { icon: '🤝', title: 'Client Confidence', desc: 'Demonstrate to customers and partners that you take data security seriously. A growing differentiator in tender processes.' },
  { icon: '🔒', title: 'Cyber Insurance', desc: 'Many insurers offer reduced premiums or require Cyber Essentials as a condition of cyber liability insurance.' },
  { icon: '🛡', title: 'Real Protection', desc: 'NCSC research shows that Cyber Essentials can prevent around 80% of common cyber attacks when properly implemented.' },
]

const steps = [
  { title: 'Gap Assessment', desc: 'We review your current IT controls against the five Cyber Essentials requirements and identify exactly what needs to change.' },
  { title: 'Remediation', desc: 'We implement the required technical controls — firewall configuration, patch management, access control, and malware protection.' },
  { title: 'Self-Assessment', desc: 'We guide you through the questionnaire, ensuring your answers are accurate and your evidence is in order for submission.' },
  { title: 'Certification', desc: 'Submission to the certification body, verification, and award of your Cyber Essentials certificate and badge.' },
]

export default function CyberEssentials() {
  return (
    <PageLayout
      breadcrumb="Cyber Essentials"
      tag="Cyber Security"
      title="Cyber Essentials Certification Services"
      subtitle="Achieve UK government-backed Cyber Essentials or Cyber Essentials Plus certification with confidence. We handle the gap assessment, remediation, and certification process end-to-end — so you pass first time."
      heroStats={[
        { value: '1st', label: 'Time Pass Rate' },
        { value: '80%', label: 'Of Attacks Prevented' },
        { value: 'NCSC', label: 'Government Backed' },
      ]}
    >
      {/* Two tiers */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Certification Levels</span>
            <h2 className="section-title">Cyber Essentials vs Cyber Essentials Plus</h2>
            <p className="section-subtitle">
              There are two levels of certification. We help you decide which is right for your business and guide you through either path.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 800, margin: '0 auto' }}>
            {tiers.map(t => (
              <div key={t.name} className="benefit-card" style={{ textAlign: 'left', position: 'relative', borderTop: `4px solid ${t.highlight ? 'var(--accent)' : 'var(--primary)'}` }}>
                {t.highlight && (
                  <div style={{ position: 'absolute', top: -1, right: 20, background: 'var(--accent)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '4px 12px', borderRadius: '0 0 6px 6px', letterSpacing: '0.08em' }}>RECOMMENDED</div>
                )}
                <div className="benefit-card__icon">{t.icon}</div>
                <div className="benefit-card__title" style={{ fontSize: '1.1rem' }}>{t.name}</div>
                <div style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', marginBottom: 12 }}>{t.price}</div>
                <p className="benefit-card__desc" style={{ marginBottom: 16 }}>{t.desc}</p>
                <ul className="checklist">
                  {t.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 controls */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Five Controls</span>
            <h2 className="section-title">What Cyber Essentials Covers</h2>
            <p className="section-subtitle">
              Cyber Essentials focuses on five fundamental security controls. These aren't complex — but they must be properly implemented and evidenced.
            </p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            {fiveControls.map((c, i) => (
              <div key={c.title} className="benefit-card" style={{ textAlign: 'center' }}>
                <div style={{ width: 36, height: 36, background: 'var(--primary)', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{i + 1}</div>
                <div className="benefit-card__icon">{c.icon}</div>
                <div className="benefit-card__title">{c.title}</div>
                <div className="benefit-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why get certified */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Certify?</span>
              <h2 className="section-title">The Business Benefits of Cyber Essentials</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Cyber Essentials isn't just a compliance exercise — it delivers real security improvements and opens commercial opportunities.
              </p>
              <div className="feature-list">
                {whyGetCertified.map(w => (
                  <div key={w.title} className="feature-list__item">
                    <div className="feature-list__icon">{w.icon}</div>
                    <div className="feature-list__text">
                      <strong>{w.title}</strong>
                      <span>{w.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🏅</div>
                {/* Replace with: <img src="/images/cyber-essentials.jpg" alt="Cyber Essentials" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: CE badge / certificate / team reviewing checklist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How We Help You Certify</span>
            <h2 className="section-title">End-to-End Certification Support</h2>
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
              <div className="page-cta-banner__title">Get Cyber Essentials certified — fast</div>
              <div className="page-cta-banner__sub">We'll run a free gap analysis and tell you exactly what needs to be done to achieve certification.</div>
            </div>
            <a href="#contact" className="btn-primary">Start Your Certification →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}