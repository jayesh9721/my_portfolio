import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

const stats = [
    { value: '5000+', label: 'Automations Built' },
    { value: '2000+', label: 'Tools Integrated' },
    { value: '100+', label: 'Case Studies' },
    { value: '100%', label: 'Client Success' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
    return (
        <section id="home" style={{ paddingTop: 0, paddingBottom: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background glow */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)',
                    width: 800, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(59,130,246,0.09) 0%, transparent 70%)',
                }} />
                <div style={{
                    position: 'absolute', top: '70%', left: '20%',
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(167,139,250,0.05) 0%, transparent 70%)',
                }} />
            </div>

            {/* Main content — fully centered */}
            <div className="container" style={{ textAlign: 'center', paddingTop: 160, paddingBottom: 100, position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                >

                    {/* Status badge */}
                    <div className="badge" style={{ margin: '0 auto 40px', width: 'fit-content' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
                        Available for New Projects
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(42px, 6.5vw, 76px)',
                        fontWeight: 900,
                        lineHeight: 1.06,
                        letterSpacing: '-0.03em',
                        color: '#f1f5f9',
                        marginBottom: 28,
                    }}>
                        Automation Engineer<br />
                        <span className="gradient-text">&amp; AI Workflow</span><br />
                        Architect
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.12 }}
                        style={{ fontSize: 18, color: '#64748b', maxWidth: 580, margin: '0 auto 14px', lineHeight: 1.75 }}
                    >
                        I design and build{' '}
                        <span style={{ color: '#94a3b8', fontWeight: 600 }}>intelligent automation systems</span>{' '}
                        using AI, APIs, and workflow platforms to eliminate manual work and scale business operations.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.2 }}
                        style={{ fontSize: 15, color: '#475569', maxWidth: 500, margin: '0 auto 52px', lineHeight: 1.75 }}
                    >
                        Specializing in business automation, AI integrations, CRM systems, and multi-platform workflow orchestration.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.28 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}
                    >
                        <a href="#case-studies" className="btn btn-white">
                            View Case Studies <FiArrowRight size={15} />
                        </a>
                        <a href="#contact" className="btn btn-ghost">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.42 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 96 }}
                >
                    {stats.map((s) => (
                        <div key={s.label} className="card" style={{ padding: '28px 16px', textAlign: 'center' }}>
                            <div className="gradient-text" style={{ fontSize: 34, fontWeight: 900, marginBottom: 6 }}>{s.value}</div>
                            <div style={{ fontSize: 13, color: '#475569', fontWeight: 500, letterSpacing: '0.01em' }}>{s.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#334155' }}
                >
                    <span className="section-label">Scroll</span>
                    <FiChevronDown className="animate-bounce" />
                </motion.div>
            </div>
        </section>
    )
}
