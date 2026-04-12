import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const values = [
  { icon: '🤝', title: 'Genuine Partnership', desc: 'We don\'t just fix problems and disappear. We invest in understanding your business, your goals, and your team — acting as a true extension of your organisation.' },
  { icon: '💬', title: 'Plain English Always', desc: 'No jargon. No technobabble. We explain everything in clear, straightforward language so you can make informed decisions without needing a technical degree.' },
  { icon: '🎯', title: 'Outcome Focused', desc: 'We measure success by your business outcomes — not ticket counts or response times. Technology should deliver results, and we hold ourselves accountable to that.' },
  { icon: '🔒', title: 'Security First', desc: 'Every solution we design and every recommendation we make has security baked in from the start — not bolted on as an afterthought.' },
  { icon: '⚡', title: 'Proactive, Not Reactive', desc: 'We find and fix problems before they affect your business. Our monitoring, patching, and review processes mean most issues never reach you.' },
  { icon: '🌱', title: 'Long-Term Thinking', desc: 'We build relationships, not transactions. Our advice always considers your long-term interests — even when a quick fix might be easier to sell.' },
]

const milestones = [
  { year: '2018', title: 'Founded', desc: 'SK & MS IT Consulting established in Doncaster, South Yorkshire, with a mission to give UK SMEs access to enterprise-grade IT expertise.' },
  { year: '2019', title: 'First 50 Clients', desc: 'Rapid growth through word of mouth — building a reputation for honest advice, fast response, and technical excellence across South Yorkshire.' },
  { year: '2020', title: 'Remote Working Specialists', desc: 'Helped dozens of businesses rapidly transition to remote working during the pandemic — delivering Microsoft 365 rollouts in record time.' },
  { year: '2021', title: 'Microsoft Partner Status', desc: 'Achieved Microsoft Partner status, recognising our expertise in Microsoft 365, Azure, and Dynamics 365 — unlocking better pricing for our clients.' },
  { year: '2022', title: 'Cyber Security Practice Launched', desc: 'Launched a dedicated cyber security practice — Cyber Essentials, EDR, SIEM, and incident response services for UK businesses.' },
  { year: '2023', title: 'Education & Healthcare Sectors', desc: 'Expanded specialist practices in education and healthcare — bringing sector-specific expertise to schools, academies, and clinical providers.' },
  { year: '2024', title: 'Company No. 17083873 Registered', desc: 'Formally incorporated in England & Wales, cementing our commitment to operating as a trusted, accountable UK business.' },
  { year: '2025', title: 'Crafting Digital Advantage', desc: 'Serving 500+ UK businesses across every sector — with a growing team of certified engineers, consultants, and account managers.' },
]

const accreditations = [
  { name: 'Microsoft Partner', icon: '🏆' },
  { name: 'Cyber Essentials Certified', icon: '🛡' },
  { name: 'Registered in England & Wales', icon: '🇬🇧' },
  { name: 'GDPR Compliant', icon: '🔒' },
  { name: 'ISO 27001 Aligned', icon: '📋' },
  { name: 'Cyber Essentials Plus', icon: '🔐' },
]

export default function AboutUs() {
  return (
    <PageLayout
      breadcrumb="About Us"
      tag="About"
      title="Crafting Digital Advantage for UK Businesses"
      subtitle="SK & MS IT Consulting is a UK-based IT consultancy founded on a simple belief: every business deserves honest, expert technology advice delivered with genuine care. We're not just a supplier — we're your strategic IT partner."
      heroStats={[
        { value: '500+', label: 'Businesses Supported' },
        { value: '7+',   label: 'Years in Business' },
        { value: '100%', label: 'UK Based Team' },
      ]}
    >
      {/* Story */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Built on the Belief That IT Should Work For You</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
                SK &amp; MS IT Consulting was founded in Doncaster, South Yorkshire, with a clear purpose: to give UK small and medium-sized businesses access to the kind of strategic IT expertise that was previously only available to large enterprises.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
                Too many businesses were being let down by IT providers who were slow to respond, quick to use jargon, and more interested in selling products than solving problems. We set out to be different — and our growth has been built entirely on reputation and referral.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
                Today, we support over 500 businesses across the UK — from single-site SMEs to multi-academy trusts and manufacturing businesses with complex OT environments. Our team of certified engineers and consultants brings genuine expertise across managed services, cloud, cyber security, and business applications.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary">Work With Us</a>
                <a href="/about/our-team" className="btn-outline">Meet the Team</a>
              </div>
            </div>
            <div>
              <div className="page-visual-box" style={{ marginBottom: 20 }}>
                <div className="page-visual-box__icon">🏢</div>
                {/* Replace with: <img src="/images/about-office.jpg" alt="SK & MS IT Consulting Office" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Office / team photo / Doncaster HQ</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {accreditations.map(a => (
                  <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{a.icon}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)' }}>{a.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">
              Our values aren't words on a wall — they shape every interaction, every recommendation, and every solution we deliver.
            </p>
          </div>
          <div className="benefit-grid">
            {values.map(v => (
              <div key={v.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{v.icon}</div>
                <div className="benefit-card__title">{v.title}</div>
                <div className="benefit-card__desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {milestones.map((m, i) => (
              <div key={m.year} className="benefit-card" style={{ textAlign: 'left', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', color: 'white', letterSpacing: '-0.02em' }}>
                  {m.year}
                </div>
                <div>
                  <div className="benefit-card__title" style={{ marginBottom: 4 }}>{m.title}</div>
                  <div className="benefit-card__desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Where We Are</span>
              <h2 className="section-title">Based in Doncaster, Serving the Whole UK</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 24 }}>
                Our headquarters are at 4 Wesleyan Court, Everton, Doncaster, DN10 5DN — but we support businesses from Cornwall to Caithness.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
                With remote support resolving the vast majority of issues without the need for a site visit, and a network of engineers across the country for on-site work, our clients experience the same quality of service wherever they're based.
              </p>
              <div className="feature-list" style={{ gap: 12 }}>
                {[
                  { icon: '📍', label: '4 Wesleyan Court, Everton, Doncaster, DN10 5DN' },
                  { icon: '✉', label: 'info@skmsit.com' },
                  { icon: '🌐', label: 'skmsitconsulting.co.uk' },
                  { icon: '🏛', label: 'Company No: 17083873 — Registered in England & Wales' },
                ].map(item => (
                  <div key={item.label} className="feature-list__item" style={{ padding: '12px 16px' }}>
                    <div className="feature-list__icon" style={{ fontSize: '1rem' }}>{item.icon}</div>
                    <div className="feature-list__text">
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">📍</div>
                {/* Replace with a Google Maps embed or office photo */}
                {/* Example embed:
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%" height="100%" style={{border:0, borderRadius:14}}
                  allowFullScreen loading="lazy"
                /> */}
                <div className="page-visual-box__label">Replace with Google Maps embed or office photo</div>
                <span>4 Wesleyan Court, Everton, Doncaster, DN10 5DN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--light">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Ready to meet your new IT partner?</div>
              <div className="page-cta-banner__sub">Get in touch today for a free, no-obligation consultation with one of our consultants.</div>
            </div>
            <a href="#contact" className="btn-primary">Get in Touch →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}