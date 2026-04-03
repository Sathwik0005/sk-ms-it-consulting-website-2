import './ServicesSection.css'

const services = [
  {
    icon: '🖥',
    title: 'Managed IT Services',
    desc: 'Fully managed IT support that keeps your systems running 24/7. We proactively monitor, maintain, and optimise your entire IT infrastructure.',
    link: '#services',
  },
  {
    icon: '☁',
    title: 'Cloud Solutions',
    desc: 'Microsoft Azure, Microsoft 365, and modern workplace solutions. Migrate to the cloud with confidence and improve collaboration across your team.',
    link: '#solutions',
  },
  {
    icon: '🔒',
    title: 'Cyber Security',
    desc: 'Comprehensive protection from cyber threats. Cyber Essentials certification, endpoint security, managed firewall, and security awareness training.',
    link: '#cyber',
  },
  {
    icon: '📞',
    title: 'IT Support & Helpdesk',
    desc: 'Responsive 24/7 helpdesk and on-site technical support. Fast resolution times so your team stays productive and your business keeps moving.',
    link: '#services',
  },
  {
    icon: '📱',
    title: 'Unified Communications',
    desc: 'Hosted telephony (VoIP), Microsoft Teams, and video conferencing solutions that connect your team wherever they work.',
    link: '#services',
  },
  {
    icon: '💾',
    title: 'Backup & Disaster Recovery',
    desc: 'Protect your critical data with automated on-premise and cloud backup. Rapid recovery solutions to minimise downtime in any scenario.',
    link: '#solutions',
  },
  {
    icon: '📊',
    title: 'Business Apps & ERP',
    desc: 'Microsoft Dynamics 365 Business Central, Power Platform, Power BI, and custom business applications to streamline your operations.',
    link: '#solutions',
  },
  {
    icon: '🤝',
    title: 'IT Consultancy',
    desc: 'Strategic IT advice tailored to your business goals. From technology roadmaps to digital transformation — we help you make the right decisions.',
    link: '#services',
  },
  {
    icon: '🛒',
    title: 'IT Procurement',
    desc: 'Source the right hardware and software at the best prices. Vendor-neutral advice and procurement services for all your technology needs.',
    link: '#services',
  },
]

export default function ServicesSection() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Complete IT Services<br />for Your Business</h2>
          <p className="section-subtitle">
            From day-to-day support to full digital transformation — SK &amp; MS IT Consulting
            provides everything your business needs to thrive in the modern technology landscape.
          </p>
        </div>

        <div className="services__grid">
          {services.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="service-card__icon">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <a href={svc.link} className="service-card__link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}