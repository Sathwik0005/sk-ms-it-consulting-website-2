import './Footer.css'
import logo from '../assets/website-logo.png'

const footerLinks = {
  Services: [
    { label: 'Managed IT Services', href: '#services' },
    { label: 'IT Support & Helpdesk', href: '#services' },
    { label: 'IT Consultancy', href: '#services' },
    { label: 'IT Procurement', href: '#services' },
    { label: 'Unified Communications', href: '#services' },
  ],
  Solutions: [
    { label: 'Cloud Solutions', href: '#solutions' },
    { label: 'Microsoft Azure', href: '#solutions' },
    { label: 'Microsoft 365', href: '#solutions' },
    { label: 'Backup & Disaster Recovery', href: '#solutions' },
    { label: 'Business Apps & ERP', href: '#solutions' },
  ],
  'Cyber Security': [
    { label: 'Cyber Security Services', href: '#cyber' },
    { label: 'Cyber Essentials', href: '#cyber' },
    { label: 'Endpoint Security', href: '#cyber' },
    { label: 'Email Security', href: '#cyber' },
    { label: 'Security Assessment', href: '#cyber' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Sectors We Serve', href: '#sectors' },
    { label: 'Blog & Insights', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} className='footer-logo-img' />
              <div>
                <div className="footer-logo-name">SK &amp; MS IT Consulting</div>
                <div className="footer-logo-tag">Crafting Digital Advantage</div>
              </div>
            </div>

            <p className="footer__desc">
              UK-based IT consultancy delivering managed services, cloud solutions,
              and cyber security for businesses across England and Wales.
            </p>

            <div className="footer__contact-quick">
              <a href="mailto:info@skmsit.com" className="footer-contact-link">
                <span>✉</span> info@skmsit.com
              </a>
              <a href="https://skmsitconsulting.co.uk" target="_blank" rel="noreferrer" className="footer-contact-link">
                <span>🌐</span> skmsitconsulting.co.uk
              </a>
              <div className="footer-contact-link">
                <span>📍</span> 4 Wesleyan Court, Everton, Doncaster, DN10 5DN
              </div>
            </div>

            <div className="footer__social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer__col">
              <h4 className="footer__col-title">{category}</h4>
              <ul className="footer__col-links">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} SK &amp; MS IT Consulting Ltd. All rights reserved.
            Registered in England &amp; Wales | Company No: 17083873
          </p>
          <div className="footer__legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}