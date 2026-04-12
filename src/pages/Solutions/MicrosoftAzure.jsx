import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'

const azureServices = [
  { icon: '🖥', title: 'Azure Virtual Machines', desc: 'Deploy and manage scalable Windows and Linux VMs in Azure — replacing on-premise servers with cloud-hosted compute.' },
  { icon: '🗄', title: 'Azure Storage & Databases', desc: 'Blob storage, SQL databases, Cosmos DB, and managed data services — secure, scalable, and always available.' },
  { icon: '🔗', title: 'Azure Networking', desc: 'Virtual networks, VPN gateways, Azure Firewall, and ExpressRoute to connect your office, remote users, and Azure securely.' },
  { icon: '🤖', title: 'Azure AI & Machine Learning', desc: 'Leverage Azure Cognitive Services, OpenAI integration, and custom ML models to add intelligence to your business processes.' },
  { icon: '⚙', title: 'Azure DevOps & Automation', desc: 'CI/CD pipelines, infrastructure as code, and Azure Automation to streamline development and reduce manual operations.' },
  { icon: '📊', title: 'Azure Monitor & Analytics', desc: 'Full observability across your Azure environment with dashboards, alerts, log analytics, and Application Insights.' },
]

const whyAzure = [
  { icon: '🇬🇧', title: 'UK Data Centres', desc: 'Azure has UK South and UK West regions, keeping your data within the UK for data residency and compliance requirements.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'Microsoft Defender for Cloud, Azure Sentinel SIEM, and built-in compliance tools for ISO 27001, SOC 2, and Cyber Essentials.' },
  { icon: '🤝', title: 'Microsoft Integration', desc: 'Seamless integration with Microsoft 365, Teams, Dynamics 365, and the wider Microsoft ecosystem your business already uses.' },
  { icon: '💰', title: 'Cost Flexibility', desc: 'Pay-as-you-go, reserved instances, and Azure Hybrid Benefit let you optimise spend as your usage evolves.' },
]

const steps = [
  { title: 'Azure Assessment', desc: 'We assess your current workloads and design an Azure landing zone that meets your security, compliance, and performance requirements.' },
  { title: 'Architecture Design', desc: 'Our Azure architects create a detailed solution design including networking, identity, security, and cost estimates.' },
  { title: 'Deployment & Migration', desc: 'We deploy your Azure environment and migrate workloads using proven tooling — minimising risk and downtime.' },
  { title: 'Ongoing Management', desc: 'Monitoring, patching, cost management, and continuous optimisation of your Azure environment as your business evolves.' },
]

export default function MicrosoftAzure() {
  return (
    <PageLayout
      breadcrumb="Microsoft Azure"
      tag="Solutions"
      title="Microsoft Azure Solutions & Migration"
      subtitle="As a Microsoft partner, we design, deploy, and manage Azure environments that give UK businesses the performance, security, and scalability of enterprise cloud infrastructure — without the complexity."
      heroStats={[
        { value: 'MS', label: 'Microsoft Partner' },
        { value: '99.99%', label: 'Azure SLA Uptime' },
        { value: 'UK', label: 'Data Residency Available' },
      ]}
    >
      {/* Azure services */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Azure Services</span>
            <h2 className="section-title">What We Deploy & Manage on Azure</h2>
            <p className="section-subtitle">
              From virtual machines to AI services, we cover the full breadth of the Azure platform —
              designing solutions that are right-sized for your business.
            </p>
          </div>
          <div className="benefit-grid">
            {azureServices.map(s => (
              <div key={s.title} className="benefit-card" style={{ textAlign: 'left' }}>
                <div className="benefit-card__icon">{s.icon}</div>
                <div className="benefit-card__title">{s.title}</div>
                <div className="benefit-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Azure */}
      <section className="ps ps--white">
        <div className="container">
          <div className="ps__two-col">
            <div>
              <span className="section-tag">Why Azure?</span>
              <h2 className="section-title">The Right Cloud for UK Businesses</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Azure is the cloud platform of choice for businesses already invested in the Microsoft ecosystem —
                and the most compliant option for UK data residency requirements.
              </p>
              <div className="feature-list">
                {whyAzure.map(w => (
                  <div key={w.title} className="feature-list__item">
                    <div className="feature-list__icon">{w.icon}</div>
                    <div className="feature-list__text">
                      <strong>{w.title}</strong>
                      <span>{w.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="page-visual-box">
                <div className="page-visual-box__icon">⚡</div>
                {/* Replace with: <img src="/images/azure.jpg" alt="Microsoft Azure" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:14}} /> */}
                <div className="page-visual-box__label">Replace with your image</div>
                <span>Suggested: Azure portal screenshot / architect whiteboard / data centre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ps ps--light">
        <div className="container">
          <div className="ps__header ps__header--center">
            <span className="section-tag">Our Azure Process</span>
            <h2 className="section-title">From First Discussion to Live in Azure</h2>
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

      <section className="ps ps--white">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Start your Azure journey today</div>
              <div className="page-cta-banner__sub">Free Azure assessment — we'll map your workloads and produce a costed migration plan with no obligation.</div>
            </div>
            <a href="#contact" className="btn-primary">Book an Azure Assessment →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}