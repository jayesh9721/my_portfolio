import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#case-studies' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '16px 24px' }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 20px',
                    borderRadius: '14px',
                    border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
                    background: scrolled ? 'rgba(7,9,15,0.92)' : 'rgba(7,9,15,0.65)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                {/* Logo */}
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: 10,
                        background: 'linear-gradient(135deg,#3b82f6,#7c3aed)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <FiZap color="#fff" size={15} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9', letterSpacing: '-0.02em' }}>AutoFlow</span>
                </a>

                {/* Desktop Links */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden lg:flex">
                    {navLinks.map((l) => (
                        <a key={l.label} href={l.href} style={{
                            padding: '7px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                            color: '#64748b', textDecoration: 'none', transition: 'color 0.25s ease',
                        }}
                            onMouseEnter={e => e.target.style.color = '#e2e8f0'}
                            onMouseLeave={e => e.target.style.color = '#64748b'}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <a href="#contact" className="btn-blue hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <FiZap size={12} /> Hire Me
                    </a>
                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(!open)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: 4 }}
                    >
                        {open ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container"
                    style={{
                        marginTop: 8, padding: 16, borderRadius: 14,
                        background: 'rgba(7,9,15,0.97)', border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {navLinks.map((l) => (
                        <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                            style={{
                                display: 'block', padding: '12px 8px', color: '#94a3b8',
                                textDecoration: 'none', fontSize: 15, fontWeight: 500,
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)}
                        style={{
                            display: 'block', marginTop: 12, padding: '12px 0', textAlign: 'center',
                            background: '#3b82f6', color: '#fff', borderRadius: 10, fontWeight: 600, fontSize: 14,
                            textDecoration: 'none',
                        }}>
                        Hire Me
                    </a>
                </motion.div>
            )}
        </motion.header>
    )
}
