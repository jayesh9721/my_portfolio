import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiCalendar, FiSend, FiCheckCircle } from 'react-icons/fi'

const contactLinks = [
    { icon: FiMail, label: 'Email', value: 'hello@autoflow.dev', href: 'mailto:hello@autoflow.dev' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/autoflow', href: 'https://linkedin.com' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/autoflow', href: 'https://github.com' },
    { icon: FiCalendar, label: 'Book a Call', value: 'calendly.com/autoflow', href: 'https://calendly.com' },
]

const inputStyle = {
    width: '100%', padding: '13px 16px',
    borderRadius: 10, fontSize: 15,
    color: '#e2e8f0', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.09)',
    outline: 'none', fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
}

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [done, setDone] = useState(false)
    const [sending, setSending] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        setSending(true)
        setTimeout(() => { setSending(false); setDone(true) }, 900)
    }

    return (
        <section id="contact" ref={ref}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 64 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>Contact</div>
                    <h2>
                        Let's <span className="gradient-text">Automate</span> Your Business
                    </h2>
                </motion.div>

                {/* Two-column layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24, alignItems: 'start' }}
                    className="grid-cols-1 lg:grid-cols-[3fr,2fr]">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="card"
                        style={{ padding: 32 }}
                    >
                        {done ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '56px 0', textAlign: 'center' }}>
                                <div style={{
                                    width: 56, height: 56, borderRadius: 16, marginBottom: 20,
                                    background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#22c55e', fontSize: 24,
                                }}>
                                    <FiCheckCircle />
                                </div>
                                <h3 style={{ marginBottom: 8 }}>Message Sent!</h3>
                                <p>I'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: 8 }} className="section-label" htmlFor="name">Name</label>
                                        <input
                                            id="name" type="text" required placeholder="Your name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            style={inputStyle}
                                            onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: 8 }} className="section-label" htmlFor="email">Email</label>
                                        <input
                                            id="email" type="email" required placeholder="your@email.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            style={inputStyle}
                                            onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: 8 }} className="section-label" htmlFor="message">Message</label>
                                    <textarea
                                        id="message" required rows={5} placeholder="Tell me about your automation needs..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        style={{ ...inputStyle, resize: 'none' }}
                                        onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                                    />
                                </div>
                                <button
                                    type="submit" disabled={sending}
                                    style={{
                                        padding: '14px 24px', borderRadius: 10, cursor: 'pointer',
                                        background: 'linear-gradient(135deg,#3b82f6,#7c3aed)',
                                        color: '#fff', fontWeight: 600, fontSize: 14, border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                        opacity: sending ? 0.7 : 1, fontFamily: 'inherit',
                                        transition: 'opacity 0.15s',
                                    }}
                                >
                                    <FiSend size={14} />
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                    >
                        <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.8, marginBottom: 10 }}>
                            Whether you need a single workflow automated or a full AI-powered operations system — I'm here to help.
                        </p>
                        {contactLinks.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label} href={href} target="_blank" rel="noopener noreferrer"
                                className="card"
                                style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}
                            >
                                <div style={{
                                    width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569',
                                }}>
                                    <Icon size={15} />
                                </div>
                                <div>
                                    <div className="section-label" style={{ marginBottom: 2 }}>{label}</div>
                                    <div style={{ color: '#94a3b8', fontSize: 13, fontWeight: 500 }}>{value}</div>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
