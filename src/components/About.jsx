import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
    { icon: '⚡', title: 'AI-Powered Workflow Systems', desc: 'End-to-end automation using LLMs and intelligent agents' },
    { icon: '🔗', title: 'Multi-Platform Integrations', desc: 'Connect CRMs, APIs, databases, and communication tools' },
    { icon: '🧠', title: 'Intelligent Process Automation', desc: 'Replace manual work with smart, scalable pipelines' },
    { icon: '🏗️', title: 'Scalable Architecture Design', desc: 'Build systems that grow with your business' },
]

const tags = ['n8n', 'Make.com', 'OpenAI', 'HubSpot', 'Airtable', 'Twilio', 'Zapier', 'Supabase', 'PostgreSQL', 'Webhooks']

const ease = [0.22, 1, 0.36, 1]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" ref={ref}>
            <div className="container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease }}
                    style={{ marginBottom: 64 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>About</div>
                    <h2>
                        Building the <span className="gradient-text">Future of Work</span>
                    </h2>
                </motion.div>

                {/* Two columns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
                    className="grid-cols-1 lg:grid-cols-2">

                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, ease, delay: 0.1 }}
                    >
                        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#64748b', marginBottom: 22 }}>
                            I am an <span style={{ color: '#e2e8f0', fontWeight: 600 }}>automation engineer</span> specializing
                            in building AI-powered workflow systems that automate complex business operations. I design
                            scalable architectures connecting CRMs, communication tools, databases, and AI models.
                        </p>
                        <p style={{ fontSize: 15, lineHeight: 1.85, color: '#475569', marginBottom: 22 }}>
                            My work focuses on automating lead generation, recruitment pipelines, marketing campaigns,
                            customer support, and operational workflows — reducing manual effort and accelerating decisions.
                        </p>
                        <p style={{ fontSize: 15, lineHeight: 1.85, color: '#475569', marginBottom: 36 }}>
                            Core technologies include n8n, Make.com, REST APIs, AI models, and custom integrations
                            that connect entire business ecosystems into one intelligent system.
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {tags.map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, ease, delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                    >
                        {highlights.map((h, i) => (
                            <motion.div
                                key={h.title}
                                className="card"
                                initial={{ opacity: 0, y: 16 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.08 }}
                                style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 18 }}
                            >
                                <div style={{
                                    width: 44, height: 44, flexShrink: 0,
                                    borderRadius: 11, background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 20,
                                }}>
                                    {h.icon}
                                </div>
                                <div>
                                    <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{h.title}</div>
                                    <div style={{ color: '#475569', fontSize: 13, lineHeight: 1.6 }}>{h.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
