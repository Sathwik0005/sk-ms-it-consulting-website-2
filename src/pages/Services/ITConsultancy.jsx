import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const consultancyAreas = [
  { icon: '🗺', title: 'IT Strategy & Roadmapping', desc: 'We work with your leadership team to develop a multi-year technology strategy aligned to your business objectives and budget.' },
  { icon: '🔄', title: 'Digital Transformation', desc: 'From legacy system migration to full digital transformation programmes — we guide every step with expertise and clarity.' },
  { icon: '☁', title: 'Cloud Migration Consultancy', desc: 'Independent advice on whether to move to the cloud, which platform is right, and how to migrate with minimal disruption.' },
  { icon: '🔐', title: 'Cyber Security Consultancy', desc: 'Expert security advice including risk assessments, gap analysis, and security strategy for organisations of all sizes.' },
  { icon: '📋', title: 'IT Policy & Compliance', desc: 'GDPR readiness, Cyber Essentials preparation, and IT policy development to protect your organisation legally and operationally.' },
  { icon: '💸', title: 'IT Cost Optimisation', desc: 'Audit your existing IT spend and licences to eliminate waste, renegotiate contracts, and reduce total cost of ownership.' },
]

const engagements = [
  { title: 'One-Off Project', desc: 'Need an expert review or a specific project delivered? We work on a fixed-scope, fixed-price basis for clarity.' },
  { title: 'Retained Consultancy', desc: 'Regular access to our consultants on a monthly retainer — your on-call virtual IT Director without the full-time cost.' },
  { title: 'Programme Delivery', desc: 'End-to-end delivery of complex transformation programmes, managed by experienced project managers and technical leads.' },
]

const steps = [
  { title: 'Initial Consultation', desc: 'We meet to understand your business, current IT landscape, challenges, and where you want to get to.' },
  { title: 'Assessment & Discovery', desc: 'Our consultants assess your systems, processes, risks, and opportunities — producing clear, jargon-free findings.' },
  { title: 'Strategy & Recommendations', desc: 'We deliver a prioritised recommendations report with a practical roadmap, timeline, and budget estimates.' },
  { title: 'Implementation Support', desc: 'We can oversee or deliver the implementation, or hand over to your team with full documentation and knowledge transfer.' },
]

export default function ITConsultancy() {
  return (
    <PageLayout
      breadcrumb="IT Consultancy"
      tag="Services"
      title="IT Consultancy Services for UK Businesses"
      subtitle="Technology decisions have long-term consequences. Our independent IT consultants give you the expert, unbiased guidance you need to make smart technology decisions — without the vendor agenda."
      heroStats={[
        { value: '15+', label: 'Years Experience' },
        { value: '100%', label: 'Vendor Neutral' },
        { value: '200+', label: 'Projects Delivered' },
      ]}
    >
      {/* Areas */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Consultancy Areas</span>
            <h2 className="section-title">Expert Advice Across Every IT Domain</h2>
            <p className="section-subtitle">
              Our consultants have deep expertise across the full technology spectrum — from cloud to compliance, strategy to security.
            </p>
          </div>
          <div className="benefit-grid">
            {consultancyAreas.map(a => (
              <div key={a.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{a.icon}</div>
                <div className="benefit-card__title">{a.title}</div>
                <div className="benefit-card__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">Flexible Engagement Models</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                We adapt to what your business needs — whether that's a focused one-off review or ongoing strategic support.
              </p>
              <div className="feature-list">
                {engagements.map(e => (
                  <div key={e.title} className="feature-list__item">
                    <div className="feature-list__icon">💼</div>
                    <div className="feature-list__text">
                      <strong>{e.title}</strong>
                      <span>{e.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">📊</div>
                {/* Replace with: <img src="/images/consultancy.jpg" alt="IT Consultancy" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Whiteboard strategy session / consultant with client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col ps__two-col--reverse">
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🗺</div>
                {/* Replace with: <img src="/images/roadmap.jpg" alt="IT Roadmap" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Technology roadmap diagram / project timeline</span>
              </div>
            </div>
            <div>
              <span className="section-tag">Our Process</span>
              <h2 className="section-title">From First Meeting to Measurable Results</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                Our structured consultancy process ensures we understand your context deeply before making any recommendations.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Speak to an IT Consultant today</div>
              <div className="page-cta-banner__sub">Free initial consultation — no jargon, no pressure, just honest expert advice.</div>
            </div>
            <a href="#contact" className="btn-primary">Book a Consultation →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}