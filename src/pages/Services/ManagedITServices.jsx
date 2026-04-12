import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'
import managed_it from '../../components/assets/managed-it.jpg'

const features = [
  { icon: '🖥', title: 'Proactive Monitoring', desc: '24/7 monitoring of your entire IT infrastructure so issues are caught and resolved before they affect your business.' },
  { icon: '🔧', title: 'Patch & Update Management', desc: 'Automated patching of operating systems, software, and firmware keeps your systems secure and performing at their best.' },
  { icon: '📊', title: 'Performance Reporting', desc: 'Monthly service reports with clear insights into your IT health, resolved tickets, uptime, and system performance.' },
  { icon: '☁', title: 'Cloud Infrastructure Management', desc: 'We manage your cloud environments — Azure, Microsoft 365, and hybrid setups — so you always get the best performance.' },
  { icon: '🔒', title: 'Security Management', desc: 'Endpoint protection, firewall management, and security alerting baked into your managed service from day one.' },
  { icon: '📞', title: 'Dedicated Account Manager', desc: 'A named account manager who knows your business, your team, and your systems — always your first point of escalation.' },
]

const benefits = [
  { icon: '💰', title: 'Predictable Costs', desc: 'Fixed monthly fees mean no surprise IT bills. Budget with confidence and eliminate unplanned expenditure.' },
  { icon: '⚡', title: 'Faster Resolution', desc: 'Average ticket resolution in under 2 hours. Our proactive monitoring means we often fix issues before you notice them.' },
  { icon: '🧠', title: 'Expert IT Team', desc: 'Access a full team of certified engineers for the cost of a fraction of one in-house hire.' },
  { icon: '📈', title: 'Business Scalability', desc: 'Scale your IT services up or down as your business grows — no recruitment headaches, no redundancy costs.' },
  { icon: '🛡', title: 'Reduced Risk', desc: 'Proactive management significantly reduces downtime, security incidents, and data loss events.' },
  { icon: '🎯', title: 'Strategic IT Guidance', desc: 'We act as your virtual IT Director, aligning technology decisions with your long-term business goals.' },
]

const steps = [
  { title: 'Discovery & Assessment', desc: 'We audit your existing IT environment, understand your business, and document everything we need to support you effectively.' },
  { title: 'Onboarding & Setup', desc: 'We deploy our monitoring tools, set up remote access, and configure your systems to our managed service standards.' },
  { title: 'Ongoing Management', desc: 'Day-to-day monitoring, proactive maintenance, helpdesk support, and regular reviews ensure your IT runs smoothly.' },
  { title: 'Strategic Reviews', desc: 'Quarterly business reviews where we present service reports and help plan your technology roadmap for the months ahead.' },
]

export default function ManagedITServices() {
  return (
    <PageLayout
      breadcrumb="Managed IT Services"
      tag="Services"
      title="Managed IT Services for UK Businesses"
      subtitle="Take the stress out of IT. Our fully managed service gives you a complete IT department — proactive monitoring, expert helpdesk, and strategic guidance — all for a predictable monthly fee."
      heroStats={[
        { value: '99.9%', label: 'Uptime Guaranteed' },
        { value: '<2hrs', label: 'Avg. Resolution Time' },
        { value: '24/7', label: 'System Monitoring' },
      ]}
    >
      {/* What's included */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">Everything Your Business Needs</h2>
            <p className="section-subtitle">
              Our Managed IT Service is a comprehensive package covering all aspects of your IT infrastructure —
              not just break-fix support, but true proactive management.
            </p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
              <span className="section-tag">Why Managed IT?</span>
              <h2 className="section-title">The Benefits of a Managed Service</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Businesses that switch to a managed IT model see immediate improvements in productivity,
                security, and cost control.
              </p>
              <ul className="checklist">
                {benefits.slice(0, 3).map(b => <li key={b.title}><strong>{b.title}</strong> — {b.desc}</li>)}
              </ul>
            </div>
            <div>
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
        </div>
      </section>

      {/* How it works */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">Getting Started is Simple</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                We make the transition to a managed service smooth and risk-free. Most businesses are fully onboarded within 2–3 weeks.
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
                {/* <div className="page-visual-box__icon">🖥</div> */}
                 <img src={managed_it} alt="Managed IT Services" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} />
                {/* <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Team at work / server room / dashboard screenshot</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Ready to hand over your IT worries?</div>
              <div className="page-cta-banner__sub">Get a free IT assessment and a tailored managed service proposal — no commitment required.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}