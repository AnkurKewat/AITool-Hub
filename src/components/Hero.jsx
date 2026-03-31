import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ search, setSearch }) {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const searchRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    // Professional subtle stagger without 3D rotation
    tl.fromTo(badgeRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    tl.fromTo(headlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
    tl.fromTo(subRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
    tl.fromTo(searchRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
    tl.fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
    tl.fromTo(statsRef.current.children, { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, 0.7)

    return () => { tl.kill(); ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: 'transparent',
      padding: '100px 0 88px',
      position: 'relative', overflow: 'hidden',
    }}>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div ref={badgeRef} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.3)',
          color: 'var(--primary-bright)',
          padding: '7px 18px', borderRadius: 'var(--radius-full)',
          fontSize: '0.8125rem', fontWeight: 700, marginBottom: 28,
          opacity: 0,
        }}>
          <span style={{ animation: 'spin-slow 3s linear infinite', display: 'inline-block' }}>✦</span>
          200+ AI Tools Curated Weekly
        </div>

        <h1 ref={headlineRef} className="display-lg" style={{ marginBottom: 20, opacity: 0 }}>
          Discover the Best<br />
          <span className="gradient-text">AI Tools</span> in One Place
        </h1>

        <p ref={subRef} className="body-lg" style={{
          color: 'var(--on-bg-muted)', maxWidth: 540, margin: '0 auto 48px', opacity: 0,
        }}>
          Explore trending AI tools for productivity, design, coding, marketing, and more.
          Find the perfect tool for every workflow.
        </p>

        {/* Search bar */}
        <div ref={searchRef} style={{ maxWidth: 600, margin: '0 auto 24px', opacity: 0 }}>
          <div className="search-input-wrap" style={{ padding: '0 24px' }}>
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              ref={inputRef}
              type="search"
              placeholder="Search AI tools — ChatGPT, Midjourney, Cursor…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              id="hero-search"
            />
            {search && (
              <button onClick={() => setSearch('')} className="btn-ghost" style={{ padding: '4px 8px', fontSize: '1.3rem', color: 'var(--on-bg-muted)' }}>×</button>
            )}
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', opacity: 0,
        }}>
          <a href="#tools" className="btn-primary">
            Browse Tools
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          <a href="#categories" className="btn-secondary">View Categories</a>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{
          display: 'flex', gap: 48, justifyContent: 'center', marginTop: 72, flexWrap: 'wrap',
        }}>
          {[
            { count: '200+', label: 'AI Tools', color: 'var(--primary-bright)' },
            { count: '7', label: 'Categories', color: 'var(--accent)' },
            { count: '50K+', label: 'Monthly Users', color: 'var(--accent-green)' },
            { count: 'Free', label: 'Always', color: 'var(--accent-pink)' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center', opacity: 0 }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: stat.color, letterSpacing: '-0.02em' }}>{stat.count}</div>
              <div className="label-md" style={{ color: 'var(--on-bg-subtle)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
