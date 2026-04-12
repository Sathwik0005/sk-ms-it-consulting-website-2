import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const challenges = [
  { icon: '💰', title: 'Limited IT Budgets', desc: 'Charities must demonstrate every pound spent goes towards mission delivery. IT investment needs to show clear value and be cost-efficient.' },
  { icon: '👥', title: 'Volunteer & Remote Workforces', desc: 'Supporting a mix of paid staff, volunteers, and remote workers — often on personal devices — with consistent, secure access to systems.' },
  { icon: '🔒', title: 'Data Protection & GDPR', desc: 'Handling sensitive beneficiary, donor, and staff data in line with GDPR and the Charity Commission\'s expectations for data stewardship.' },
  { icon: '📋', title: 'Fundraising Platform Integration', desc: 'Connecting CRM systems, fundraising platforms (JustGiving, Salesforce NPSP, Donorfy), and finance systems without costly custom development.' },
  { icon: '🏛', title: 'Trustee & Governance IT', desc: 'Providing board members and trustees with secure, simple access to board papers, governance documents, and reporting.' },
  { icon: '🌱', title: 'Growth Without IT Overhead', desc: 'As charities grow their programmes and headcount, IT needs to scale without proportional increases in cost or complexity.' },
]

const services = [
  { icon: '💷', title: 'Charity-Rate Licensing', desc: 'Access Microsoft 365 Business Premium at significantly reduced charity pricing — we handle eligibility, application, and licensing management.' },
  { icon: '🖥', title: 'Managed IT Support', desc: 'Affordable managed IT support sized for the third sector — responsive helpdesk, proactive monitoring, and on-site visits when needed.' },
  { icon: '🔒', title: 'Data Protection & GDPR', desc: 'Practical guidance and technical controls to protect beneficiary, donor, and volunteer data — with documentation for your trustees.' },
  { icon: '☁', title: 'Microsoft 365 for Charities', desc: 'Free Microsoft Teams, SharePoint, and Exchange Online for eligible charities — plus discounted Azure, Power BI, and Dynamics 365.' },
  { icon: '🛡', title: 'Cyber Security for Charities', desc: 'Cyber Essentials certification, email security, and endpoint protection — at prices the third sector can afford.' },
  { icon: '📊', title: 'CRM & Database Integration', desc: 'Connecting your fundraising CRM, case management system, and finance software — reducing manual data entry and improving reporting.' },
]

const freeLicences = [
  { product: 'Microsoft 365 Business Premium', saving: 'Up to 75% discount' },
  { product: 'Microsoft Teams (Essentials)', saving: 'Free for eligible charities' },
  { product: 'Microsoft Azure', saving: '$3,500 credit per year' },
  { product: 'Microsoft Dynamics 365', saving: '10 free user licences' },
  { product: 'Power BI Pro', saving: 'Free for eligible charities' },
]

const steps = [
  { title: 'Eligibility Check', desc: 'We verify your charity\'s eligibility for discounted and free Microsoft licensing — most registered UK charities qualify.' },
  { title: 'Needs Assessment', desc: 'We understand your organisation\'s mission, team structure, and technology requirements before recommending solutions.' },
  { title: 'Budget-First Planning', desc: 'We build a phased IT roadmap that maximises the use of charity pricing and grants before recommending paid solutions.' },
  { title: 'Ongoing Support', desc: 'Affordable managed support that scales with your organisation — from a handful of staff to hundreds of volunteers.' },
]

export default function CharitiesNonProfits() {
  return (
    <PageLayout
      breadcrumb="Charities & Non-Profits"
      tag="Sectors"
      title="IT Support for Charities & Non-Profit Organisations"
      subtitle="Technology helps charities deliver more impact. We provide affordable, expert IT support and Microsoft charity licensing to third sector organisations — so more of your funding goes towards your mission, not your IT bills."
      heroStats={[
        { value: '75%', label: 'Off Microsoft Licensing' },
        { value: 'Free', label: 'M365 for Eligible Charities' },
        { value: '£0', label: 'Setup Fees for Qualifying Orgs' },
      ]}
    >
      {/* Licence savings */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Charity Pricing</span>
              <h2 className="section-title">Major Savings on Microsoft Products</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Microsoft offers substantial discounts and free products to registered charities. Most organisations don't know what they're entitled to — we do.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {freeLicences.map(l => (
                  <div key={l.product} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 18px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>{l.product}</span>
                    <span style={{ background: '#dcfce7', color: '#16a34a', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 30 }}>{l.saving}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)' }}>* Eligibility criteria apply. We'll verify your status and manage the application on your behalf.</p>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">🌱</div>
                {/* Replace with: <img src="/images/charity.jpg" alt="Charity IT" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Charity team working / volunteers / community setting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Sector Challenges</span>
            <h2 className="section-title">We Understand Third Sector IT</h2>
            <p className="section-subtitle">Charities face unique IT challenges that standard MSPs often don't understand. We've worked with the third sector for years — and we get it.</p>
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
          <div className="ps__header ps__header--center">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">IT Services Built for the Third Sector</h2>
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

      {/* Process */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Budget-First, Mission-Focused</h2>
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
              <div className="page-cta-banner__title">Find out what your charity is entitled to</div>
              <div className="page-cta-banner__sub">Free eligibility check and IT review — discover the charity pricing and free products available to your organisation.</div>
            </div>
            <a href="#contact" className="btn-primary">Get a Free Eligibility Check →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}