import Link from 'next/link'
import type { Template } from '@/lib/types'

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="template-card fade-in" data-category={template.category.toLowerCase()} data-price={template.price}>
      <div className={`card-image ${template.bgClass}`}>
        <span className="template-label">{template.name}</span>
        <div className="overlay">
          <Link href={`/templates/${template.slug}`} className="btn btn-primary btn-sm">Preview</Link>
          <Link href={`/templates/${template.slug}`} className="btn btn-outline btn-sm">Details</Link>
        </div>
      </div>
      <div className="card-body">
        <span className="card-category">{template.category}</span>
        <h3>{template.name}</h3>
        <p>{template.description}</p>
        <div className="card-footer">
          <span className="price">
            ${template.price}
            {template.originalPrice && <span className="original">${template.originalPrice}</span>}
          </span>
          <span className="rating">&#9733; {template.rating}</span>
        </div>
      </div>
    </div>
  )
}
