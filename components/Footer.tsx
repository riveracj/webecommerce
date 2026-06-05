import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <div className="logo-icon">W</div>
              Web<span>Store</span>
            </Link>
            <p>Premium website templates for creators, startups, and agencies. Built with care, designed to impress.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">&#120143;</a>
              <a href="#" aria-label="GitHub">&#128190;</a>
              <a href="#" aria-label="Dribbble">&#9975;</a>
              <a href="#" aria-label="YouTube">&#9654;</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Marketplace</h4>
            <ul>
              <li><Link href="/templates">All Templates</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/templates/startup-pro">Popular</Link></li>
              <li><Link href="/about">New Releases</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/about">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link href="/faq">Help Center</Link></li>
              <li><Link href="/contact">Contact Support</Link></li>
              <li><Link href="/faq">Terms of Service</Link></li>
              <li><Link href="/faq">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 WebStore. All rights reserved.</span>
          <span className="mono">Built with &#9829;</span>
        </div>
      </div>
    </footer>
  )
}
