import Link from 'next/link'

export default function CategoryCard({
  icon, name, count, slug, href,
}: {
  icon: string; name: string; count: number; slug: string; href?: string
}) {
  return (
    <Link href={href || `/templates?category=${slug}`} className="category-card fade-in">
      <div className="cat-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3>{name}</h3>
      <p>{count} Templates</p>
    </Link>
  )
}
