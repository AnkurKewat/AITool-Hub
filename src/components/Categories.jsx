import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CATEGORIES } from '../data/tools'

gsap.registerPlugin(ScrollTrigger)

export default function Categories({
  activeCategory, setActiveCategory,
  filterPricing, setFilterPricing,
  filterTrending, setFilterTrending,
}) {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const chipsRef = useRef(null)
  const filtersRef = useRef(null)

  const categoryIcons = {
    'All': '🌐', 'AI Writing': '✍️', 'AI Design': '🎨', 'AI Coding': '💻',
    'AI Marketing': '📣', 'AI Video': '🎬', 'AI Productivity': '⚡', 'AI Agents': '🤖',
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { opacity: 0, x: -15 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      )
      gsap.fromTo(chipsRef.current?.children,
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
        }
      )
      gsap.fromTo(filtersRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="categories" style={{
      background: 'var(--bg-elevated)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '44px 0',
      perspective: '800px'
    }}>
      <div className="container">
        <div ref={labelRef} style={{ marginBottom: 20, opacity: 0 }}>
          <span className="label-md" style={{ color: 'var(--on-bg-subtle)' }}>Browse by Category</span>
        </div>

        <div ref={chipsRef} className="categories-grid" style={{ marginBottom: 18 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        <div ref={filtersRef} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', opacity: 0 }}>
          <span className="label-md" style={{ color: 'var(--on-bg-subtle)', marginRight: 4 }}>Filter:</span>
          {['All', 'Free', 'Freemium', 'Paid'].map(p => (
            <button key={p} className={`chip ${filterPricing === p ? 'active' : ''}`}
              onClick={() => setFilterPricing(p)} style={{ fontSize: '0.75rem', padding: '5px 14px' }}>
              {p}
            </button>
          ))}
          <div style={{ width: 1, height: 20, background: 'var(--border-bright)', margin: '0 4px' }} />
          <button className={`chip ${filterTrending ? 'active' : ''}`}
            onClick={() => setFilterTrending(v => !v)} style={{ fontSize: '0.75rem', padding: '5px 14px' }}>
            🔥 Trending Only
          </button>
        </div>
      </div>
    </section>
  )
}
