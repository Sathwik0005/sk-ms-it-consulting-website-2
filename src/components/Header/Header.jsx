import { useState, useEffect } from 'react'
import logo from '../assets/website-logo.png'
import './Header.css'

const navItems = [
  {
    label: 'Services',
    children: [
      { label: 'Managed IT Services', href: '#services' },
      { label: 'IT Support & Helpdesk', href: '#services' },
      { label: 'IT Consultancy', href: '#services' },
      { label: 'Co-Managed IT Support', href: '#services' },
      { label: 'IT Procurement', href: '#services' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Cloud Solutions', href: '#solutions' },
      { label: 'Microsoft Azure', href: '#solutions' },
      { label: 'Microsoft 365', href: '#solutions' },
      { label: 'Backup & Disaster Recovery', href: '#solutions' },
      { label: 'Business Apps & ERP', href: '#solutions' },
      { label: 'Microsoft Power Platform', href: '#solutions' },
    ],
  },
  {
    label: 'Cyber Security',
    children: [
      { label: 'Cyber Security Services', href: '#cyber' },
      { label: 'Cyber Essentials', href: '#cyber' },
      { label: 'Endpoint Security', href: '#cyber' },
      { label: 'Email Security', href: '#cyber' },
      { label: 'Managed Firewall', href: '#cyber' },
      { label: 'Security Risk Assessment', href: '#cyber' },
    ],
  },
  {
    label: 'Sectors',
    children: [
      { label: 'Education & Schools', href: '#sectors' },
      { label: 'Manufacturing', href: '#sectors' },
      { label: 'Charities & Non-Profits', href: '#sectors' },
      { label: 'Professional Services', href: '#sectors' },
      { label: 'Healthcare', href: '#sectors' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Case Studies', href: '#about' },
      { label: 'Blog & Insights', href: '#about' },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        {/* Logo */}
        <a href="#" className="header__logo">
          <div className="logo-section">
            <img src={logo} className='logo-img' />
          </div>
          <div className="logo-text">
            <span className="logo-name">SK &amp; MS</span>
            <span className="logo-sub">IT Consulting</span>
          </div>
        </a>

        {/* Desktop Nav */}
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
                          <a href={child.href} className="dropdown-link">
                            <span className="dropdown-arrow">→</span>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#contact" className="header__cta">
          Contact Us →
        </a>

        {/* Mobile Toggle */}
        <button className="header__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={mobileOpen ? 'bar bar--open' : 'bar'}></span>
        </button>
      </div>

      {/* Mobile Menu */}
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
                      <a href={child.href} className="mobile-dropdown-link" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </a>
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