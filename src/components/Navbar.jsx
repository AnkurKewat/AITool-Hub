import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar({ onSearch, search }) {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={navRef} style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 0.3s ease, border-bottom 0.3s ease',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      opacity: 0,
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <a href="/" ref={logoRef} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: '#ffffff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43 68 V38 C43 33 57 33 57 38 V68" stroke="#E3DB00" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 18 C30 18 20 32 20 48 C20 60 35 63 36 68 V69 H64 V68 C65 63 80 60 80 48 C80 32 70 18 50 18 Z" stroke="#E3DB00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34 74 L66 74" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M36 81 L64 79" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M37 87 L63 85" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M40 89 H60 V92 C60 94 58 96 56 96 H54 V94 H52 V96 H48 V94 H46 V96 H44 C42 96 40 94 40 92 V89 Z" fill="#000000" />
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--on-bg)' }}>
            AI Tools Hub
          </span>
        </a>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
          {['Tools', 'Categories', 'Trending', 'Submit'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="btn-ghost"
              style={{ fontSize: '0.875rem', color: 'var(--on-bg-muted)' }}>
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#submit" className="btn-primary" style={{ fontSize: '0.875rem', padding: '9px 22px' }}>
          + Submit Tool
        </a>
      </div>
      <style>{`@media (max-width: 768px) { .desktop-nav { display: none !important; } }`}</style>
    </header>
  )
}
