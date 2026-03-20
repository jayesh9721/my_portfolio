import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ReactFlow, Background, BackgroundVariant, useNodesState, useEdgesState } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { FiArrowUpRight, FiX } from 'react-icons/fi'

const ns = (r, g, b) => ({
    background: `rgba(${r},${g},${b},0.1)`,
    border: `1px solid rgba(${r},${g},${b},0.3)`,
    color: '#cbd5e1',
    borderRadius: '10px',
    padding: '7px 12px',
    fontSize: '11px',
    fontWeight: 600,
    minWidth: '90px',
    textAlign: 'center',
})

const es = (r, g, b) => ({ stroke: `rgb(${r},${g},${b})`, strokeWidth: 1.5 })

const studies = [
    {
        id: 1, emoji: '📋', tags: ['Scraping', 'AI', 'SaaS'],
        title: 'EU Policy Scraping & Business Insights',
        problem: 'Businesses struggle to monitor constantly changing government policies.',
        solution: 'Automated system scrapes EU policy sites, processes documents through AI, delivers insights.',
        impact: 'Real-time policy insights without reviewing long documents.',
        tools: ['n8n', 'OpenAI GPT', 'PostgreSQL', 'Web Scraper', 'Email API'],
        nodes: [
            { id: '1', position: { x: 10, y: 80 }, data: { label: '🌐 Sources' }, style: ns(59, 130, 246) },
            { id: '2', position: { x: 145, y: 80 }, data: { label: '🕷️ Scraper' }, style: ns(59, 130, 246) },
            { id: '3', position: { x: 285, y: 80 }, data: { label: '⚙️ Processing' }, style: ns(6, 182, 212) },
            { id: '4', position: { x: 435, y: 80 }, data: { label: '🤖 AI Summary' }, style: ns(139, 92, 246) },
            { id: '5', position: { x: 285, y: 185 }, data: { label: '🗄️ Database' }, style: ns(59, 130, 246) },
            { id: '6', position: { x: 435, y: 185 }, data: { label: '📧 Delivery' }, style: ns(6, 182, 212) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(59, 130, 246) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(59, 130, 246) },
            { id: 'e3', source: '3', target: '4', animated: true, style: es(6, 182, 212) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(139, 92, 246) },
            { id: 'e5', source: '5', target: '6', animated: true, style: es(59, 130, 246) },
        ],
    },
    {
        id: 2, emoji: '👥', tags: ['Recruitment', 'LinkedIn', 'AI'],
        title: 'Recruitment Automation System',
        problem: 'Recruiters spend hours sourcing candidates, reviewing resumes, and scheduling interviews.',
        solution: 'Fully automated pipeline triggered by uploading a job description.',
        impact: 'Dramatically reduced manual recruitment work and accelerated hiring.',
        tools: ['n8n', 'LinkedIn API', 'OpenAI', 'Google Calendar', 'Airtable'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '📄 Job Desc' }, style: ns(139, 92, 246) },
            { id: '2', position: { x: 155, y: 35 }, data: { label: '🔍 Discovery' }, style: ns(139, 92, 246) },
            { id: '3', position: { x: 305, y: 35 }, data: { label: '💼 LinkedIn' }, style: ns(236, 72, 153) },
            { id: '4', position: { x: 155, y: 165 }, data: { label: '📋 Resume AI' }, style: ns(139, 92, 246) },
            { id: '5', position: { x: 305, y: 165 }, data: { label: '🤖 Screen' }, style: ns(236, 72, 153) },
            { id: '6', position: { x: 465, y: 95 }, data: { label: '📅 Schedule' }, style: ns(139, 92, 246) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(139, 92, 246) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(139, 92, 246) },
            { id: 'e3', source: '1', target: '4', animated: true, style: es(139, 92, 246) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(139, 92, 246) },
            { id: 'e5', source: '3', target: '6', animated: true, style: es(236, 72, 153) },
            { id: 'e6', source: '5', target: '6', animated: true, style: es(236, 72, 153) },
        ],
    },
    {
        id: 3, emoji: '🎯', tags: ['Agency', 'Airtable', 'AI'],
        title: 'Recruitment Agency & Airtable Dashboard',
        problem: 'Agencies struggle to track outreach and candidate pipelines effectively.',
        solution: 'Scrapes job postings, extracts HR contacts, AI-matches candidates, tracks in Airtable.',
        impact: 'Centralized tracking and improved candidate-job matching accuracy.',
        tools: ['n8n', 'OpenAI', 'Airtable', 'Email API', 'Web Scraper'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '🔍 Scraper' }, style: ns(16, 185, 129) },
            { id: '2', position: { x: 165, y: 35 }, data: { label: '📧 Contacts' }, style: ns(16, 185, 129) },
            { id: '3', position: { x: 325, y: 35 }, data: { label: '🤖 AI Match' }, style: ns(20, 184, 166) },
            { id: '4', position: { x: 165, y: 165 }, data: { label: '📨 Outreach' }, style: ns(16, 185, 129) },
            { id: '5', position: { x: 345, y: 165 }, data: { label: '📊 Airtable' }, style: ns(20, 184, 166) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(16, 185, 129) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(16, 185, 129) },
            { id: 'e3', source: '3', target: '4', animated: true, style: es(20, 184, 166) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(16, 185, 129) },
        ],
    },
    {
        id: 4, emoji: '📣', tags: ['AI Creatives', 'Meta Ads'],
        title: 'Facebook Ad Generator',
        problem: 'Creating high-converting ad creatives takes significant manual effort.',
        solution: 'AI system generates ad copy and creatives from brand guidelines and targeting.',
        impact: 'Faster launches and scalable ad creation at a fraction of the cost.',
        tools: ['OpenAI GPT-4', 'DALL-E', 'Make.com', 'Meta Ads API', 'Airtable'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '🎯 Campaign' }, style: ns(249, 115, 22) },
            { id: '2', position: { x: 165, y: 35 }, data: { label: '🤖 AI Copy' }, style: ns(249, 115, 22) },
            { id: '3', position: { x: 325, y: 35 }, data: { label: '🖼️ Creative' }, style: ns(234, 179, 8) },
            { id: '4', position: { x: 165, y: 165 }, data: { label: '👤 Personalize' }, style: ns(249, 115, 22) },
            { id: '5', position: { x: 345, y: 165 }, data: { label: '🚀 Deploy' }, style: ns(234, 179, 8) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(249, 115, 22) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(249, 115, 22) },
            { id: 'e3', source: '1', target: '4', animated: true, style: es(249, 115, 22) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(234, 179, 8) },
            { id: 'e5', source: '3', target: '5', animated: true, style: es(234, 179, 8) },
        ],
    },
    {
        id: 5, emoji: '💬', tags: ['Facebook', 'CRM', 'Leads'],
        title: 'Facebook CRM & Lead Reactivation',
        problem: 'Businesses lose leads because Facebook conversations are not properly tracked.',
        solution: 'Integrates FB messages with CRM, creates AI conversation summaries, triggers reactivation.',
        impact: 'Improved lead tracking and increased conversion from old leads.',
        tools: ['Facebook Graph API', 'n8n', 'OpenAI', 'HubSpot CRM', 'Webhook'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '💬 FB Message' }, style: ns(99, 102, 241) },
            { id: '2', position: { x: 165, y: 35 }, data: { label: '🔗 Webhook' }, style: ns(99, 102, 241) },
            { id: '3', position: { x: 325, y: 35 }, data: { label: '🗄️ CRM' }, style: ns(59, 130, 246) },
            { id: '4', position: { x: 165, y: 165 }, data: { label: '🤖 Summary' }, style: ns(99, 102, 241) },
            { id: '5', position: { x: 345, y: 165 }, data: { label: '🔄 Reactivate' }, style: ns(59, 130, 246) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(99, 102, 241) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(99, 102, 241) },
            { id: 'e3', source: '1', target: '4', animated: true, style: es(99, 102, 241) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(59, 130, 246) },
            { id: 'e5', source: '3', target: '5', animated: true, style: es(59, 130, 246) },
        ],
    },
    {
        id: 6, emoji: '📞', tags: ['Voice AI', 'SMS', 'CRM'],
        title: 'Multi-Channel CRM & Voice Agent',
        problem: 'Businesses manage calls, SMS, and chat across platforms without unified tracking.',
        solution: 'Omni-channel CRM integrating voice AI, SMS, and chat with automated follow-ups.',
        impact: 'Unified communication management across all channels.',
        tools: ['Twilio', 'Vapi', 'n8n', 'OpenAI', 'PostgreSQL'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '📞 Channels' }, style: ns(6, 182, 212) },
            { id: '2', position: { x: 165, y: 35 }, data: { label: '📡 Telephony' }, style: ns(6, 182, 212) },
            { id: '3', position: { x: 325, y: 35 }, data: { label: '🤖 Voice AI' }, style: ns(59, 130, 246) },
            { id: '4', position: { x: 165, y: 165 }, data: { label: '🗄️ Conv. DB' }, style: ns(6, 182, 212) },
            { id: '5', position: { x: 345, y: 165 }, data: { label: '⚡ CRM Auto' }, style: ns(59, 130, 246) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(6, 182, 212) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(6, 182, 212) },
            { id: 'e3', source: '1', target: '4', animated: true, style: es(6, 182, 212) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(59, 130, 246) },
            { id: 'e5', source: '3', target: '5', animated: true, style: es(59, 130, 246) },
        ],
    },
    {
        id: 7, emoji: '🏭', tags: ['Operations', 'Invoice', 'Logistics'],
        title: 'Chemical Industry Operations',
        problem: 'Lead capture, approvals, invoicing, and delivery management were all manual.',
        solution: 'End-to-end automation from lead capture through approval, invoice, and driver assignment.',
        impact: 'Reduced operational workload and improved delivery coordination.',
        tools: ['n8n', 'Google Sheets', 'PDF Generator', 'WhatsApp API', 'Airtable'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '📥 Leads' }, style: ns(244, 63, 94) },
            { id: '2', position: { x: 155, y: 35 }, data: { label: '✅ Validation' }, style: ns(244, 63, 94) },
            { id: '3', position: { x: 305, y: 35 }, data: { label: '👤 Approval' }, style: ns(236, 72, 153) },
            { id: '4', position: { x: 155, y: 165 }, data: { label: '📄 Invoice' }, style: ns(244, 63, 94) },
            { id: '5', position: { x: 305, y: 165 }, data: { label: '🚚 Driver' }, style: ns(236, 72, 153) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(244, 63, 94) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(244, 63, 94) },
            { id: 'e3', source: '3', target: '4', animated: true, style: es(236, 72, 153) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(236, 72, 153) },
        ],
    },
    {
        id: 8, emoji: '💚', tags: ['WhatsApp', 'Support', 'Tickets'],
        title: 'WhatsApp Customer Support',
        problem: 'Customer support via WhatsApp is unstructured and hard to track.',
        solution: 'Centralized platform with AI intent detection, ticket system, and human escalation.',
        impact: 'Faster response times and structured customer management.',
        tools: ['WhatsApp Cloud API', 'n8n', 'OpenAI', 'Supabase', 'Twilio'],
        nodes: [
            { id: '1', position: { x: 10, y: 95 }, data: { label: '💬 WA Message' }, style: ns(34, 197, 94) },
            { id: '2', position: { x: 165, y: 35 }, data: { label: '🧠 Intent' }, style: ns(34, 197, 94) },
            { id: '3', position: { x: 325, y: 35 }, data: { label: '🗄️ DB Lookup' }, style: ns(16, 185, 129) },
            { id: '4', position: { x: 165, y: 165 }, data: { label: '🤖 Auto Reply' }, style: ns(34, 197, 94) },
            { id: '5', position: { x: 325, y: 165 }, data: { label: '🎫 Ticket' }, style: ns(16, 185, 129) },
        ],
        edges: [
            { id: 'e1', source: '1', target: '2', animated: true, style: es(34, 197, 94) },
            { id: 'e2', source: '2', target: '3', animated: true, style: es(34, 197, 94) },
            { id: 'e3', source: '1', target: '4', animated: true, style: es(34, 197, 94) },
            { id: 'e4', source: '4', target: '5', animated: true, style: es(16, 185, 129) },
            { id: 'e5', source: '3', target: '5', animated: true, style: es(16, 185, 129) },
        ],
    },
]

function FlowDiagram({ nodes: init, edges: initE }) {
    const [nodes] = useNodesState(init)
    const [edges] = useEdgesState(initE)
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow
                nodes={nodes} edges={edges}
                fitView panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false}
                nodesDraggable={false} nodesConnectable={false} elementsSelectable={false}
                proOptions={{ hideAttribution: true }}
                style={{ background: 'transparent' }}
            >
                <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="rgba(255,255,255,0.04)" />
            </ReactFlow>
        </div>
    )
}

function Modal({ cs, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0, zIndex: 50,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 24,
                background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)',
            }}
        >
            <motion.div
                initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                exit={{ y: 32, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%', maxWidth: 680,
                    maxHeight: '90vh', overflowY: 'auto',
                    background: '#0d1117',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20,
                }}
            >
                {/* Header */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <span style={{ fontSize: 28 }}>{cs.emoji}</span>
                        <div>
                            <div className="section-label" style={{ marginBottom: 3 }}>Case Study {cs.id}</div>
                            <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>{cs.title}</h3>
                        </div>
                    </div>
                    <button onClick={onClose} style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}><FiX size={14} /></button>
                </div>

                {/* Flow */}
                <div style={{
                    margin: '20px 24px', height: 220, borderRadius: 12, overflow: 'hidden',
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <FlowDiagram nodes={cs.nodes} edges={cs.edges} />
                </div>

                {/* Details */}
                <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        {[
                            { label: 'Problem', color: '239,68,68', text: cs.problem },
                            { label: 'Solution', color: '34,197,94', text: cs.solution },
                        ].map(({ label, color, text }) => (
                            <div key={label} style={{
                                padding: 16, borderRadius: 12,
                                background: `rgba(${color},0.06)`, border: `1px solid rgba(${color},0.15)`,
                            }}>
                                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: `rgb(${color})`, marginBottom: 8 }}>{label}</div>
                                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        padding: 16, borderRadius: 12,
                        background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
                    }}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 8 }}>Impact</div>
                        <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{cs.impact}</p>
                    </div>
                    <div>
                        <div className="section-label" style={{ marginBottom: 10 }}>Tools Used</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {cs.tools.map((t) => (
                                <span key={t} style={{
                                    padding: '5px 12px', borderRadius: 8, fontSize: 12,
                                    fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, color: '#60a5fa',
                                    background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)',
                                }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function CaseStudies() {
    const [selected, setSelected] = useState(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="case-studies" ref={ref}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}
                >
                    <div>
                        <div className="section-label" style={{ marginBottom: 16 }}>Case Studies</div>
                        <h2>
                            Real <span className="gradient-text">Automation</span> Systems
                        </h2>
                    </div>
                    <p style={{ fontSize: 14, color: '#475569', maxWidth: 200, lineHeight: 1.7 }}>
                        Click any card to see the full workflow diagram.
                    </p>
                </motion.div>

                {/* Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))', gap: 14 }}>
                    {studies.map((cs, i) => (
                        <motion.button
                            key={cs.id}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.055 }}
                            onClick={() => setSelected(cs)}
                            style={{
                                padding: 22, textAlign: 'left', cursor: 'pointer',
                                width: '100%', background: 'rgba(255,255,255,0.028)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 16, transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                <span style={{ fontSize: 26 }}>{cs.emoji}</span>
                                <FiArrowUpRight size={14} style={{ color: '#334155' }} />
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                                {cs.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <h3 style={{ fontSize: 15, marginBottom: 8 }}>{cs.title}</h3>
                            <p style={{ fontSize: 13, lineHeight: 1.65 }}>{cs.problem}</p>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && <Modal cs={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    )
}
