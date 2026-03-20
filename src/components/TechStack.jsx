import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
    { emoji: '⚡', title: 'Automation Platforms', tools: ['n8n', 'Make.com', 'Zapier', 'Pabbly'], color: '#3b82f6' },
    { emoji: '🤖', title: 'AI & LLM Systems', tools: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'AI Agents'], color: '#8b5cf6' },
    { emoji: '📊', title: 'CRM Systems', tools: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Airtable'], color: '#10b981' },
    { emoji: '💬', title: 'Communication', tools: ['Slack', 'Twilio', 'WhatsApp API', 'Telegram', 'Email'], color: '#f59e0b' },
    { emoji: '🔵', title: 'Google Ecosystem', tools: ['Sheets', 'Drive', 'Docs', 'Calendar', 'Workspace'], color: '#6366f1' },
    { emoji: '🗄️', title: 'Databases', tools: ['PostgreSQL', 'Supabase', 'Firebase', 'Vector DBs'], color: '#06b6d4' },
    { emoji: '🛒', title: 'Ecommerce', tools: ['Shopify', 'WooCommerce', 'Stripe', 'Razorpay'], color: '#ec4899' },
    { emoji: '📣', title: 'Marketing', tools: ['Facebook Ads', 'Google Ads', 'LinkedIn', 'Email Marketing'], color: '#a855f7' },
    { emoji: '🔗', title: 'Integration Tech', tools: ['REST APIs', 'Webhooks', 'OAuth', 'GraphQL'], color: '#14b8a6' },
    { emoji: '⚙️', title: 'Data Processing', tools: ['Web Scraping', 'ETL', 'Enrichment', 'Analytics'], color: '#f97316' },
]

export default function TechStack() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="tech-stack" style={{ background: 'rgba(255,255,255,0.012)' }} ref={ref}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}
                >
                    <div>
                        <div className="section-label" style={{ marginBottom: 16 }}>Tech Stack</div>
                        <h2>
                            My <span className="gradient-text">Automation</span> Arsenal
                        </h2>
                    </div>
                    <p style={{ fontSize: 14, color: '#475569', maxWidth: 220, lineHeight: 1.7 }}>
                        60+ tools across automation, AI, databases, and integrations.
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 14 }}>
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                            style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            {/* Icon + Title */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <div style={{
                                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                                    background: `${cat.color}18`,
                                    border: `1px solid ${cat.color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 18,
                                }}>
                                    {cat.emoji}
                                </div>
                                <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: 14, lineHeight: 1.3 }}>{cat.title}</span>
                            </div>

                            {/* Tool pills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                {cat.tools.map((t) => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
