import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const year = new Date().getFullYear()
  const footerRef = useRef(null)
  const columnsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(columnsRef.current?.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%' }
        }
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  const footerLinks = {
    'Categories': [
      { label: 'AI Writing', href: '#categories' },
      { label: 'AI Design', href: '#categories' },
      { label: 'AI Coding', href: '#categories' },
      { label: 'AI Marketing', href: '#categories' },
      { label: 'AI Video', href: '#categories' },
      { label: 'AI Agents', href: '#categories' },
    ],
    'Directory': [
      { label: 'Browse Tools', href: '#tools' },
      { label: 'Featured', href: '#featured' },
      { label: 'Trending', href: '#trending' },
      { label: 'Submit a Tool', href: '#submit' },
      { label: 'Newsletter', href: '#newsletter' },
    ],
    'Resources': [
      { label: 'Blog', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Comparisons', href: '#' },
      { label: 'AI News', href: '#' },
      { label: 'Use Cases', href: '#' },
    ],
    'Company': [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Advertise', href: '#' },
    ],
  }

  const socials = [
    { label: 'Twitter / X', icon: '𝕏', href: 'https://twitter.com' },
    { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
    { label: 'GitHub', icon: '⌥', href: 'https://github.com' },
    { label: 'YouTube', icon: '▶', href: 'https://youtube.com' },
  ]

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        {/* Top row */}
        <div ref={columnsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 280px) repeat(4, 1fr)',
          gap: '56px 40px',
          paddingBottom: 64,
          borderBottom: '1px solid var(--border)',
        }} className="footer-grid">
          {/* Brand col */}
          <div style={{ opacity: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--on-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, color: 'var(--bg)', fontWeight: 900,
              }}>A</div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--on-bg)', letterSpacing: '-0.01em' }}>
                AI Tools Hub
              </span>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--on-bg-muted)', lineHeight: 1.7, marginBottom: 32 }}>
              The internet's best curated directory of AI tools. Find, compare, and discover tools tailored for your workflow.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--on-bg-muted)', fontSize: '0.9rem', fontWeight: 800,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                    e.currentTarget.style.borderColor = 'var(--on-bg)'
                    e.currentTarget.style.color = 'var(--on-bg)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-card)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--on-bg-muted)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} style={{ opacity: 0 }}>
              <h4 className="label-md" style={{ color: 'var(--on-bg)', marginBottom: 24, letterSpacing: '0.1em' }}>
                {heading}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} style={{ transition: 'color 0.2s', display: 'inline-block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 32, flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--on-bg-subtle)' }}>
            © {year} AI Tools Hub. All rights reserved. <br className="mobile-break" />
            Designed with <span style={{ color: 'var(--accent-pink)' }}>♥</span> for the AI community.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" style={{ fontSize: '0.875rem', color: 'var(--on-bg-subtle)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: minmax(200px, 300px) repeat(4, 1fr); }
        .mobile-break { display: none; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: minmax(200px, 240px) repeat(2, 1fr); gap: 48px; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .mobile-break { display: block; }
        }
        .footer ul a {
          transition: all 0.2s ease;
        }
        .footer ul a:hover {
          color: var(--primary-bright);
        }
      `}</style>
    </footer>
  )
}
