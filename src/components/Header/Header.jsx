import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const navItems = [
  {
    label: 'Services',
    children: [
      { label: 'Managed IT Services',   href: '/services/managed-it-services' },
      { label: 'IT Support & Helpdesk', href: '/services/it-support-helpdesk' },
      { label: 'IT Consultancy',        href: '/services/it-consultancy' },
      { label: 'Co-Managed IT Support', href: '/services/co-managed-it-support' },
      { label: 'IT Procurement',        href: '/services/it-procurement' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Cloud Solutions',             href: '/solutions/cloud-solutions' },
      { label: 'Microsoft Azure',             href: '/solutions/microsoft-azure' },
      { label: 'Microsoft 365',              href: '/solutions/microsoft-365' },
      { label: 'Backup & Disaster Recovery', href: '/solutions/backup-disaster-recovery' },
      { label: 'Business Apps & ERP',        href: '/solutions/business-apps-erp' },
      { label: 'Microsoft Power Platform',   href: '/solutions/microsoft-power-platform' },
    ],
  },
  {
    label: 'Cyber Security',
    children: [
      { label: 'Cyber Security Services',  href: '/cyber-security/cyber-security-services' },
      { label: 'Cyber Essentials',         href: '/cyber-security/cyber-essentials' },
      { label: 'Endpoint Security',        href: '/cyber-security/endpoint-security' },
      { label: 'Email Security',           href: '/cyber-security/email-security' },
      { label: 'Managed Firewall',         href: '/cyber-security/managed-firewall' },
      { label: 'Security Risk Assessment', href: '/cyber-security/security-risk-assessment' },
    ],
  },
  {
    label: 'Sectors',
    children: [
      { label: 'Education & Schools',     href: '/sectors/education-schools' },
      { label: 'Manufacturing',           href: '/sectors/manufacturing' },
      { label: 'Charities & Non-Profits', href: '/sectors/charities-non-profits' },
      { label: 'Professional Services',   href: '/sectors/professional-services' },
      { label: 'Healthcare',              href: '/sectors/healthcare' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'About Us',        href: '/about/about-us' },
      { label: 'Our Team',        href: '/about/our-team' },
      { label: 'Case Studies',    href: '/about/case-studies' },
      { label: 'Blog & Insights', href: '/about/blog-insights' },
    ],
  },
]

const isRoute = (href) => href.startsWith('/')

export default function Header() {
  const [scrolled, setScrolled]             = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleChildClick = (href) => {
    setActiveDropdown(null)
    setMobileOpen(false)
    if (isRoute(href)) {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">

        <Link to="/" className="header__logo">
          <div className="logo-icon">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="8" fill="#0a2463"/>
              <path d="M10 30L22 12L34 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 30L22 18L30 30" stroke="#f4833d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">SK &amp; MS</span>
            <span className="logo-sub">IT Consulting</span>
          </div>
        </Link>

        <nav className="header__nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link">
                  {item.label}
                  <svg className="nav-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
                {item.children && (
                  <div className={`dropdown ${activeDropdown === item.label ? 'dropdown--open' : ''}`}>
                    <ul className="dropdown-list">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {isRoute(child.href) ? (
                            <Link
                              to={child.href}
                              className="dropdown-link"
                              onClick={() => handleChildClick(child.href)}
                            >
                              <span className="dropdown-arrow">→</span>
                              {child.label}
                            </Link>
                          ) : (
                            <a href={child.href} className="dropdown-link">
                              <span className="dropdown-arrow">→</span>
                              {child.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="header__cta">Contact Us →</a>

        <button className="header__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              <button
                className="mobile-nav-link"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <svg className={`nav-chevron ${mobileExpanded === item.label ? 'rotated' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              {mobileExpanded === item.label && item.children && (
                <ul className="mobile-dropdown">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      {isRoute(child.href) ? (
                        <Link
                          to={child.href}
                          className="mobile-dropdown-link"
                          onClick={() => handleChildClick(child.href)}
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <a
                          href={child.href}
                          className="mobile-dropdown-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Contact Us →</a>
          </li>
        </ul>
      </div>
    </header>
  )
}