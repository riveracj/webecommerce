'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { faqs } from '@/lib/data'

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen || false)

  return (
    <div className={`faq-item${open ? ' active' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="icon">+</span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
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
        title="Frequently Asked Questions"
        description="Everything you need to know about WebStore templates, licensing, and support."
        crumbs={[{ href: '/faq', label: 'FAQ' }]}
      />
      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content fade-in">
            <span className="tag" style={{ background: 'var(--secondary)' }}>Help</span>
            <h2>Still have questions?</h2>
            <p>Our support team is here to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  )
}
