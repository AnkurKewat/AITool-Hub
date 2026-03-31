import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trendingTools } from '../data/tools'

gsap.registerPlugin(ScrollTrigger)

export default function TrendingSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
      )
      gsap.fromTo(listRef.current?.children,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.02, duration: 0.3, ease: 'power3.out' }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="trending" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div ref={headerRef} className="section-header" style={{ opacity: 0 }}>
          <span className="label-md" style={{ color: 'var(--accent-orange)', display: 'block', marginBottom: 10 }}>
            🔥 This Week
          </span>
          <h2 className="headline-lg">Trending Tools</h2>
          <p className="body-md" style={{ color: 'var(--on-bg-muted)', marginTop: 8 }}>
            The most popular AI tools right now, based on community activity.
          </p>
        </div>

        <div ref={listRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 10,
        }}>
          {trendingTools.map((tool, i) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 20px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s',
                textDecoration: 'none', color: 'inherit',
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-bright)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Rank badge */}
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: i < 3
                  ? 'var(--on-bg)'
                  : 'var(--bg-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 900,
                color: i < 3 ? 'var(--bg)' : 'var(--on-bg-muted)',
                boxShadow: 'none',
              }}>
                {i + 1}
              </div>

              {/* Logo */}
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>
                {tool.logo}
              </div>

              {/* Name + Category */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: 2, color: 'var(--on-bg)' }}>
                  {tool.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--on-bg-subtle)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {tool.category}
                </div>
              </div>

              {/* Trending badge */}
              <span className="badge badge-trending" style={{ flexShrink: 0 }}>🔥</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
