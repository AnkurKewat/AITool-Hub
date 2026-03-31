import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (!email.includes('@')) { setStatus('error'); return }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section ref={sectionRef} id="newsletter" style={{
      background: 'var(--bg-elevated)',
      padding: '100px 0', borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden'
    }}>

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div ref={contentRef} style={{
          maxWidth: 580, margin: '0 auto',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
        }}>
          <div style={{ fontSize: 48, marginBottom: 8, animation: 'float 4s ease-in-out infinite' }}>📬</div>
          <h2 className="headline-lg" style={{ color: 'var(--on-bg)' }}>
            Stay Ahead of AI Trends
          </h2>
          <p className="body-lg" style={{ color: 'var(--on-bg-muted)' }}>
            Get the latest AI tools, insights, and weekly picks delivered straight to your inbox. No spam, ever.
          </p>

          <div style={{ width: '100%', maxWidth: 480, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {status === 'success' ? (
              <div style={{
                background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)',
                borderRadius: 'var(--radius-full)', padding: '14px 32px', color: 'var(--accent-green)',
                fontWeight: 600, width: '100%', animation: 'fadeIn 0.3s ease',
              }}>
                🎉 You're subscribed! Welcome to the community.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, width: '100%', flexWrap: 'wrap' }}>
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center',
                  background: 'var(--bg-card)',
                  border: `1px solid ${status === 'error' ? 'rgba(239,68,68,0.5)' : 'var(--border-bright)'}`,
                  borderRadius: 'var(--radius-full)', padding: '0 24px',
                  minWidth: 200, transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxShadow: status === 'error' ? '0 0 0 2px rgba(239,68,68,0.1)' : 'var(--shadow-card)',
                }}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setStatus('idle') }}
                    id="newsletter-email"
                    style={{
                      flex: 1, padding: '15px 0',
                      background: 'transparent', color: 'var(--on-bg)',
                      fontSize: '1rem', outline: 'none', border: 'none',
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Subscribe &rarr;
                </button>
              </form>
            )}
          </div>

          {status === 'error' && (
            <p style={{ color: '#fca5a5', fontSize: '0.875rem', marginTop: -8, animation: 'fadeIn 0.2s' }}>
              Please enter a valid email address.
            </p>
          )}

          <p style={{ fontSize: '0.75rem', color: 'var(--on-bg-subtle)', marginTop: 8 }}>
            Join 50,000+ developers, founders &amp; creators. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
