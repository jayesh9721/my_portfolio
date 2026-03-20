import { FiZap, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const footerLinks = {
    Navigate: [['Home', '#home'], ['About', '#about'], ['Tech Stack', '#tech-stack'], ['Case Studies', '#case-studies']],
    Services: [['AI Automation', '#services'], ['CRM Automation', '#services'], ['API Integrations', '#services'], ['AI Agents', '#services']],
    Connect: [['Email', 'mailto:hello@autoflow.dev'], ['LinkedIn', 'https://linkedin.com'], ['GitHub', 'https://github.com'], ['Calendly', 'https://calendly.com']],
}

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 64, paddingBottom: 40 }}>
            <div className="container">

                {/* Main row */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48, alignItems: 'start' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{
                                width: 32, height: 32, borderRadius: 9,
                                background: 'linear-gradient(135deg,#3b82f6,#7c3aed)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <FiZap color="#fff" size={14} />
                            </div>
                            <span style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9', letterSpacing: '-0.02em' }}>AutoFlow</span>
                        </div>
                        <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.75, marginBottom: 20, maxWidth: 220 }}>
                            Building intelligent automation systems that eliminate manual work and scale business operations.
                        </p>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {[FiGithub, FiLinkedin, FiMail].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: 32, height: 32, borderRadius: 8,
                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#334155', textDecoration: 'none',
                                }}>
                                    <Icon size={13} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <div className="section-label" style={{ marginBottom: 16 }}>{heading}</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {links.map(([label, href]) => (
                                    <li key={label}>
                                        <a href={href} style={{
                                            color: '#334155', textDecoration: 'none', fontSize: 14,
                                            transition: 'color 0.15s',
                                        }}
                                            onMouseEnter={e => e.target.style.color = '#94a3b8'}
                                            onMouseLeave={e => e.target.style.color = '#334155'}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)', marginBottom: 24 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 12, color: '#1e293b' }}>© {new Date().getFullYear()} AutoFlow. All rights reserved.</span>
                    <span style={{ fontSize: 12, color: '#1e293b' }}>Built by an Automation Engineer</span>
                </div>
            </div>
        </footer>
    )
}
