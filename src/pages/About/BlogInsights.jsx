import { useState } from 'react'
import PageLayout from '../PageLayout/PageLayout'
import '../PageLayout/PageLayout.css'
import './BlogInsights.css'

const categories = ['All', 'Cyber Security', 'Cloud & Microsoft', 'Managed IT', 'Business Technology', 'Sector News']

const posts = [
  {
    id: 1,
    category: 'Cyber Security',
    title: 'Why UK SMEs Are the #1 Target for Ransomware in 2025',
    excerpt: 'Ransomware attacks on small and medium-sized UK businesses have increased by 67% in the last two years. We explain why SMEs are being targeted, what attackers want, and what you can do about it.',
    author: 'SK & MS Security Team',
    date: '12 March 2025',
    readTime: '6 min read',
    icon: '🔒',
    featured: true,
  },
  {
    id: 2,
    category: 'Cloud & Microsoft',
    title: 'Microsoft Copilot for Business: Is It Worth It in 2025?',
    excerpt: 'Microsoft Copilot promises to transform productivity using AI. But is it delivering on that promise for UK SMEs? We share our honest assessment after deploying it across 30+ client organisations.',
    author: 'SK & MS Cloud Team',
    date: '28 February 2025',
    readTime: '8 min read',
    icon: '🤖',
    featured: true,
  },
  {
    id: 3,
    category: 'Cyber Security',
    title: 'Cyber Essentials 2025: What\'s Changed and What You Need to Know',
    excerpt: 'The NCSC\'s Cyber Essentials scheme has been updated for 2025. Here\'s what\'s changed, what the new requirements mean for your business, and how to ensure you still pass certification.',
    author: 'SK & MS Security Team',
    date: '15 February 2025',
    readTime: '5 min read',
    icon: '🛡',
    featured: false,
  },
  {
    id: 4,
    category: 'Managed IT',
    title: 'In-House IT vs Managed Service Provider: The Real Cost Comparison',
    excerpt: 'Many businesses assume having in-house IT is cheaper than outsourcing. We break down the true total cost of both options — including hidden costs that rarely make it into the initial comparison.',
    author: 'SK & MS Consulting Team',
    date: '3 February 2025',
    readTime: '7 min read',
    icon: '💰',
    featured: false,
  },
  {
    id: 5,
    category: 'Sector News',
    title: 'NHS DSPT 2024/25: Key Changes for GP Practices and Dental Surgeries',
    excerpt: 'The NHS Data Security and Protection Toolkit has been updated for 2024/25. We explain the key changes, what evidence you need to gather, and how to avoid a common pitfalls that cause practices to fail.',
    author: 'SK & MS Healthcare Team',
    date: '22 January 2025',
    readTime: '6 min read',
    icon: '🏥',
    featured: false,
  },
  {
    id: 6,
    category: 'Cloud & Microsoft',
    title: 'Moving from On-Premise Exchange to Microsoft 365: A Practical Guide',
    excerpt: 'Thousands of UK businesses are still running on-premise Exchange Server. With Microsoft ending support for older versions, now is the time to migrate. Here\'s everything you need to know.',
    author: 'SK & MS Cloud Team',
    date: '10 January 2025',
    readTime: '9 min read',
    icon: '📧',
    featured: false,
  },
  {
    id: 7,
    category: 'Business Technology',
    title: 'Power Automate for SMEs: 5 Workflows That Save Hours Every Week',
    excerpt: 'Microsoft Power Automate can eliminate tedious manual tasks — but knowing where to start is half the battle. Here are 5 real-world workflows we\'ve built for UK SMEs that deliver immediate time savings.',
    author: 'SK & MS Business Apps Team',
    date: '18 December 2024',
    readTime: '5 min read',
    icon: '⚡',
    featured: false,
  },
  {
    id: 8,
    category: 'Sector News',
    title: 'Cyber Threats Facing UK Schools in 2025: What Headteachers Need to Know',
    excerpt: 'Schools are increasingly targeted by cyber criminals — and many don\'t realise it until it\'s too late. We share the specific threats facing UK education providers and practical steps to improve your defences.',
    author: 'SK & MS Education Team',
    date: '5 December 2024',
    readTime: '6 min read',
    icon: '🎓',
    featured: false,
  },
  {
    id: 9,
    category: 'Managed IT',
    title: 'What to Look for in a Managed IT Service Provider: A No-Nonsense Guide',
    excerpt: 'Choosing an MSP is one of the most important technology decisions a business can make. This guide gives you a clear framework for evaluating providers — including the questions most businesses forget to ask.',
    author: 'SK & MS Team',
    date: '20 November 2024',
    readTime: '8 min read',
    icon: '🤝',
    featured: false,
  },
]

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = posts.filter(p => p.featured)
  const filtered = activeCategory === 'All'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeCategory && !p.featured)

  const allFiltered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <PageLayout
      breadcrumb="Blog & Insights"
      tag="About"
      title="Blog & Insights"
      subtitle="Expert IT advice, sector news, and technology insights from the SK & MS IT Consulting team. Written by practitioners — not marketers."
    >
      <section className="ps ps--light">
        <div className="container">

          {/* Featured posts — only show when no filter active */}
          {activeCategory === 'All' && (
            <div style={{ marginBottom: 56 }}>
              <div className="ps__header">
                <span className="section-tag">Featured Articles</span>
                <h2 className="section-title">Latest Insights</h2>
              </div>
              <div className="blog-featured-grid">
                {featured.map(post => (
                  <div key={post.id} className="blog-featured-card">
                    <div className="blog-featured-card__img">
                      <span style={{ fontSize: '3.5rem' }}>{post.icon}</span>
                      {/* Replace with: <img src={`/images/blog/${post.id}.jpg`} alt={post.title} style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                      <span className="blog-category-badge">{post.category}</span>
                    </div>
                    <div className="blog-featured-card__body">
                      <div className="blog-meta">
                        <span>{post.author}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="blog-featured-card__title">{post.title}</h3>
                      <p className="blog-featured-card__excerpt">{post.excerpt}</p>
                      <a href="#contact" className="blog-read-more">Read article →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category filter */}
          <div className="ps__header">
            <span className="section-tag">All Articles</span>
            <h2 className="section-title">Browse by Topic</h2>
          </div>
          <div className="cs-filters" style={{ justifyContent: 'flex-start', marginBottom: 32 }}>
            {categories.map(c => (
              <button
                key={c}
                className={`cs-filter-btn ${activeCategory === c ? 'cs-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="blog-grid">
            {(activeCategory === 'All' ? posts.filter(p => !p.featured) : allFiltered).map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card__img">
                  <span style={{ fontSize: '2.5rem' }}>{post.icon}</span>
                  {/* Replace with: <img src={`/images/blog/${post.id}.jpg`} alt={post.title} style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                  <span className="blog-category-badge blog-category-badge--sm">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <a href="#contact" className="blog-read-more">Read article →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="ps ps--white">
        <div className="container">
          <div className="blog-newsletter">
            <div className="blog-newsletter__icon">📬</div>
            <div>
              <h3 className="blog-newsletter__title">Get IT Insights in Your Inbox</h3>
              <p className="blog-newsletter__sub">Monthly IT advice, security alerts, and technology news for UK businesses — no spam, unsubscribe any time.</p>
            </div>
            <div className="blog-newsletter__form">
              <input type="email" placeholder="your@email.com" className="blog-email-input" />
              <a href="#contact" className="btn-primary">Subscribe →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ps ps--light">
        <div className="container">
          <div className="page-cta-banner">
            <div>
              <div className="page-cta-banner__title">Have a specific IT question?</div>
              <div className="page-cta-banner__sub">Our consultants are happy to answer your questions — no obligation, no sales pitch.</div>
            </div>
            <a href="#contact" className="btn-primary">Ask Our Team →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}