import Link from 'next/link'

const breadcrumbMap: Record<string, { href: string; label: string }> = {
  templates: { href: '/templates', label: 'Templates' },
  categories: { href: '/categories', label: 'Categories' },
  about: { href: '/about', label: 'About' },
  contact: { href: '/contact', label: 'Contact' },
  faq: { href: '/faq', label: 'FAQ' },
}

export default function PageHeader({
  title, description, crumbs,
}: {
  title: string; description: string; crumbs?: { href: string; label: string }[]
}) {
  const items = crumbs || []
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          {items.map((c, i) => (
            <span key={i}>
              <span className="sep">/</span>
              {i === items.length - 1 ? <span>{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
