import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const services = [
  { icon: '💻', title: 'Hardware Procurement', desc: 'Laptops, desktops, servers, networking equipment, and peripherals — sourced at competitive prices from tier-one vendors.' },
  { icon: '📦', title: 'Software Licensing', desc: 'Microsoft, Adobe, security software, and specialist applications — we find the right licences at the best price for your needs.' },
  { icon: '☁', title: 'Cloud Subscriptions', desc: 'Microsoft 365, Azure, and other SaaS subscriptions managed and optimised so you only pay for what your business actually uses.' },
  { icon: '🔄', title: 'Lifecycle Management', desc: 'We track your hardware and software through its full lifecycle — from procurement to refresh — so nothing falls out of support unexpectedly.' },
  { icon: '📋', title: 'Asset Register', desc: 'A complete, up-to-date register of all IT assets in your organisation, including warranty status, renewal dates, and assigned users.' },
  { icon: '♻', title: 'IT Disposal & Recycling', desc: 'Secure, compliant disposal of old IT equipment with full data sanitisation and certificates of destruction where required.' },
]

const vendors = [
  'Microsoft', 'Dell Technologies', 'HP Enterprise', 'Lenovo', 'Cisco', 'Ubiquiti', 'Apple Business', 'Sophos',
]

const benefits = [
  { icon: '💰', title: 'Better Pricing', desc: 'Our vendor relationships and volume purchasing mean you get better prices than buying direct or through retail channels.' },
  { icon: '🎯', title: 'Right-Fit Advice', desc: "We recommend what's right for your use case — not what earns the highest margin. Vendor-neutral, always." },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'From order confirmation to delivery and setup — we manage the full process so you can focus on your business.' },
  { icon: '📋', title: 'Warranty & Support', desc: 'All hardware comes with appropriate warranty. We manage warranty claims and replacements on your behalf.' },
  { icon: '🔄', title: 'Planned Refresh Cycles', desc: 'We proactively flag devices approaching end-of-life so you can budget and plan hardware refreshes without surprises.' },
  { icon: '📊', title: 'Spend Visibility', desc: 'Clear reporting on all technology spend — hardware, software, cloud — in one view for finance and leadership.' },
]

const steps = [
  { title: 'Requirements Gathering', desc: 'We understand what you need — user count, use cases, budget, and timelines — before making any recommendations.' },
  { title: 'Sourcing & Quoting', desc: 'We source from our vendor network, compare options, and provide a clear proposal with full cost breakdown.' },
  { title: 'Ordering & Delivery', desc: 'We place the order, track delivery, and arrange configuration and deployment so devices arrive ready to use.' },
  { title: 'Asset Registration', desc: 'All new assets are added to your IT asset register with full specifications, warranty information, and assigned users.' },
]

export default function ITProcurement() {
  return (
    <PageLayout
      breadcrumb="IT Procurement"
      tag="Services"
      title="IT Procurement Services for UK Businesses"
      subtitle="Stop overpaying for technology. Our vendor-neutral procurement service sources the right hardware and software at the best prices — and manages the full lifecycle so nothing slips through the cracks."
      heroStats={[
        { value: '20%', label: 'Avg. Cost Savings' },
        { value: '48hrs', label: 'Avg. Quote Turnaround' },
        { value: '100%', label: 'Vendor Neutral' },
      ]}
    >
      {/* Services */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">What We Procure</span>
            <h2 className="section-title">Everything Your Business Needs, Sourced Right</h2>
            <p className="section-subtitle">
              From a single laptop to a full office IT refresh — we handle procurement of all technology, managed end-to-end.
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

      {/* Vendor logos + benefits */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Use Us?</span>
              <h2 className="section-title">The Benefits of Managed Procurement</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                IT procurement done properly saves time, reduces cost, and eliminates the risk of buying the wrong thing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {benefits.slice(0, 4).map(b => (
                  <div key={b.title} className="feature-list__item feature-list">
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '18px 20px' }}>
                      <div style={{ fontSize: '1.4rem', width: 44, height: 44, background: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{b.icon}</div>
                      <div>
                        <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 3 }}>{b.title}</strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{b.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="page-visual-box" style={{ flex: 1 }}>
                <div className="page-visual-box__icon">🛒</div>
                {/* Replace with: <img src="/images/procurement.jpg" alt="IT Procurement" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Equipment / unboxing / office setup</span>
              </div>
              {/* Vendor tags */}
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Key Vendors & Partners</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {vendors.map(v => (
                    <span key={v} style={{ background: 'var(--light-bg)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 14px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>{v}</span>
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
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">From Requirement to Ready-to-Use</h2>
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
              <div className="page-cta-banner__title">Need new IT equipment or software?</div>
              <div className="page-cta-banner__sub">Get a free procurement consultation and quote — we'll find the right technology at the right price.</div>
            </div>
            <a href="#contact" className="btn-primary">Request a Quote →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}