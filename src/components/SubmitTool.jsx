import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SubmitTool() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', url: '', category: '', description: '', pricing: 'Freemium' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const boxRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(boxRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      )
      gsap.fromTo(contentRef.current?.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setOpen(false); setSubmitted(false); setForm({ name: '', url: '', category: '', description: '', pricing: 'Freemium' }) }, 2000)
  }

  return (
    <section ref={sectionRef} id="submit" className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={boxRef} style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', padding: '64px 48px',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
          opacity: 0,
        }}>

          <div ref={contentRef} style={{ position: 'relative' }}>
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center', opacity: 0.9 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            </div>
            <h2 className="headline-lg" style={{ marginBottom: 12, color: 'var(--on-bg)' }}>Know a Great AI Tool?</h2>
            <p className="body-lg" style={{ color: 'var(--on-bg-muted)', maxWidth: 480, margin: '0 auto 32px' }}>
              Help the community discover new AI tools. Submit your favourite tool and get it featured.
            </p>
            <button className="btn-primary" onClick={() => setOpen(true)}
              style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
              + Submit a Tool
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(8,11,20,0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }} onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}>
          <div style={{
            background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)',
            padding: '40px', width: '100%', maxWidth: 520,
            boxShadow: '0 32px 64px rgba(0,0,0,0.8)',
            animation: 'fadeUp 0.3s ease forwards',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16, animation: 'pulse-glow 2s infinite' }}>🎉</div>
                <h3 className="headline-sm" style={{ color: 'var(--on-bg)' }}>Tool Submitted!</h3>
                <p className="body-md" style={{ color: 'var(--on-bg-muted)', marginTop: 8 }}>
                  We'll review and add it to the directory shortly.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                  <h3 className="headline-sm" style={{ color: 'var(--on-bg)' }}>Submit a Tool</h3>
                  <button className="btn-ghost" onClick={() => setOpen(false)} style={{ padding: '6px 12px', fontSize: '1.4rem' }}>&times;</button>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    { key: 'name', label: 'Tool Name', placeholder: 'e.g. ChatGPT', type: 'text' },
                    { key: 'url', label: 'Website URL', placeholder: 'https://...', type: 'url' },
                    { key: 'description', label: 'Short Description', placeholder: 'What does this tool do?', type: 'text' },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="label-md" style={{ display: 'block', marginBottom: 8, color: 'var(--on-bg-subtle)' }}>{field.label}</label>
                      <div className="search-input-wrap" style={{ borderRadius: 'var(--radius-md)', padding: '0 16px', background: 'var(--bg-surface)' }}>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key]}
                          onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                          required
                          style={{ padding: '12px 0', width: '100%' }}
                        />
                      </div>
                    </div>
                  ))}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label className="label-md" style={{ display: 'block', marginBottom: 8, color: 'var(--on-bg-subtle)' }}>Category</label>
                      <select
                        value={form.category}
                        onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                        required
                        style={{
                          width: '100%', padding: '12px 16px',
                          borderRadius: 'var(--radius-md)', border: '1px solid var(--border)',
                          background: 'var(--bg-surface)', color: 'var(--on-bg)',
                          fontSize: '1rem', cursor: 'pointer', transition: 'border-color 0.2s',
                        }}
                      >
                        <option value="">Select…</option>
                        {['AI Writing','AI Design','AI Coding','AI Marketing','AI Video','AI Productivity','AI Agents'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-md" style={{ display: 'block', marginBottom: 8, color: 'var(--on-bg-subtle)' }}>Pricing</label>
                      <select
                        value={form.pricing}
                        onChange={e => setForm(f => ({ ...f, pricing: e.target.value }))}
                        style={{
                          width: '100%', padding: '12px 16px',
                          borderRadius: 'var(--radius-md)', border: '1px solid var(--border)',
                          background: 'var(--bg-surface)', color: 'var(--on-bg)',
                          fontSize: '1rem', cursor: 'pointer', transition: 'border-color 0.2s',
                        }}
                      >
                        {['Free','Freemium','Paid'].map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: 12, justifyContent: 'center' }}>
                    Submit Tool
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
