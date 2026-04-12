import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const features = [
  { icon: '🤝', title: 'Collaborative Support Model', desc: "We work alongside your internal IT team — not instead of them. Roles are clearly defined so there's no overlap or confusion." },
  { icon: '🛠', title: 'Overflow & Out-of-Hours Cover', desc: 'When your team is stretched or off-duty, we provide seamless cover so your business never loses IT support capacity.' },
  { icon: '📈', title: 'Specialist Skills on Demand', desc: 'Tap into our specialist expertise — cyber security, cloud architecture, networking — without adding permanent headcount.' },
  { icon: '🧰', title: 'Shared Toolset & Platform', desc: 'Your internal team gets access to our professional RMM, PSA, and ticketing platform, dramatically improving IT visibility.' },
  { icon: '📋', title: 'Knowledge & Documentation', desc: 'We document your environment comprehensively so both teams always have full context on your systems and history.' },
  { icon: '📊', title: 'Unified Reporting', desc: 'A single view of all IT activity across your internal team and ours — giving leadership clear oversight of IT performance.' },
]

const whoIsItFor = [
  { title: 'Growing IT Teams', desc: 'Your internal IT department is growing but needs specialist backup and extra capacity during peaks.' },
  { title: 'Businesses with a Lone IT Manager', desc: "A single IT person can't cover everything alone — we provide the support structure around them." },
  { title: 'Organisations Reducing Headcount', desc: 'Downsizing your IT team? We fill the gap at a fraction of the cost of additional employees.' },
  { title: 'Businesses Needing Specialist Skills', desc: 'Your team handles the day-to-day but needs expert help for specific projects or technologies.' },
]

const steps = [
  { title: 'Roles & Boundaries Discussion', desc: 'We define exactly who handles what — ensuring a clean split of responsibilities and no duplication.' },
  { title: 'Tool Integration', desc: 'We integrate your existing tools with our platform, or onboard your team onto ours for unified visibility.' },
  { title: 'Joint Onboarding', desc: 'Your internal team and ours work together through a structured onboarding to share knowledge and context.' },
  { title: 'Live & Collaborative', desc: 'The model goes live with regular joint calls and shared dashboards keeping both teams fully aligned.' },
]

export default function CoManagedITSupport() {
  return (
    <PageLayout
      breadcrumb="Co-Managed IT Support"
      tag="Services"
      title="Co-Managed IT Support — The Best of Both Worlds"
      subtitle="Already have an internal IT team? Our co-managed IT support works alongside your people — filling skills gaps, providing out-of-hours cover, and adding specialist expertise when you need it."
      heroStats={[
        { value: '50%', label: 'Avg. IT Cost Reduction' },
        { value: '2x', label: 'IT Capacity Increase' },
        { value: '24/7', label: 'Combined Coverage' },
      ]}
    >
      {/* What we do */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How Co-Managed Works</span>
            <h2 className="section-title">Augmenting Your Internal IT Team</h2>
            <p className="section-subtitle">
              Co-managed IT isn't about replacing your team — it's about making them more effective, better resourced, and more resilient.
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

      {/* Who is it for */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Is It Right for You?</span>
              <h2 className="section-title">Who Benefits from Co-Managed IT?</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Co-managed IT suits a wide range of organisations. If any of these sound familiar, we should talk.
              </p>
              <div className="feature-list">
                {whoIsItFor.map(w => (
                  <div key={w.title} className="feature-list__item">
                    <div className="feature-list__icon">✓</div>
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
                <div className="page-visual-box__icon">🤝</div>
                {/* Replace with: <img src="/images/co-managed.jpg" alt="Co-Managed IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Two IT teams collaborating / joint meeting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we set it up */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">How We Integrate with Your Team</h2>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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

      {/* CTA */}
      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Strengthen your internal IT team today</div>
              <div className="page-cta-banner__sub">Let's discuss how co-managed IT can make your existing team more effective and resilient.</div>
            </div>
            <a href="#contact" className="btn-primary">Book a Discovery Call →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}