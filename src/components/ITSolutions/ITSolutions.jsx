import './ITSolutions.css'

const solutions = [
  {
    category: 'Cloud',
    title: 'Microsoft Azure Solutions',
    desc: 'Migrate, manage, and optimise your workloads on Microsoft Azure. Reduce infrastructure costs while gaining enterprise-grade scalability and reliability.',
    features: ['Azure Virtual Machines', 'Azure DevOps', 'Hybrid Cloud Setup', 'Cost Optimisation'],
    color: 'blue',
  },
  {
    category: 'Productivity',
    title: 'Microsoft 365 & Modern Workplace',
    desc: 'Transform how your team works with Microsoft 365. Teams, SharePoint, OneDrive, and Exchange — configured, secured, and managed for you.',
    features: ['Microsoft Teams', 'SharePoint Intranet', 'Exchange Online', 'OneDrive & Backup'],
    color: 'orange',
  },
  {
    category: 'Data & AI',
    title: 'Power Platform & Business Apps',
    desc: 'Automate workflows, build custom apps, and unlock business intelligence with the Microsoft Power Platform — Power Apps, Power Automate, and Power BI.',
    features: ['Power BI Dashboards', 'Power Apps', 'Power Automate', 'Dynamics 365'],
    color: 'purple',
  },
  {
    category: 'Communications',
    title: 'Hosted Telephony & VoIP',
    desc: 'Replace ageing phone systems with modern, flexible hosted telephony. Stay connected with crystal-clear VoIP calls and seamless Microsoft Teams integration.',
    features: ['VoIP Phone Systems', 'Teams Calling', 'Video Conferencing', 'Call Recording'],
    color: 'green',
  },
]

export default function ITSolutions() {
  return (
    <section className="solutions section-pad" id="solutions">
      <div className="container">
        <div className="solutions__header">
          <span className="section-tag">IT Solutions</span>
          <h2 className="section-title">Technology Solutions<br />Built for Growth</h2>
          <p className="section-subtitle">
            We deliver end-to-end technology solutions that modernise your business,
            improve productivity, and position you for long-term success.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((sol) => (
            <div key={sol.title} className={`solution-card solution-card--${sol.color}`}>
              <div className="solution-card__top">
                <span className="solution-category">{sol.category}</span>
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-desc">{sol.desc}</p>
              </div>
              <ul className="solution-features">
                {sol.features.map(f => (
                  <li key={f} className="solution-feature">
                    <span className="feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="solution-cta">
                Get Started →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="solutions__banner">
          <div className="solutions-banner-content">
            <div>
              <h3 className="banner-title">Not sure which solution is right for you?</h3>
              <p className="banner-sub">Our consultants will assess your needs and recommend the best technology strategy.</p>
            </div>
            <a href="#contact" className="btn-primary">Book a Free Assessment</a>
          </div>
        </div>
      </div>
    </section>
  )
}