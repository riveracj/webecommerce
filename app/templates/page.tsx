'use client'

import { useState, useEffect, useMemo } from 'react'
import TemplateCard from '@/components/TemplateCard'
import PageHeader from '@/components/PageHeader'
import Newsletter from '@/components/Newsletter'
import { templates, filterCategories } from '@/lib/data'

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState('newest')

  const filtered = useMemo(() => {
    let result = activeFilter === 'all'
      ? templates
      : templates.filter(t => t.category.toLowerCase() === activeFilter)
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break
    }
    return result
  }, [activeFilter, sortBy])

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
  }, [filtered])

  return (
    <>
      <PageHeader
        title="All Templates"
        description="Browse our collection of 1,200+ premium website templates."
        crumbs={[{ href: '/templates', label: 'Templates' }]}
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filters-bar">
            <div className="filter-group">
              {filterCategories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <span className="result-count">Showing {filtered.length} results</span>
              <select
                className="sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label="Sort templates"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
          <div className="templates-grid">
            {filtered.map(t => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
          {filtered.length > 8 && (
            <div className="pagination" role="navigation" aria-label="Pagination">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">&rarr;</a>
            </div>
          )}
        </div>
      </section>
      <Newsletter
        tag="Stay Updated"
        title="Never miss a new template"
        subtitle="Join 15,000+ creators who get weekly updates on new templates and exclusive discounts."
      />
    </>
  )
}
