import { Template, Category, TeamMember, Testimonial, FAQ, Stat } from './types'

export const templates: Template[] = [
  {
    slug: 'startup-pro',
    name: 'Startup Pro',
    category: 'Business',
    price: 49,
    originalPrice: 79,
    rating: 4.9,
    sales: 2847,
    description: 'Modern startup landing page with animated sections and dark mode support.',
    features: ['6 Pre-built Pages', 'Dark & Light Mode', 'Fully Responsive', 'SEO Optimized', 'Animated Sections', 'Contact Form', 'Google Fonts', 'Font Awesome Icons', 'Bootstrap 5', 'W3C Valid HTML', 'Well Documented', '24/7 Support'],
    bgClass: 'bg-1',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'June 2026',
    relatedSlugs: ['agency-pro', 'landing-kit', 'enterprise'],
  },
  {
    slug: 'shoply',
    name: 'Shoply',
    category: 'E-Commerce',
    price: 59,
    rating: 4.8,
    sales: 2134,
    description: 'Full-featured e-commerce template with product filters and cart functionality.',
    features: ['Product Gallery', 'Shopping Cart', 'Checkout Flow', 'Wishlist', 'Product Filters', 'Search', 'Customer Reviews', 'Inventory Management', 'Multi-Currency', 'Coupon System', 'Order Tracking', 'Responsive'],
    bgClass: 'bg-2',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'May 2026',
    relatedSlugs: ['market-pro', 'startup-pro'],
  },
  {
    slug: 'agency-pro',
    name: 'AgencyPro',
    category: 'Business',
    price: 39,
    originalPrice: 59,
    rating: 4.7,
    sales: 1876,
    description: 'Creative agency template with portfolio grid, testimonial carousel, and blog.',
    features: ['Portfolio Grid', 'Testimonial Carousel', 'Blog Layout', 'Service Pages', 'Team Section', 'Contact Form', 'Client Showcase', 'Dark Mode', 'Animation Library', 'Mailchimp Integration'],
    bgClass: 'bg-3',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'May 2026',
    relatedSlugs: ['startup-pro', 'showcase'],
  },
  {
    slug: 'blog-kit',
    name: 'BlogKit',
    category: 'Blog',
    price: 29,
    rating: 4.9,
    sales: 3210,
    description: 'Clean, minimal blog template with multiple layouts and reading time estimation.',
    features: ['Multiple Layouts', 'Reading Time', 'Category Filter', 'Search', 'Author Pages', 'Newsletter Form', 'Related Posts', 'Social Share', 'AMP Ready', 'Dark Mode', 'Disqus Comments'],
    bgClass: 'bg-4',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'June 2026',
    relatedSlugs: ['minimal-blog', 'startup-pro'],
  },
  {
    slug: 'portfolio-x',
    name: 'Portfolio X',
    category: 'Portfolio',
    price: 44,
    rating: 4.6,
    sales: 1543,
    description: 'Showcase your work with style. Features masonry grid, lightbox, and smooth transitions.',
    features: ['Masonry Grid', 'Lightbox Gallery', 'Smooth Transitions', 'Filter Categories', 'Fullscreen Mode', 'Video Support', 'Client Area', 'Contact Form', 'Parallax Effect', 'Custom Cursor'],
    bgClass: 'bg-5',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'April 2026',
    relatedSlugs: ['showcase', 'agency-pro'],
  },
  {
    slug: 'saas-dashboard',
    name: 'SaaS Dashboard',
    category: 'SaaS',
    price: 69,
    originalPrice: 89,
    rating: 4.8,
    sales: 1234,
    description: 'Enterprise-grade dashboard template with charts, tables, and user management.',
    features: ['Analytics Charts', 'Data Tables', 'User Management', 'Role Permissions', 'Activity Logs', 'Notification System', 'Settings Panel', 'API Integration', 'Multi-Tenant', 'Dark Mode', 'Export Data'],
    bgClass: 'bg-6',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'June 2026',
    relatedSlugs: ['app-dash', 'enterprise'],
  },
  {
    slug: 'landing-kit',
    name: 'Landing Kit',
    category: 'Business',
    price: 34,
    rating: 4.5,
    sales: 2890,
    description: 'Conversion-optimized landing page with A/B testing components and analytics.',
    features: ['A/B Testing', 'Analytics Dashboard', 'Lead Forms', 'Countdown Timer', 'Social Proof', 'Video Background', 'Split Testing', 'CRM Integration', 'GDPR Compliant', 'Fast Loading'],
    bgClass: 'bg-7',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'May 2026',
    relatedSlugs: ['startup-pro', 'agency-pro'],
  },
  {
    slug: 'market-pro',
    name: 'MarketPro',
    category: 'E-Commerce',
    price: 79,
    originalPrice: 99,
    rating: 4.9,
    sales: 987,
    description: 'Multi-vendor marketplace template with seller dashboard and payment integration.',
    features: ['Vendor Dashboard', 'Payment Gateway', 'Product Listings', 'Order Management', 'Reviews System', 'Messaging System', 'Shipping Calculator', 'Tax Management', 'Multi-Language', 'Analytics'],
    bgClass: 'bg-8',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'June 2026',
    relatedSlugs: ['shoply', 'app-dash'],
  },
  {
    slug: 'minimal-blog',
    name: 'Minimal Blog',
    category: 'Blog',
    price: 24,
    rating: 4.7,
    sales: 4321,
    description: 'Distraction-free reading experience with beautiful typography and dark mode.',
    features: ['Clean Typography', 'Dark Mode', 'Reading Progress', 'Table of Contents', 'Code Highlighting', 'Image Gallery', 'Newsletter CTA', 'Social Sharing', 'Search', 'Tags & Categories'],
    bgClass: 'bg-9',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'May 2026',
    relatedSlugs: ['blog-kit', 'portfolio-x'],
  },
  {
    slug: 'showcase',
    name: 'Showcase',
    category: 'Portfolio',
    price: 54,
    rating: 4.8,
    sales: 876,
    description: 'Premium portfolio for photographers and visual artists with fullscreen galleries.',
    features: ['Fullscreen Gallery', 'Lightbox', 'Grid Layouts', 'Client Proofing', 'Download Manager', 'Watermarking', 'Blog Section', 'Contact Form', 'Social Links', 'SEO Optimized'],
    bgClass: 'bg-10',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'April 2026',
    relatedSlugs: ['portfolio-x', 'agency-pro'],
  },
  {
    slug: 'app-dash',
    name: 'AppDash',
    category: 'SaaS',
    price: 49,
    rating: 4.6,
    sales: 1654,
    description: 'Lightweight app dashboard with real-time data visualization and team management.',
    features: ['Real-Time Charts', 'Team Management', 'Task Board', 'Calendar View', 'File Upload', 'Activity Feed', 'Search & Filter', 'Role Based Access', 'API Ready', 'Responsive'],
    bgClass: 'bg-11',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'May 2026',
    relatedSlugs: ['saas-dashboard', 'market-pro'],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    category: 'Business',
    price: 89,
    originalPrice: 129,
    rating: 4.9,
    sales: 654,
    description: 'Complete corporate website with investor relations, careers, and multi-language support.',
    features: ['Corporate Pages', 'Investor Relations', 'Careers Portal', 'Multi-Language', 'Newsroom', 'Event Calendar', 'Resource Library', 'Leadership Team', 'Press Kit', 'Advanced Analytics'],
    bgClass: 'bg-12',
    framework: 'Bootstrap 5',
    files: 'HTML, CSS, JS',
    lastUpdated: 'June 2026',
    relatedSlugs: ['startup-pro', 'saas-dashboard'],
  },
]

export const categories: Category[] = [
  { name: 'Business', slug: 'business', count: 320, icon: '\u2604' },
  { name: 'E-Commerce', slug: 'ecommerce', count: 215, icon: '\uD83D\uDCE6' },
  { name: 'Blog', slug: 'blog', count: 180, icon: '\u270D' },
  { name: 'Portfolio', slug: 'portfolio', count: 145, icon: '\uD83D\uDC64' },
  { name: 'SaaS', slug: 'saas', count: 120, icon: '\u2601' },
  { name: 'Landing Pages', slug: 'landing', count: 220, icon: '\uD83D\uDCBB' },
  { name: 'Finance', slug: 'finance', count: 85, icon: '\uD83D\uDCB0' },
  { name: 'Education', slug: 'education', count: 95, icon: '\uD83C\uDF93' },
  { name: 'Real Estate', slug: 'real-estate', count: 65, icon: '\uD83C\uDFE0' },
  { name: 'Fitness', slug: 'fitness', count: 45, icon: '\uD83D\uDCAA' },
  { name: 'Restaurant', slug: 'restaurant', count: 55, icon: '\uD83C\uDF7D' },
  { name: 'Technology', slug: 'technology', count: 110, icon: '\uD83D\uDEE0' },
]

export const teamMembers: TeamMember[] = [
  { initials: 'S', name: 'Sarah Chen', role: 'CEO & Founder', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { initials: 'M', name: 'Marcus Rivera', role: 'Lead Designer', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { initials: 'A', name: 'Alex Thompson', role: 'Head of Engineering', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { initials: 'E', name: 'Emily Park', role: 'Customer Success', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
]

export const testimonials: Testimonial[] = [
  {
    initials: 'JD',
    name: 'James Donovan',
    title: 'Founder, TechStart',
    quote: 'WebStore templates saved us weeks of development time. The code quality is exceptional and the designs are stunning out of the box.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    stars: 5,
  },
  {
    initials: 'LK',
    name: 'Lisa Kim',
    title: 'Design Lead, CreativeCo',
    quote: 'I\'ve purchased templates from many marketplaces, but WebStore\'s quality and support are unmatched. Highly recommended for any serious project.',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    stars: 5,
  },
  {
    initials: 'RP',
    name: 'Raj Patel',
    title: 'CTO, WebFlow Inc',
    quote: 'The responsiveness across devices is incredible. Every template works perfectly on mobile, tablet, and desktop without any tweaking.',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    stars: 5,
  },
]

export const faqs: FAQ[] = [
  {
    question: 'What is WebStore?',
    answer: 'WebStore is a premium marketplace for website templates. We offer 1,200+ professionally designed, fully responsive templates for businesses, startups, agencies, and individuals. Every template is built with clean code and follows modern web standards.',
  },
  {
    question: 'Can I use templates for multiple projects?',
    answer: 'Yes, with a regular license you can use a template for one project. If you need to use a template for multiple projects (like client work), we recommend our extended license which covers unlimited projects. Check the license details on each template page.',
  },
  {
    question: 'Are the templates responsive?',
    answer: 'Absolutely. Every template in our marketplace is fully responsive and works seamlessly across all devices — desktop, tablet, and mobile. We test each template on multiple screen sizes before publishing.',
  },
  {
    question: 'Do I need coding knowledge to use the templates?',
    answer: 'Basic HTML and CSS knowledge is helpful, but our templates come with comprehensive documentation. Many templates also include pre-built pages and components so you can get started quickly. For significant customizations, some coding experience is recommended.',
  },
  {
    question: 'What do I get when I purchase a template?',
    answer: 'You receive the complete source files including HTML, CSS, JavaScript, and any assets used in the template. Most templates also include documentation, a license certificate, and access to future updates.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 14-day money-back guarantee. If the template doesn\'t meet your expectations, contact our support team within 14 days of purchase for a full refund. Please note that refunds are not available for customized or modified templates.',
  },
  {
    question: 'How do I get support?',
    answer: 'Our support team is available 24/7 via email at support@webstore.com. You can also visit our Help Center, check the documentation included with your template, or reach out through the contact form on our website. We typically respond within 24 hours.',
  },
  {
    question: 'Are the templates SEO friendly?',
    answer: 'Yes, all our templates are built with SEO best practices in mind. They include semantic HTML5 markup, proper heading structures, meta tags, and fast loading times. Many templates also support schema markup and Open Graph tags.',
  },
]

export const stats: Stat[] = [
  { number: '2020', label: 'Founded', primary: true },
  { number: '1,200+', label: 'Templates' },
  { number: '15K+', label: 'Customers' },
  { number: '4.9', label: 'Avg Rating' },
]

export const heroStats: { number: string; label: string }[] = [
  { number: '1,200+', label: 'Templates' },
  { number: '4.9', label: 'Avg Rating' },
  { number: '15K+', label: 'Happy Customers' },
]

export const categoriesList = [
  { name: 'Business', slug: 'templates?category=business', icon: '\u2604', count: 320 },
  { name: 'E-Commerce', slug: 'templates?category=ecommerce', icon: '\uD83D\uDCE6', count: 215 },
  { name: 'Blog', slug: 'templates?category=blog', icon: '\u270D', count: 180 },
  { name: 'Portfolio', slug: 'templates?category=portfolio', icon: '\uD83D\uDC64', count: 145 },
  { name: 'SaaS', slug: 'templates?category=saas', icon: '\u2601', count: 120 },
  { name: 'Landing Pages', slug: 'templates?category=landing', icon: '\uD83D\uDCBB', count: 220 },
]

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(t => t.slug === slug)
}

export function getRelatedTemplates(slugs: string[]): Template[] {
  return slugs.map(slug => templates.find(t => t.slug === slug)).filter(Boolean) as Template[]
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === 'all') return templates
  return templates.filter(t => t.category.toLowerCase() === category.toLowerCase())
}

export const filterCategories = ['all', 'business', 'ecommerce', 'blog', 'portfolio', 'saas'] as const
export type FilterCategory = typeof filterCategories[number]

export const contactInfo = {
  email: ['hello@webstore.com', 'support@webstore.com'],
  phone: ['+1 (555) 123-4567'],
  address: ['123 Design Street, Suite 200', 'San Francisco, CA 94105'],
  hours: 'Mon-Fri, 9AM-6PM EST',
}
