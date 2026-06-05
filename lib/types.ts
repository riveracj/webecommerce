export interface Template {
  slug: string
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  sales: number
  description: string
  features: string[]
  bgClass: string
  framework: string
  files: string
  lastUpdated: string
  relatedSlugs: string[]
}

export interface Category {
  name: string
  slug: string
  count: number
  icon: string
}

export interface TeamMember {
  initials: string
  name: string
  role: string
  gradient: string
}

export interface Testimonial {
  initials: string
  name: string
  title: string
  quote: string
  gradient: string
  stars: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface Stat {
  number: string
  label: string
  primary?: boolean
}
