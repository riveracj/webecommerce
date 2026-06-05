'use client'

export default function Newsletter({ tag = 'Stay Updated', title, subtitle }: { tag?: string, title?: string, subtitle?: string }) {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content fade-in">
          <span className="tag" style={{ background: 'var(--secondary)' }}>{tag}</span>
          <h2>{title || 'Get notified about new templates'}</h2>
          <p>{subtitle || 'Subscribe to our newsletter and be the first to know about new releases, discounts, and design tips.'}</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required aria-label="Email for newsletter" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
