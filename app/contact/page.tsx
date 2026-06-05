'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import { contactInfo } from '@/lib/data'

export default function ContactPage() {
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
        title="Get in Touch"
        description="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        crumbs={[{ href: '/contact', label: 'Contact' }]}
      />
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h3>Let&apos;s talk about your project</h3>
              <p>Whether you need help choosing a template, have a technical question, or want to discuss a partnership — we&apos;re here for you.</p>
              <div className="info-item">
                <div className="info-icon">&#9993;</div>
                <div>
                  <h4>Email Us</h4>
                  {contactInfo.email.map(e => <p key={e}>{e}</p>)}
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">&#9742;</div>
                <div>
                  <h4>Call Us</h4>
                  {contactInfo.phone.map(p => <p key={p}>{p}</p>)}
                  <p>{contactInfo.hours}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">&#9873;</div>
                <div>
                  <h4>Visit Us</h4>
                  {contactInfo.address.map(a => <p key={a}>{a}</p>)}
                </div>
              </div>
            </div>
            <form className="contact-form fade-in" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us how we can help..." required />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
