import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ToolCard from './ToolCard'

gsap.registerPlugin(ScrollTrigger)

export default function ToolsGrid({ tools }) {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate new cards whenever tools list changes
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.card')
    if (!cards.length) return
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } }
    )
  }, [tools])

  return (
    <section ref={sectionRef} id="tools" className="section" style={{
      background: 'var(--bg-elevated)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      perspective: '1200px'
    }}>
      <div className="container">
        <div ref={headerRef} className="section-header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, opacity: 0 }}>
          <div>
            <span className="label-md" style={{ color: 'var(--on-bg-subtle)', display: 'block', marginBottom: 10 }}>🗂️ All Tools</span>
            <h2 className="headline-lg">Explore AI Tools</h2>
            <p className="body-md" style={{ color: 'var(--on-bg-muted)', marginTop: 8 }}>
              {tools.length} tool{tools.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>

        {tools.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3 className="headline-sm" style={{ marginBottom: 8 }}>No tools found</h3>
            <p className="body-md" style={{ color: 'var(--on-bg-muted)' }}>
              Try a different search term or clear the filters.
            </p>
          </div>
        ) : (
          <div ref={gridRef} className="tools-grid">
            {tools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        )}
      </div>
    </section>
  )
}
