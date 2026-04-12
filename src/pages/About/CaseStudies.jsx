import { useState } from 'react'
import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'
import './CaseStudies.css'

const caseStudies = [
  {
    id: 1,
    sector: 'Manufacturing',
    tag: 'Managed IT + Cyber Security',
    title: 'Protecting a South Yorkshire Manufacturer from Ransomware',
    client: 'Midlands Manufacturing Ltd (anonymised)',
    challenge: 'A 120-person manufacturing business with aging on-premise infrastructure and no endpoint protection faced a near-miss ransomware attack that exposed serious gaps in their security posture.',
    solution: 'We deployed a next-generation endpoint detection and response solution across all 85 endpoints, implemented network segmentation between IT and OT environments, and migrated email to Microsoft 365 with Defender for Business.',
    result: 'Zero successful ransomware attacks in 18 months since deployment. IT downtime reduced by 74%. The business successfully achieved Cyber Essentials Plus certification — enabling them to bid on two new government supply chain contracts.',
    stats: [
      { value: '74%', label: 'Reduction in IT downtime' },
      { value: '0', label: 'Successful attacks since deployment' },
      { value: 'CE+', label: 'Certification achieved' },
    ],
    icon: '🏭',
    color: '#0a2463',
  },
  {
    id: 2,
    sector: 'Education',
    tag: 'Microsoft 365 Migration + Safeguarding',
    title: 'Transforming a Multi-Academy Trust\'s Digital Infrastructure',
    client: '4-school Multi-Academy Trust, Yorkshire',
    challenge: 'A growing MAT with 4 schools was running fragmented IT systems — different email providers, no central file storage, inconsistent safeguarding controls, and an overworked lone IT coordinator.',
    solution: 'We delivered a full Microsoft 365 for Education deployment across all 4 schools — including Intune device management for 800 devices, centralised SharePoint for document management, and Smoothwall filtering with safeguarding monitoring.',
    result: 'A single, consistent IT environment across all 4 schools. Safeguarding monitoring now provides real-time alerts to DSLs. The IT coordinator\'s reactive support workload dropped by 60%, allowing them to focus on strategic IT development.',
    stats: [
      { value: '800', label: 'Devices centrally managed' },
      { value: '60%', label: 'Reduction in reactive support' },
      { value: '4', label: 'Schools on one platform' },
    ],
    icon: '🎓',
    color: '#1340a8',
  },
  {
    id: 3,
    sector: 'Professional Services',
    tag: 'Managed IT + Compliance',
    title: 'GDPR & SRA Compliance for a Growing Law Firm',
    client: 'Regional Law Firm, East Midlands (anonymised)',
    challenge: 'A 45-person law firm operating across two offices had serious concerns about their GDPR posture after an internal audit flagged data handling gaps. Their SRA compliance was also at risk without documented IT security policies.',
    solution: 'We performed a full data protection audit, implemented Microsoft Purview for data classification and DLP, deployed conditional access policies in Azure AD, and documented a full suite of IT security policies for SRA compliance.',
    result: 'The firm passed their next SRA inspection with IT compliance commended. No ICO enforcement action. Microsoft Purview automatically classifies and protects over 50,000 documents per month. Staff now have clear data handling guidance.',
    stats: [
      { value: '100%', label: 'SRA compliance achieved' },
      { value: '50K+', label: 'Documents auto-classified monthly' },
      { value: '0', label: 'ICO enforcement actions' },
    ],
    icon: '⚖️',
    color: '#e63946',
  },
  {
    id: 4,
    sector: 'Healthcare',
    tag: 'Managed IT + DSPT',
    title: 'DSPT Compliance and HSCN Connectivity for a GP Practice Group',
    client: '3-site GP Practice Group, South Yorkshire',
    challenge: 'A group of 3 GP practices was struggling to complete their annual DSPT submission, had inconsistent IT support across sites, and needed a reliable HSCN connection to support NHS system integration.',
    solution: 'We took over managed IT across all 3 sites, established redundant HSCN connections at each location, completed a full DSPT gap analysis, implemented the required controls, and supported the annual submission.',
    result: 'DSPT submission completed at Standards Met level for the first time. HSCN connections established with 99.9% uptime. Helpdesk response times improved from 4+ hours to under 45 minutes. Clinical staff report significantly improved IT confidence.',
    stats: [
      { value: 'Met', label: 'DSPT Standards achieved' },
      { value: '99.9%', label: 'HSCN uptime' },
      { value: '<45min', label: 'Avg. helpdesk response' },
    ],
    icon: '🏥',
    color: '#0a2463',
  },
  {
    id: 5,
    sector: 'Charity',
    tag: 'Microsoft 365 + Cost Savings',
    title: 'Saving a National Charity £18,000/Year in IT Costs',
    client: 'National Charity, UK (anonymised)',
    challenge: 'A charity with 60 staff was paying commercial rates for Microsoft 365 and a legacy on-premise phone system — spending over £30,000/year on IT licensing and telephony that could be dramatically reduced.',
    solution: 'We transitioned the charity to Microsoft 365 Business Premium at charity pricing, migrated their on-premise phone system to Microsoft Teams Calling, and consolidated several legacy software subscriptions.',
    result: 'Annual IT licensing cost reduced from £30,400 to £12,200 — a saving of £18,200 per year. Teams Calling replaced a £6,000/year telephone system. The savings are now redirected to front-line service delivery.',
    stats: [
      { value: '£18K', label: 'Annual saving achieved' },
      { value: '60%', label: 'Reduction in licensing costs' },
      { value: '£0', label: 'Migration project cost to charity' },
    ],
    icon: '🌱',
    color: '#16a34a',
  },
  {
    id: 6,
    sector: 'Professional Services',
    tag: 'Cloud Migration + Business Central',
    title: 'Cloud ERP Implementation for a Wholesale Distributor',
    client: 'Wholesale Distribution Business, Yorkshire',
    challenge: 'A growing distribution business was running a legacy on-premise ERP that couldn\'t scale. Stock management was partly in spreadsheets, purchase orders were manually processed, and financial reporting took days to produce.',
    solution: 'We implemented Dynamics 365 Business Central — migrating from the legacy ERP and integrating with their e-commerce platform. Power BI dashboards were built for real-time operational and financial reporting.',
    result: 'Stock accuracy improved to 99.2%. Purchase order processing time reduced by 70%. Month-end financial close went from 5 days to same-day. The business scaled headcount by 40% with no additional back-office IT investment.',
    stats: [
      { value: '99.2%', label: 'Stock accuracy achieved' },
      { value: '70%', label: 'Faster PO processing' },
      { value: 'Same-day', label: 'Month-end close' },
    ],
    icon: '🚚',
    color: '#f4833d',
  },
]

const sectorFilters = ['All', 'Manufacturing', 'Education', 'Professional Services', 'Healthcare', 'Charity']

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.sector === activeFilter)

  return (
    <PageLayout
      breadcrumb="Case Studies"
      tag="About"
      title="Client Case Studies & Success Stories"
      subtitle="Real results for real businesses. See how we've helped UK organisations across every sector improve their IT, strengthen their security, and drive genuine business outcomes."
      heroStats={[
        { value: '500+', label: 'Businesses Supported' },
        { value: '100%', label: 'Client Retention Rate' },
        { value: '4.9★', label: 'Average Client Rating' },
      ]}
    >
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">Proven Results Across Every Sector</h2>
            <p className="section-subtitle">Filter by sector to find case studies most relevant to your business.</p>
          </div>

          {/* Filter bar */}
          <div className="cs-filters">
            {sectorFilters.map(f => (
              <button
                key={f}
                className={`cs-filter-btn ${activeFilter === f ? 'cs-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Case study cards */}
          <div className="cs-grid">
            {filtered.map(cs => (
              <div key={cs.id} className="cs-card">
                <div className="cs-card__header" style={{ borderTop: `5px solid ${cs.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: '2rem' }}>{cs.icon}</span>
                    <div>
                      <span className="cs-sector-tag">{cs.sector}</span>
                      <span className="cs-service-tag">{cs.tag}</span>
                    </div>
                  </div>
                  <h3 className="cs-card__title">{cs.title}</h3>
                  <p className="cs-client">{cs.client}</p>
                </div>

                <div className="cs-card__body">
                  <div className="cs-section">
                    <div className="cs-section__label">🔴 Challenge</div>
                    <p className="cs-section__text">{cs.challenge}</p>
                  </div>
                  <div className="cs-section">
                    <div className="cs-section__label">🔵 Solution</div>
                    <p className="cs-section__text">{cs.solution}</p>
                  </div>
                  <div className="cs-section">
                    <div className="cs-section__label">🟢 Result</div>
                    <p className="cs-section__text">{cs.result}</p>
                  </div>
                </div>

                <div className="cs-card__stats">
                  {cs.stats.map(s => (
                    <div key={s.label} className="cs-stat">
                      <div className="cs-stat__value" style={{ color: cs.color }}>{s.value}</div>
                      <div className="cs-stat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Want results like these for your business?</div>
              <div className="page-cta-banner__sub">Get in touch to discuss your challenges and see how we can help you achieve similar outcomes.</div>
            </div>
            <a href="#contact" className="btn-primary">Start Your Success Story →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}