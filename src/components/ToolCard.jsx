import { useRef } from 'react'
import { gsap } from 'gsap'

export default function ToolCard({ tool }) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -3, duration: 0.3, ease: 'power2.out' })
  }
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.3, ease: 'power2.out' })
  }

  const pricingBadge = {
    'Free': 'badge-free',
    'Freemium': 'badge-freemium',
    'Paid': 'badge-paid',
  }

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24 }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, flexShrink: 0,
        }}>
          {tool.logo}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {tool.trending && <span className="badge badge-trending">🔥 Hot</span>}
          <span className={`badge ${pricingBadge[tool.pricing] || 'badge-paid'}`}>{tool.pricing}</span>
        </div>
      </div>

      {/* Name + description */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: 6, color: 'var(--on-bg)' }}>
          {tool.name}
        </h3>
        <p className="body-md" style={{ color: 'var(--on-bg-muted)', lineHeight: 1.55 }}>
          {tool.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        <span className="chip" style={{ fontSize: '0.68rem', padding: '4px 10px', fontWeight: 700 }}>
          {tool.category.replace('AI ', '')}
        </span>
        {tool.tags.slice(0, 2).map(tag => (
          <span key={tag} className="chip" style={{ fontSize: '0.68rem', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>

      {/* Visit button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-visit"
        style={{ alignSelf: 'flex-start', marginTop: 16 }}
      >
        Visit ↗
      </a>
    </div>
  )
}
