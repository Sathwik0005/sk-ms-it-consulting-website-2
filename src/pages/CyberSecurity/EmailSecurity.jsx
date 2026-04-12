import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const threats = [
  { icon: '🎣', title: 'Phishing', desc: 'Fraudulent emails designed to steal credentials, financial data, or personal information by impersonating trusted senders.' },
  { icon: '🐋', title: 'Spear Phishing & Whaling', desc: 'Highly targeted attacks against specific individuals — often executives — using personalised information to appear legitimate.' },
  { icon: '💼', title: 'Business Email Compromise (BEC)', desc: 'Attackers impersonate executives or suppliers to trick staff into making fraudulent payments or transferring sensitive data.' },
  { icon: '🦠', title: 'Malware & Ransomware', desc: 'Malicious attachments and links that install malware, steal data, or encrypt your files and demand a ransom.' },
  { icon: '📦', title: 'Spam & Graymail', desc: 'Unwanted email that clogs inboxes, reduces productivity, and can conceal malicious content within high volumes.' },
  { icon: '🔗', title: 'Malicious URLs', desc: 'Links to compromised or malicious websites — clicked in a moment of distraction — that lead to credential theft or malware.' },
]

const features = [
  { icon: '🛡', title: 'Anti-Phishing Protection', desc: 'AI-powered detection of phishing attempts, impersonation attacks, and brand spoofing — stopping threats before they reach your users.' },
  { icon: '🔍', title: 'Attachment Sandboxing', desc: 'Every attachment is detonated in a secure sandbox environment before delivery — detecting zero-day malware that signature-based tools miss.' },
  { icon: '🔗', title: 'Safe Link Scanning', desc: 'URLs are rewritten and scanned at the time of click — protecting users even if a link becomes malicious after delivery.' },
  { icon: '📧', title: 'Email Authentication (DMARC)', desc: 'DMARC, DKIM, and SPF configuration to prevent attackers from spoofing your domain and sending fraudulent emails on your behalf.' },
  { icon: '🚫', title: 'Anti-Spam & Content Filtering', desc: 'Sophisticated filtering that blocks spam, graymail, and offensive content — keeping inboxes clean and productive.' },
  { icon: '🔒', title: 'Email Encryption', desc: 'Automatic encryption of sensitive emails in transit and at rest — ensuring confidential information stays confidential.' },
  { icon: '📦', title: 'Email Archiving', desc: 'Tamper-proof email archiving for compliance, legal discovery, and business continuity — with fast, searchable retrieval.' },
  { icon: '🎓', title: 'Simulated Phishing Training', desc: 'Automated phishing simulations that test your staff and provide instant training when they click — building real security awareness.' },
]

const stats = [
  { value: '91%', label: 'Of cyber attacks start with an email' },
  { value: '3.4B', label: 'Phishing emails sent every day worldwide' },
  { value: '£137K', label: 'Average BEC loss for UK SMEs' },
  { value: '2.9s', label: 'Median time for a user to click a phishing link' },
]

const steps = [
  { title: 'Email Security Audit', desc: 'We review your current email configuration, authentication records, and existing protections to identify gaps.' },
  { title: 'Solution Deployment', desc: 'We configure and deploy your email security solution — fully integrated with Microsoft 365 or Google Workspace.' },
  { title: 'DMARC Configuration', desc: 'We implement and monitor DMARC, DKIM, and SPF to protect your domain from spoofing — moving to enforcement gradually.' },
  { title: 'Ongoing Monitoring', desc: 'Continuous monitoring of email threats, regular reports, and tuning of filters to reduce false positives and maintain protection.' },
]

export default function EmailSecurity() {
  return (
    <PageLayout
      breadcrumb="Email Security"
      tag="Cyber Security"
      title="Email Security Services"
      subtitle="91% of cyber attacks begin with an email. Our comprehensive email security solution stops phishing, malware, and business email compromise before it reaches your team — protecting your people, data, and finances."
      heroStats={[
        { value: '99.9%', label: 'Spam Detection Rate' },
        { value: '0-day', label: 'Malware Detection' },
        { value: '24/7', label: 'Threat Monitoring' },
      ]}
    >
      {/* Threat types */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Email Threats</span>
            <h2 className="section-title">What's Hiding in Your Inbox</h2>
            <p className="section-subtitle">
              Email-based attacks are the most common vector for cyber breaches. Understanding the threats is the first step to stopping them.
            </p>
          </div>
          <div className="benefit-grid">
            {threats.map(t => (
              <div key={t.title} className="benefit-card" style={{ textAlign: 'left', borderLeft: '3px solid var(--accent)' }}>
                <div className="benefit-card__icon">{t.icon}</div>
                <div className="benefit-card__title">{t.title}</div>
                <div className="benefit-card__desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Scale of the Problem</span>
            <h2 className="section-title">Email Threats by the Numbers</h2>
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

      {/* Features */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Solution</span>
            <h2 className="section-title">Layered Email Security That Actually Works</h2>
            <p className="section-subtitle">
              We implement multiple layers of email protection — combining AI-powered filtering, sandboxing, authentication, and user training for comprehensive defence.
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

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">How We Deploy It</span>
              <h2 className="section-title">From Vulnerable to Protected — Fast</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                Email security can be deployed and active within hours. We configure everything properly from the start so you're protected from day one.
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
                <div className="page-visual-box__icon">📧</div>
                {/* Replace with: <img src="/images/email-security.jpg" alt="Email Security" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Email security dashboard / blocked threat report / inbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--light">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Is your email gateway secure enough?</div>
              <div className="page-cta-banner__sub">Get a free email security assessment — we'll test your current defences and show you what's getting through.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Email Security Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}