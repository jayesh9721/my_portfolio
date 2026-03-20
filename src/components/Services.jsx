import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const services = [
    { icon: '🤖', title: 'AI Automation Development', desc: 'Custom AI-powered workflow automation systems — from LLM integrations to fully autonomous agent pipelines.' },
    { icon: '🔄', title: 'Business Process Automation', desc: 'Identify and eliminate manual tasks using n8n, Make.com, and Zapier — streamlined, scalable, reliable.' },
    { icon: '📊', title: 'CRM Automation', desc: 'Automate lead management, follow-ups, and sales pipelines to close more deals without extra effort.' },
    { icon: '🧠', title: 'AI Agent Development', desc: 'Voice agents, chatbots, and autonomous AI systems that handle customer interactions at scale.' },
    { icon: '🔗', title: 'API Integrations', desc: 'Connect any combination of platforms into one unified workflow using REST APIs, webhooks, and OAuth.' },
    { icon: '💬', title: 'WhatsApp & Multi-Channel', desc: 'Automate customer communication across WhatsApp, SMS, email, and chat with AI-powered responses.' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="services" style={{ background: 'rgba(255,255,255,0.012)' }} ref={ref}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease }}
                    style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}
                >
                    <div>
                        <div className="section-label" style={{ marginBottom: 16 }}>Services</div>
                        <h2>
                            Automation <span className="gradient-text">Services</span>
                        </h2>
                    </div>
                    <a href="#contact" style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: 14, color: '#475569', textDecoration: 'none', fontWeight: 500,
                        transition: 'color 0.25s ease',
                    }}
                        onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                        onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                    >
                        Start a project <FiArrowRight size={14} />
                    </a>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px,1fr))', gap: 14 }}>
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                            style={{ padding: 28 }}
                        >
                            <div style={{
                                width: 48, height: 48, borderRadius: 12, marginBottom: 22,
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                            }}>{svc.icon}</div>
                            <h3 style={{ marginBottom: 12 }}>{svc.title}</h3>
                            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 22 }}>{svc.desc}</p>
                            <a href="#contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 5,
                                fontSize: 13, fontWeight: 600, color: '#3b82f6', textDecoration: 'none',
                                transition: 'gap 0.2s ease',
                            }}>
                                Get Started <FiArrowRight size={12} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease, delay: 0.55 }}
                    style={{
                        marginTop: 24, padding: '36px 40px', borderRadius: 18,
                        background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexWrap: 'wrap', gap: 24,
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: 20, marginBottom: 6 }}>Ready to automate your business?</h3>
                        <p style={{ fontSize: 14 }}>Let's build something powerful together.</p>
                    </div>
                    <a href="#contact" className="btn btn-white" style={{ flexShrink: 0 }}>
                        Start Your Project <FiArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
