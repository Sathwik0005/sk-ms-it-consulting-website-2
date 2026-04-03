import './TopBanner.css'

const bannerItems = [
  'Reliable IT Consultancy Services for UK Businesses',
  'Web Development | Cloud Solutions | Technical Support',
  'Helping Your Business Grow with Smart Technology',
  'Managed IT Services | Cyber Security | Microsoft 365',
  'Trusted by Businesses Across the UK',
  'Reliable IT Consultancy Services for UK Businesses',
  'Web Development | Cloud Solutions | Technical Support',
  'Helping Your Business Grow with Smart Technology',
  'Managed IT Services | Cyber Security | Microsoft 365',
  'Trusted by Businesses Across the UK',
]

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="banner-track">
        {bannerItems.map((text, i) => (
          <span key={i} className="banner-item">
            <span className="banner-dot">◆</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}