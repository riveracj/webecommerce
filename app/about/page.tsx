'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Newsletter from '@/components/Newsletter'
import { stats, teamMembers, testimonials } from '@/lib/data'

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHeader
        title="About WebStore"
        description="We help creators and businesses launch beautiful websites faster."
        crumbs={[{ href: '/about', label: 'About' }]}
      />
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 48 }}>
            <div className="hero-content fade-in">
              <span className="tag">Our Story</span>
              <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)' }}>Empowering creators with <span>world-class templates</span></h1>
              <p>Founded in 2020, WebStore started with a simple mission: make professional web design accessible to everyone. What began as a small collection of templates has grown into a marketplace with over 1,200 premium designs serving 15,000+ customers worldwide.</p>
              <p>Every template in our marketplace is hand-crafted by experienced designers and rigorously tested for performance, accessibility, and responsiveness across all devices.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fade-in">
              {stats.map(s => (
                <div
                  key={s.label}
                  className="stat-card"
                  style={
                    s.primary
                      ? { background: 'var(--primary)', color: 'var(--white)', borderColor: 'var(--primary)' }
                      : { borderColor: 'transparent', boxShadow: 'var(--shadow-md)' }
                  }
                >
                  <div className="number" style={s.primary ? { color: 'var(--white)' } : undefined}>{s.number}</div>
                  <div className="label" style={s.primary ? { color: 'rgba(255,255,255,0.7)' } : undefined}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag">Team</span>
            <h2>Meet Our Team</h2>
            <p>A passionate team of designers, developers, and creators.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(m => (
              <div key={m.name} className="team-card fade-in">
                <div className="avatar" style={{ background: m.gradient }}>{m.initials}</div>
                <h4>{m.name}</h4>
                <span className="role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section testimonials">
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag">Testimonials</span>
            <h2>What Our Customers Say</h2>
            <p>Join 15,000+ satisfied customers who trust WebStore for their template needs.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card fade-in">
                <div className="stars">{'&#9733; '.repeat(t.stars)}</div>
                <blockquote>{t.quote}</blockquote>
                <div className="author">
                  <div className="author-avatar" style={{ background: t.gradient }}>{t.initials}</div>
                  <div className="author-info">
                    <h5>{t.name}</h5>
                    <span>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter
        tag="Join Us"
        title="Be part of our growing community"
        subtitle="Subscribe to get exclusive access to new templates, discounts, and design resources."
      />
    </>
  )
}
