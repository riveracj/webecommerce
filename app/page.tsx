'use client'

import Link from 'next/link'
import TemplateCard from '@/components/TemplateCard'
import CategoryCard from '@/components/CategoryCard'
import Newsletter from '@/components/Newsletter'
import { templates, categoriesList, heroStats } from '@/lib/data'
import { useEffect } from 'react'

export default function HomePage() {
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
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="tag">Premium Templates</span>
              <h1>Beautiful Templates for <span>Modern Websites</span></h1>
              <p>Discover 1,200+ professional, responsive website templates built for speed, SEO, and stunning design. Launch your next project in minutes.</p>
              <form className="hero-search" onSubmit={e => e.preventDefault()} role="search">
                <input type="search" placeholder="Search templates..." aria-label="Search templates" />
                <button type="submit">Search</button>
              </form>
              <div className="hero-stats">
                {heroStats.map(s => (
                  <div className="stat" key={s.label}>
                    <h3>{s.number}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              {templates.slice(0, 4).map((t, i) => (
                <Link key={t.slug} href={`/templates/${t.slug}`} className="card-preview fade-in">
                  <div className={`preview-img ${t.bgClass}`} />
                  <div className="preview-info">
                    <h4>{t.name}</h4>
                    <span className="price">${t.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag">Collection</span>
            <h2>Featured Templates</h2>
            <p>Hand-picked templates loved by thousands of creators worldwide.</p>
          </div>
          <div className="templates-grid">
            {templates.map(t => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag">Categories</span>
            <h2>Browse by Category</h2>
            <p>Find exactly what you need from our curated collection of template categories.</p>
          </div>
          <div className="categories-grid">
            {categoriesList.map(c => (
              <CategoryCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
