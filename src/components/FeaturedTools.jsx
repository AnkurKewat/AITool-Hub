import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featuredTools } from '../data/tools'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedTools() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(cardsRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const accentColors = [
    { border: 'rgba(99,102,241,0.35)', glow: 'rgba(99,102,241,0.12)', dot: '#6366f1' },
    { border: 'rgba(167,139,250,0.3)', glow: 'rgba(167,139,250,0.1)', dot: '#a78bfa' },
    { border: 'rgba(244,114,182,0.3)', glow: 'rgba(244,114,182,0.08)', dot: '#f472b6' },
  ]

  return (
    <section ref={sectionRef} id="featured" className="section" style={{
      background: 'transparent',
      perspective: '1000px'
    }}>
      <div className="container">
        <div ref={headerRef} className="section-header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, opacity: 0 }}>
          <div>
            <span className="label-md" style={{ color: 'var(--primary-bright)', display: 'block', marginBottom: 10 }}>
              ⭐ Staff Picks
            </span>
            <h2 className="headline-lg">Featured Tools</h2>
            <p className="body-md" style={{ color: 'var(--on-bg-muted)', marginTop: 8 }}>
              Hand-curated tools setting the standard in their category.
            </p>
          </div>
          <a href="#tools" className="btn-ghost" style={{ color: 'var(--primary-bright)' }}>View all tools →</a>
        </div>

        <div ref={cardsRef} className="featured-grid">
          {featuredTools.map((tool, i) => {
            const colors = accentColors[i % accentColors.length]
            return (
              <div key={tool.id} className="card" style={{
                padding: '32px',
                border: `1px solid ${colors.border}`,
                background: `linear-gradient(135deg, var(--bg-card) 60%, ${colors.glow})`,
                opacity: 0,
              }}>
                {/* Top glow line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                  background: `linear-gradient(90deg, transparent, ${colors.dot}, transparent)`,
                }} />

                {/* Decorative circle */}
                <div style={{
                  position: 'absolute', top: -50, right: -50, width: 180, height: 180,
                  background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
                  borderRadius: '50%', pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative' }}>
                  {/* Logo + Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: 'var(--bg-surface)',
                      border: `1px solid ${colors.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 28,
                      boxShadow: `0 0 20px ${colors.glow}`,
                    }}>
                      {tool.logo}
                    </div>
                    <span className="badge badge-featured">Featured</span>
                  </div>

                  <h3 className="headline-sm" style={{ marginBottom: 10, color: 'var(--on-bg)' }}>{tool.name}</h3>
                  <p className="body-md" style={{ color: 'var(--on-bg-muted)', marginBottom: 22, lineHeight: 1.65 }}>
                    {tool.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 26 }}>
                    <span className="chip" style={{ fontSize: '0.7rem', padding: '4px 12px' }}>{tool.category}</span>
                    {tool.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="chip" style={{ fontSize: '0.7rem', padding: '4px 12px' }}>{tag}</span>
                    ))}
                    <span className={`badge ${tool.pricing === 'Paid' ? 'badge-paid' : 'badge-free'}`}>{tool.pricing}</span>
                  </div>

                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.875rem' }}>
                    Visit {tool.name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
