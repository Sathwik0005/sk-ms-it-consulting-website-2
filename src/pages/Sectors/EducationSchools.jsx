import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const challenges = [
  { icon: '🔒', title: 'Safeguarding & Content Filtering', desc: 'Robust internet filtering, monitoring, and safeguarding controls that meet Keeping Children Safe in Education (KCSiE) requirements.' },
  { icon: '💰', title: 'Tight Budgets', desc: 'Education budgets are under constant pressure. We maximise your IT investment and help access Education pricing on Microsoft and hardware.' },
  { icon: '📱', title: 'BYOD & Device Management', desc: 'Managing a mix of school-owned devices, student personal devices, and staff laptops across multiple operating systems.' },
  { icon: '🏛', title: 'Ofsted Readiness', desc: 'Ensuring your IT infrastructure, policies, and documentation are inspection-ready at any time — not just when Ofsted calls.' },
  { icon: '☁', title: 'Cloud Adoption', desc: 'Moving to Microsoft 365 for Education, Google Workspace, or cloud-based MIS systems — managed smoothly with minimal disruption.' },
  { icon: '🔐', title: 'Data Protection & GDPR', desc: 'Protecting pupil, staff, and parent data in line with GDPR, DPA 2018, and the ICO\'s guidance for education organisations.' },
]

const services = [
  { icon: '🖥', title: 'Managed IT Support for Schools', desc: 'Responsive helpdesk and on-site support sized and priced for education — covering teachers, support staff, and leadership.' },
  { icon: '🛡', title: 'Safeguarding & Filtering', desc: 'Smoothwall, Lightspeed, or equivalent internet filtering with safeguarding monitoring, alerts, and audit trails.' },
  { icon: '☁', title: 'Microsoft 365 for Education', desc: 'Free Microsoft 365 A1 licences or discounted A3/A5 — deployed, configured, and trained across your whole school.' },
  { icon: '📱', title: 'Device Management (Intune & JAMF)', desc: 'Centralised management of Windows, Chromebook, iPad, and Android devices — policies, apps, and updates from one console.' },
  { icon: '🔒', title: 'Cyber Security for Schools', desc: 'Cyber Essentials certification, email security, and endpoint protection tailored for the education sector\'s unique threat profile.' },
  { icon: '🏫', title: 'Multi-Academy Trust (MAT) IT', desc: 'Centralised IT management across multiple schools in your trust — consistent standards, shared infrastructure, and cost efficiencies.' },
]

const stats = [
  { value: '75%', label: 'Of schools experienced a cyber incident in the last year' },
  { value: 'Free', label: 'Microsoft 365 A1 licences available to all UK schools' },
  { value: '£0', label: 'Additional cost for safeguarding monitoring tools' },
  { value: '100+', label: 'Schools and academies supported across the UK' },
]

const steps = [
  { title: 'Education IT Audit', desc: 'We review your current infrastructure, safeguarding controls, device estate, and documentation against DfE and Ofsted expectations.' },
  { title: 'Roadmap & Priorities', desc: 'We produce a prioritised IT improvement plan aligned to your school development plan and budget cycle.' },
  { title: 'Implementation', desc: 'Phased delivery of improvements — timed around term dates to minimise disruption to teaching and learning.' },
  { title: 'Ongoing Support', desc: 'Managed IT support throughout the year, with proactive maintenance during holidays to keep systems ready for term.' },
]

export default function EducationSchools() {
  return (
    <PageLayout
      breadcrumb="Education & Schools"
      tag="Sectors"
      title="IT Support & Services for Schools & Academies"
      subtitle="Technology should enhance learning — not get in the way of it. We provide specialist IT support, safeguarding-compliant infrastructure, and education-sector expertise to schools, academies, and multi-academy trusts across the UK."
      heroStats={[
        { value: '100+', label: 'Schools Supported' },
        { value: 'KCSiE', label: 'Safeguarding Compliant' },
        { value: 'MAT', label: 'Trust Specialists' },
      ]}
    >
      {/* Stats */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">The Education IT Challenge</span>
            <h2 className="section-title">Schools Face Unique IT Pressures</h2>
            <p className="section-subtitle">From safeguarding obligations to budget constraints, education IT requires specialist knowledge — not a one-size-fits-all approach.</p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map(s => (
              <div key={s.label} className="benefit-card" style={{ textAlign: 'center', borderTop: '4px solid var(--primary)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 8 }}>{s.value}</div>
                <div className="benefit-card__desc">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Sector Challenges</span>
            <h2 className="section-title">We Understand Education IT</h2>
            <p className="section-subtitle">We've supported schools and academies for over a decade — we know your challenges, your compliance obligations, and your constraints.</p>
          </div>
          <div className="benefit-grid">
            {challenges.map(c => (
              <div key={c.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{c.icon}</div>
                <div className="benefit-card__title">{c.title}</div>
                <div className="benefit-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">What We Deliver</span>
              <h2 className="section-title">IT Services Built for Education</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                From daily helpdesk support to full digital transformation — we provide the full range of IT services schools need to thrive.
              </p>
              <div className="feature-list">
                {services.map(s => (
                  <div key={s.title} className="feature-list__item">
                    <div className="feature-list__icon">{s.icon}</div>
                    <div className="feature-list__text">
                      <strong>{s.title}</strong>
                      <span>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🎓</div>
                {/* Replace with: <img src="/images/education.jpg" alt="Education IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Classroom with devices / school IT suite / teacher with tablet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How We Work with Schools</span>
            <h2 className="section-title">Structured Around the Academic Year</h2>
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
              <div className="page-cta-banner__title">Supporting your school starts with a conversation</div>
              <div className="page-cta-banner__sub">Get a free education IT review — we'll assess your infrastructure, safeguarding controls, and Ofsted readiness.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free School IT Review →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}