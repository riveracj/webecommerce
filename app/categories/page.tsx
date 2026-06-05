'use client'

import { useEffect } from 'react'
import CategoryCard from '@/components/CategoryCard'
import PageHeader from '@/components/PageHeader'
import Newsletter from '@/components/Newsletter'
import { categories } from '@/lib/data'

export default function CategoriesPage() {
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
        title="Template Categories"
        description="Explore our curated categories to find the perfect template for your project."
        crumbs={[{ href: '/categories', label: 'Categories' }]}
      />
      <section className="section">
        <div className="container">
          <div className="categories-grid">
            {categories.map(c => (
              <CategoryCard key={c.slug} {...c} href={`/templates?category=${c.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
