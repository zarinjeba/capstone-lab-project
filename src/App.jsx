import { useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  Activity, ArrowRight, ArrowUpRight, Bug, Check, ChevronDown, CircleHelp,
  Code2, FileCode2, FileText, Gauge, Github, LayoutDashboard, Menu,
  ScanSearch, ShieldCheck, Sparkles, Terminal, X, Zap
} from 'lucide-react'

const features = [
  { icon: ScanSearch, title: 'Intelligent code analysis', text: 'Review source code and surface quality concerns in one clear workspace.' },
  { icon: ShieldCheck, title: 'Security awareness', text: 'Highlight potentially risky patterns and make issues easier to investigate.' },
  { icon: Gauge, title: 'Actionable quality insights', text: 'Turn technical findings into readable summaries and improvement priorities.' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  return <header className="header">
    <div className="container nav-wrap">
      <Link to="/" className="brand" onClick={close}><span className="brand-mark"><Sparkles size={18}/></span><span>Smart<span className="brand-accent">QA</span></span></Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/analyzer" onClick={close}>Code Analyzer</NavLink>
        <NavLink to="/reports" onClick={close}>Reports</NavLink>
      </nav>
      <Link className="nav-cta" to="/analyzer">Try Analyzer <ArrowUpRight size={15}/></Link>
    </div>
    {location.pathname !== '/' && <div className="nav-progress" />}
  </header>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <Link to="/" className="brand"><span className="brand-mark"><Sparkles size={16}/></span><span>Smart<span className="brand-accent">QA</span></span></Link>
    <span>AI-Driven Software Quality Assurance System</span>
    <span>© 2026 SmartQA · Frontend prototype</span>
  </div></footer>
}

function Home() {
  return <main>
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse-dot"/> SOFTWARE QUALITY, REIMAGINED</div>
        <h1>Ship better code.<br/><span className="gradient-text">With confidence.</span></h1>
        <p className="hero-description">A smarter workspace for understanding code quality, spotting potential risks, and making software more reliable.</p>
        <div className="hero-actions"><Link to="/analyzer" className="btn btn-primary">Explore Code Analyzer <ArrowRight size={17}/></Link><a href="#features" className="btn btn-secondary">Discover features</a></div>
        <div className="hero-proof"><div className="avatar-stack"><span>QA</span><span>AI</span><span>✓</span></div><span>Built for developers and QA teams</span></div>
      </div>
      <div className="hero-visual">
        <div className="glow-orb"/>
        <div className="code-window">
          <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>quality-overview.jsx</span><span className="window-live"><span/> LIVE PREVIEW</span></div>
          <div className="code-body">
            <div className="code-line"><b>01</b><span className="code-purple">const</span> <span className="code-blue">qualityReport</span> = {'{'}</div>
            <div className="code-line indent"><b>02</b><span className="code-blue">qualityScore</span>: <span className="code-green">94</span>,</div>
            <div className="code-line indent"><b>03</b><span className="code-blue">issuesFound</span>: <span className="code-orange">3</span>,</div>
            <div className="code-line indent"><b>04</b><span className="code-blue">securityStatus</span>: <span className="code-green">'Good'</span>,</div>
            <div className="code-line"><b>05</b>{'}'};</div>
            <div className="code-line spacer"><b>06</b></div>
            <div className="code-line"><b>07</b><span className="code-purple">export default</span> qualityReport;</div>
          </div>
          <div className="mini-report">
            <div className="score-ring"><div><strong>94</strong><small>/100</small></div></div>
            <div className="mini-report-copy"><strong>Quality score</strong><span><Check size={13}/> Excellent code health</span></div>
            <div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
        </div>
        <div className="float-card float-card-top"><span className="float-icon purple"><ShieldCheck size={17}/></span><div><strong>Code health</strong><small>Looking good</small></div><span className="float-check"><Check size={14}/></span></div>
        <div className="float-card float-card-bottom"><span className="float-icon orange"><Bug size={17}/></span><div><strong>Issues detected</strong><small>Ready for review</small></div><b>03</b></div>
      </div>
    </section>
    <section className="trust-strip"><div className="container trust-inner"><span>ONE WORKSPACE FOR</span><b><Code2 size={16}/> CODE QUALITY</b><b><ShieldCheck size={16}/> SECURITY INSIGHTS</b><b><Activity size={16}/> CLEAR REPORTS</b></div></section>
    <section className="section container" id="features">
      <div className="section-heading"><div className="eyebrow">WHAT SMARTQA BRINGS</div><h2>Quality checks, <span className="gradient-text">made clearer.</span></h2><p>Focus on the work that matters with a simple, organized quality assurance experience.</p></div>
      <div className="feature-grid">{features.map(({icon: Icon, title, text}, i) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={21}/></div><span className="feature-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><Link to="/analyzer">Explore <ArrowRight size={14}/></Link></article>)}</div>
    </section>
    <section className="cta-section container"><div className="cta-panel"><div className="cta-spark"><Sparkles size={22}/></div><div><h2>Ready to take a closer look?</h2><p>Explore the analyzer interface and see how a quality review can feel.</p></div><Link to="/analyzer" className="btn btn-primary">Open Code Analyzer <ArrowRight size={16}/></Link></div></section>
  </main>
}

const sampleCode = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`

function Analyzer() {
  const [code, setCode] = useState(sampleCode)
  const [language, setLanguage] = useState('JavaScript')
  const [ran, setRan] = useState(false)
  const lineCount = useMemo(() => Math.max(code.split('\n').length, 1), [code])
  const runDemo = () => setRan(true)
  return <main className="page-shell container">
    <div className="page-heading"><div><div className="eyebrow">WORKSPACE / CODE ANALYZER</div><h1>Code <span className="gradient-text">Analyzer</span></h1><p>Review a code sample and explore the analysis experience.</p></div><div className="demo-badge"><span/> FRONTEND DEMO</div></div>
    <div className="analyzer-layout">
      <section className="panel editor-panel">
        <div className="panel-heading"><div className="panel-title"><FileCode2 size={18}/> Source code</div><div className="editor-tools"><select value={language} onChange={e => {setLanguage(e.target.value); setRan(false)}} aria-label="Programming language"><option>JavaScript</option><option>Python</option><option>Java</option><option>PHP</option></select><button className="text-button" onClick={() => {setCode(sampleCode);setRan(false)}}>Reset sample</button></div></div>
        <div className="editor-meta"><span><span className="editor-dot"/> {language}</span><span>{lineCount} lines</span></div>
        <div className="editor-area"><div className="line-numbers">{Array.from({length: lineCount}, (_,i) => <span key={i}>{i+1}</span>)}</div><textarea spellCheck="false" value={code} onChange={e => {setCode(e.target.value);setRan(false)}} aria-label="Source code editor" /></div>
        <div className="editor-footer"><span><Terminal size={14}/> Editable sample code</span><span>{code.length} characters</span></div>
        <button className="btn btn-primary analyze-btn" onClick={runDemo}><ScanSearch size={17}/> Analyze code <ArrowRight size={16}/></button>
        <p className="demo-note"><CircleHelp size={14}/> Demo only: this button displays sample results. No code is uploaded or analyzed.</p>
      </section>
      <aside className="panel side-panel">
        <div className="panel-heading"><div className="panel-title"><Sparkles size={18}/> Analysis overview</div><span className="status-pill">Preview</span></div>
        {ran ? <div className="result-state"><div className="result-icon"><Check size={24}/></div><h3>Demo analysis complete</h3><p>Your sample report is ready to view.</p><div className="result-stats"><div><strong>94</strong><span>Quality score</span></div><div><strong>03</strong><span>Sample findings</span></div></div><Link to="/reports" className="btn btn-primary full-btn">View sample report <ArrowRight size={15}/></Link></div> : <div className="empty-state"><div className="empty-icon"><Code2 size={26}/></div><h3>Ready when you are</h3><p>Choose a language, edit the sample code, then select Analyze code to preview this interface.</p><div className="empty-checks"><span><Check size={14}/> Code input</span><span><Check size={14}/> Language selection</span><span><Check size={14}/> Sample report preview</span></div></div>}
        <div className="side-tip"><Zap size={17}/><div><strong>Good to know</strong><p>The live AI analysis engine can be connected in a future backend phase.</p></div></div>
      </aside>
    </div>
  </main>
}

function Reports() {
  const [filter, setFilter] = useState('All reports')
  const reports = [
    {name:'Payment service review', lang:'JavaScript', date:'Nov 16, 2026', score:94, issues:3, status:'Good'},
    {name:'User authentication module', lang:'Python', date:'Nov 14, 2026', score:82, issues:7, status:'Review'},
    {name:'Product catalog API', lang:'PHP', date:'Nov 12, 2026', score:91, issues:4, status:'Good'},
  ]
  const shown = reports.filter(r => filter === 'All reports' || r.status === filter)
  return <main className="page-shell container">
    <div className="page-heading"><div><div className="eyebrow">WORKSPACE / REPORTS</div><h1>Quality <span className="gradient-text">Reports</span></h1><p>A snapshot of code quality and sample findings.</p></div><div className="demo-badge"><span/> SAMPLE DATA</div></div>
    <div className="metrics-grid">
      <div className="metric-card"><div className="metric-top"><span>Average quality score</span><Gauge size={18}/></div><strong>89.0<span>/100</span></strong><small className="positive"><ArrowUpRight size={13}/> Across sample reports</small></div>
      <div className="metric-card"><div className="metric-top"><span>Files reviewed</span><FileText size={18}/></div><strong>24</strong><small>Sample project activity</small></div>
      <div className="metric-card"><div className="metric-top"><span>Findings identified</span><Bug size={18}/></div><strong>14</strong><small>Across 3 sample reports</small></div>
      <div className="metric-card"><div className="metric-top"><span>Security status</span><ShieldCheck size={18}/></div><strong className="metric-word">Monitor</strong><small>Review flagged patterns</small></div>
    </div>
    <section className="panel reports-panel">
      <div className="reports-toolbar"><div><h2>Recent analysis</h2><p>Example report records for the frontend prototype.</p></div><select value={filter} onChange={e => setFilter(e.target.value)} aria-label="Filter reports"><option>All reports</option><option>Good</option><option>Review</option></select></div>
      <div className="table-wrap"><table><thead><tr><th>PROJECT</th><th>LANGUAGE</th><th>DATE</th><th>QUALITY SCORE</th><th>FINDINGS</th><th>STATUS</th></tr></thead><tbody>{shown.map(r => <tr key={r.name}><td><div className="project-name"><span className="project-icon"><FileCode2 size={16}/></span><b>{r.name}</b></div></td><td>{r.lang}</td><td>{r.date}</td><td><div className="score-cell"><strong>{r.score}</strong><div className="score-track"><i style={{width:`${r.score}%`}}/></div></div></td><td>{r.issues.toString().padStart(2,'0')}</td><td><span className={r.status === 'Good' ? 'table-status good' : 'table-status review'}>{r.status}</span></td></tr>)}</tbody></table>{shown.length === 0 && <div className="no-results">No reports match this filter.</div>}</div>
      <div className="table-foot"><span>Showing {shown.length} of {reports.length} sample reports</span><span><span className="sample-dot"/> Illustrative data only</span></div>
    </section>
    <div className="report-disclaimer"><CircleHelp size={16}/><p><b>About these reports:</b> All scores, dates, and findings on this page are illustrative sample data. They are not generated by a connected AI model.</p></div>
  </main>
}

export default function App() {
  return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/analyzer" element={<Analyzer/>}/><Route path="/reports" element={<Reports/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></>
}