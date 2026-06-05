import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import TemplateCard from '@/components/TemplateCard'
import PageHeader from '@/components/PageHeader'
import Newsletter from '@/components/Newsletter'
import { templates, getTemplateBySlug, getRelatedTemplates } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return templates.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTemplateBySlug(params.slug)
  if (!t) return {}
  return {
    title: t.name,
    description: t.description,
  }
}

export default function TemplateDetailPage({ params }: Props) {
  const t = getTemplateBySlug(params.slug)
  if (!t) notFound()

  const related = getRelatedTemplates(t.relatedSlugs)

  return (
    <>
      <PageHeader
        title={t.name}
        description={t.description}
        crumbs={[
          { href: '/templates', label: 'Templates' },
          { href: `/templates/${t.slug}`, label: t.name },
        ]}
      />
      <section className="template-detail">
        <div className="container">
          <div className="template-detail-grid">
            <div>
              <div className={`preview-large ${t.bgClass}`}>
                <span style={{ fontFamily: 'var(--mono)', color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>
                  {t.name} Preview
                </span>
              </div>
              <div className="preview-thumbs">
                <div className={`thumb active ${t.bgClass}`}>Main</div>
                <div className="thumb bg-2">About</div>
                <div className="thumb bg-3">Features</div>
                <div className="thumb bg-4">Pricing</div>
              </div>
              <div className="template-features">
                <h3>What&apos;s Included</h3>
                <ul>
                  {t.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>
            <div className="template-sidebar">
              <div className="sidebar-card">
                <div className="price-large">
                  ${t.price}
                  {t.originalPrice && <span className="original">${t.originalPrice}</span>}
                </div>
                <p className="price-note">One-time payment, lifetime access</p>
                <a href="#" className="btn btn-primary btn-lg">Purchase Now</a>
                <a href="#" className="btn" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'transparent', color: 'var(--dark)', border: '2px solid var(--gray-200)' }}>Live Preview</a>
                <div className="template-meta">
                  <div className="meta-row"><span className="label">Category</span><span className="value">{t.category}</span></div>
                  <div className="meta-row"><span className="label">Rating</span><span className="value">&#9733; {t.rating} / 5.0</span></div>
                  <div className="meta-row"><span className="label">Sales</span><span className="value">{t.sales.toLocaleString()}</span></div>
                  <div className="meta-row"><span className="label">Last Updated</span><span className="value">{t.lastUpdated}</span></div>
                  <div className="meta-row"><span className="label">Framework</span><span className="value">{t.framework}</span></div>
                  <div className="meta-row"><span className="label">Files</span><span className="value">{t.files}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag">Related</span>
            <h2>Similar Templates</h2>
            <p>You might also like these templates.</p>
          </div>
          <div className="templates-grid">
            {related.map(r => <TemplateCard key={r.slug} template={r} />)}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
