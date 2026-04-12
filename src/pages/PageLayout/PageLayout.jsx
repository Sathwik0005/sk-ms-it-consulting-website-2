import { Link } from 'react-router-dom'
import ContactSection from '../../components/ContactSection/ContactSection'
import './PageLayout.css'

/**
 * Shared wrapper for all service pages.
 *
 * Props:
 *  - breadcrumb     string   e.g. "Managed IT Services"
 *  - tag            string   e.g. "Services"
 *  - title          string   main H1
 *  - subtitle       string   lead paragraph
 *  - heroStats      array    [{ value, label }]  (optional, max 3)
 *  - children       JSX      page body content
 */
export default function PageLayout({ breadcrumb, tag, title, subtitle, heroStats, children }) {
  return (
    <main className="page">

      {/* ── Page Hero ─────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          {/* Breadcrumb */}
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="bc-sep">›</span>
            <span>{breadcrumb}</span>
          </nav>

          <span className="page-tag">{tag}</span>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>

          <div className="page-hero__actions">
            <a href="#contact" className="btn-primary">
              Get a Free Consultation →
            </a>
            <Link to="/" className="btn-outline-white">
              ← Back to Home
            </Link>
          </div>

          {heroStats && heroStats.length > 0 && (
            <div className="page-hero__stats">
              {heroStats.map(s => (
                <div key={s.label} className="page-stat">
                  <span className="page-stat__value">{s.value}</span>
                  <span className="page-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Page Body ─────────────────────────────── */}
      <div className="page-body">
        {children}
      </div>

      {/* ── Contact ───────────────────────────────── */}
      <ContactSection />
    </main>
  )
}