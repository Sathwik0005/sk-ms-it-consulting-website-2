import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'
import './OurTeam.css'

const teamMembers = [
  {
    name: 'Placeholder — CEO / Founder',
    role: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in IT infrastructure and managed services, our CEO founded SK & MS IT Consulting with a vision to deliver enterprise-grade IT to UK businesses without the enterprise price tag.',
    specialisms: ['IT Strategy', 'Business Development', 'Cloud Architecture'],
    certifications: ['Microsoft Certified', 'ITIL v4'],
    initials: 'SK',
    color: '#0a2463',
  },
  {
    name: 'Placeholder — CTO / Co-Founder',
    role: 'Chief Technology Officer',
    bio: 'Our CTO brings deep technical expertise across Microsoft Azure, cyber security, and network infrastructure. He leads our technical delivery team and sets our engineering standards.',
    specialisms: ['Azure Architecture', 'Cyber Security', 'Network Engineering'],
    certifications: ['Azure Solutions Architect', 'SC-200 Security'],
    initials: 'MS',
    color: '#e63946',
  },
  {
    name: 'Placeholder — Head of Cyber Security',
    role: 'Head of Cyber Security',
    bio: 'Leading our cyber security practice, with expertise in threat detection, incident response, and compliance frameworks including Cyber Essentials, ISO 27001, and the DSPT.',
    specialisms: ['Threat Detection', 'Compliance Frameworks', 'Incident Response'],
    certifications: ['CISSP', 'Cyber Essentials Assessor'],
    initials: 'CS',
    color: '#1340a8',
  },
  {
    name: 'Placeholder — Senior IT Engineer',
    role: 'Senior IT Engineer',
    bio: 'A versatile engineer specialising in Microsoft 365 deployments, endpoint management, and helpdesk escalations. Known for resolving the toughest technical challenges with calm efficiency.',
    specialisms: ['Microsoft 365', 'Endpoint Management', 'Server Infrastructure'],
    certifications: ['Microsoft 365 Admin', 'CompTIA Network+'],
    initials: 'SE',
    color: '#f4833d',
  },
  {
    name: 'Placeholder — Cloud Solutions Architect',
    role: 'Cloud Solutions Architect',
    bio: 'Designing and delivering cloud migrations and Azure environments for clients across manufacturing, healthcare, and professional services — with a focus on resilience and cost optimisation.',
    specialisms: ['Azure Migration', 'Cloud Cost Optimisation', 'Hybrid Infrastructure'],
    certifications: ['Azure Administrator', 'Azure DevOps Engineer'],
    initials: 'CA',
    color: '#0a2463',
  },
  {
    name: 'Placeholder — Client Success Manager',
    role: 'Client Success Manager',
    bio: 'Our Client Success Manager is the primary point of contact for key accounts — ensuring clients receive proactive service, regular reviews, and technology that genuinely aligns to their business goals.',
    specialisms: ['Account Management', 'Service Reviews', 'Client Onboarding'],
    certifications: ['ITIL v4', 'Microsoft Fundamentals'],
    initials: 'CM',
    color: '#16a34a',
  },
]

const culture = [
  { icon: '📚', title: 'Continuous Learning', desc: 'Every team member has a dedicated training budget and time allocated for certifications, conferences, and learning.' },
  { icon: '🤝', title: 'Collaborative Culture', desc: 'We solve problems together. No siloed departments — just one team working towards the best outcome for our clients.' },
  { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible working, fair hours, and a team that genuinely looks out for each other — because happy people do their best work.' },
  { icon: '🌱', title: 'Room to Grow', desc: 'From apprentice to architect — we invest in people\'s careers and promote from within wherever possible.' },
]

export default function OurTeam() {
  return (
    <PageLayout
      breadcrumb="Our Team"
      tag="About"
      title="Meet the People Behind SK & MS IT Consulting"
      subtitle="Our team of certified engineers, consultants, and account managers are the reason our clients stay with us for years. Real people. Real expertise. Real care."
      heroStats={[
        { value: '20+', label: 'Certified Engineers' },
        { value: '50+', label: 'Certifications Held' },
        { value: '100%', label: 'UK Based' },
      ]}
    >
      {/* Team grid */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our People</span>
            <h2 className="section-title">The Team You'll Work With</h2>
            <p className="section-subtitle">
              Every member of our team is certified, experienced, and committed to delivering outstanding service.
              Replace the placeholders below with your actual team photos and bios.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-card__photo">
                  {/* Replace the avatar below with:
                      <img src="/images/team/member-name.jpg" alt={member.name} />
                  */}
                  <div className="team-avatar" style={{ background: member.color }}>
                    {member.initials}
                  </div>
                  <div className="team-card__photo-label">Replace with photo</div>
                </div>
                <div className="team-card__body">
                  <div className="team-card__name">{member.name}</div>
                  <div className="team-card__role">{member.role}</div>
                  <p className="team-card__bio">{member.bio}</p>
                  <div className="team-card__specialisms">
                    {member.specialisms.map(s => (
                      <span key={s} className="specialism-tag">{s}</span>
                    ))}
                  </div>
                  <div className="team-card__certs">
                    {member.certifications.map(c => (
                      <span key={c} className="cert-tag">✓ {c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            These are placeholder profiles. Add your actual team members' names, photos, and bios to make this page shine.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Culture</span>
            <h2 className="section-title">What Makes Us a Great Place to Work</h2>
            <p className="section-subtitle">
              We believe that exceptional client service starts with an exceptional team environment.
            </p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {culture.map(c => (
              <div key={c.title} className="benefit-card">
                <div className="benefit-card__icon">{c.icon}</div>
                <div className="benefit-card__title">{c.title}</div>
                <div className="benefit-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Join the Team</span>
              <h2 className="section-title">We're Always Looking for Great People</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 24 }}>
                If you're a passionate IT professional looking to work in a collaborative, client-focused environment where your work genuinely matters — we'd love to hear from you.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
                We hire for attitude and train for skill. If you're curious, committed, and care about delivering great service — send us your CV.
              </p>
              <ul className="checklist" style={{ marginBottom: 32 }}>
                <li>Competitive salary and benefits</li>
                <li>Training budget and certification support</li>
                <li>Flexible and hybrid working</li>
                <li>Career progression pathways</li>
                <li>Supportive, collaborative team</li>
              </ul>
              <a href="mailto:info@skmsit.com" className="btn-primary">Send Your CV →</a>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">👥</div>
                {/* Replace with: <img src="/images/team-group.jpg" alt="SK & MS IT Team" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Full team photo / team at work / office environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Want to work with our team?</div>
              <div className="page-cta-banner__sub">Get in touch today and speak directly with one of our consultants — no call centres, no bots.</div>
            </div>
            <a href="#contact" className="btn-primary">Contact Our Team →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}