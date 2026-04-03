import './Sectors.css'

const sectors = [
  {
    icon: '🎓',
    title: 'Education & Schools',
    desc: 'IT support for schools, academies, and multi-academy trusts. Safeguarding-aware solutions, filtering, and Ofsted-ready infrastructure.',
    highlight: 'MAT & Academy specialists',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Keeping production lines connected and protected. OT/IT integration, ERP solutions, and 24/7 monitoring for manufacturing environments.',
    highlight: 'OT/IT integration',
  },
  {
    icon: '❤️',
    title: 'Healthcare',
    desc: 'GDPR and clinical data compliance with secure, reliable IT infrastructure tailored for GP surgeries, dentists, and private practices.',
    highlight: 'Clinical data specialists',
  },
  {
    icon: '⚖️',
    title: 'Professional Services',
    desc: 'Supporting law firms, accountants, consultancies, and agencies with secure, mobile-friendly IT that enables client-focused work.',
    highlight: 'SRA & FCA aware',
  },
  {
    icon: '🌱',
    title: 'Charities & Non-Profits',
    desc: 'Budget-conscious IT solutions for the third sector. Charity-rate Microsoft licensing, streamlined support, and GDPR guidance.',
    highlight: 'Charity pricing available',
  },
  {
    icon: '🛍',
    title: 'Retail & Hospitality',
    desc: 'POS system support, network management, and cyber security for retail chains, hotels, and hospitality businesses of all sizes.',
    highlight: 'PCI DSS compliance',
  },
]

export default function Sectors() {
  return (
    <section className="sectors section-pad" id="sectors">
      <div className="container">
        <div className="sectors__header">
          <span className="section-tag">Sectors We Serve</span>
          <h2 className="section-title">IT Expertise Across<br />Every Industry</h2>
          <p className="section-subtitle">
            We understand that every sector has unique IT challenges. Our team brings
            specialist knowledge to deliver solutions that fit your industry's needs.
          </p>
        </div>

        <div className="sectors__grid">
          {sectors.map(s => (
            <div key={s.title} className="sector-card">
              <div className="sector-card__top">
                <span className="sector-icon">{s.icon}</span>
                <span className="sector-highlight">{s.highlight}</span>
              </div>
              <h3 className="sector-title">{s.title}</h3>
              <p className="sector-desc">{s.desc}</p>
              <a href="#contact" className="sector-link">
                Find out more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}