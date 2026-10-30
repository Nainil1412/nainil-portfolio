import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, Download, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import './styles.css';

const skills = [
  ['Frontend', 'React.js · Redux · TanStack Query · TypeScript'],
  ['Backend', 'Node.js · Express.js · REST APIs · JWT · RBAC'],
  ['Data', 'PostgreSQL · Citus · MongoDB · Prisma · JSONB'],
  ['Systems', 'WebSockets · Redis/BullMQ · Elasticsearch · Webhooks'],
  ['Delivery', 'Stripe · DocuSign · AWS S3 · Docker · NGINX · Sentry'],
  ['AI systems', 'Agentic AI development · Claude Code · OpenAI Codex · Tool workflows'],
];

const projects = [
  {
    index: '01',
    type: 'PLATFORM ARCHITECTURE · AGENTIC ENGINEERING',
    title: 'Configurable CRM',
    summary: 'A relationship-aware operating system for teams to manage leads, deals, contacts, activities, proposals, bookings, and follow-up workflows - built with configurable entities and AI-assisted engineering.',
    detail: 'Designed dynamic entities, custom fields, filters, views, RBAC, and real-time updates across PostgreSQL / JSONB, Citus, Elasticsearch, Redis/BullMQ, and Socket.IO. Used Claude Code and OpenAI Codex for agentic code exploration, refactoring, test creation, and documentation with manual review.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'RBAC', 'Claude Code', 'OpenAI Codex'],
    accent: 'lime',
  },
  {
    index: '02',
    type: 'WORKFORCE OPERATIONS',
    title: 'Hiring & payroll',
    summary: 'A remote workforce platform helping companies hire professionals, manage onboarding, run contracts, and handle payroll operations.',
    detail: 'Designed around the operational handoffs that matter: candidate to contractor, contract to payment, and status changes that stay visible to every team.',
    stack: ['React', 'Node.js', 'REST APIs', 'RBAC'],
    accent: 'blue',
  },
  {
    index: '03',
    type: 'COMMERCE + FINANCE',
    title: 'Commerce that closes',
    summary: 'Customer and admin portals for a watch marketplace with product discovery, checkout, financing, approvals, and signed contracts.',
    detail: 'Connected the full money path: Stripe and Apple Pay, financing payments, DocuSign, webhooks, and AWS S3 document storage.',
    stack: ['TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3'],
    accent: 'orange',
  },
];

const githubProjects = [
  {
    number: 'A',
    title: 'PromptForge',
    description: 'A workflow platform for designing, testing, and running AI agents with visual flows, structured capabilities, evaluations, and provider-aware execution.',
    stack: 'React · Next.js · Spring Boot · PostgreSQL · AI workflows',
    repo: 'https://github.com/Nainil1412/promptforge',
  },
  {
    number: 'B',
    title: 'Interior Design Platform',
    description: 'A product-focused interior design experience for exploring spaces, organizing design ideas, and turning visual direction into a clearer client workflow.',
    stack: 'React · JavaScript · Responsive UI · Product design',
    repo: 'https://github.com/Nainil1412',
  },
  {
    number: 'C',
    title: 'Event Management',
    description: 'A full-stack event registration application with Express routes, EJS views, MongoDB persistence, sessions, authentication dependencies, and upload handling.',
    stack: 'Node.js · Express · MongoDB · EJS',
    repo: 'https://github.com/Nainil1412/Event-Management-',
  },
  {
    number: 'D',
    title: 'Razorpay Payment Flow',
    description: 'A focused donation website integrating Razorpay payments with a simple multi-page experience and automatic payment receipt email handling.',
    stack: 'HTML · CSS · Bootstrap · JavaScript · Razorpay',
    repo: 'https://github.com/Nainil1412/Payment-Gateway-Integration',
  },
];

const workflowSteps = [
  ['01', 'Understand', 'Turn the product problem into a clear user flow, technical boundary, and definition of done.'],
  ['02', 'Design', 'Shape the data model, permissions, integration seams, and interface before complexity spreads.'],
  ['03', 'Build with leverage', 'Use Claude Code and OpenAI Codex for exploration, refactoring, tests, and documentation - with manual review.'],
  ['04', 'Validate and ship', 'Prove the behavior with focused tests, browser checks, and a clean handoff that the next engineer can trust.'],
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(() => window.localStorage.getItem('nainil-theme') === 'dark');

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setDarkMode((current) => {
    const next = !current;
    window.localStorage.setItem('nainil-theme', next ? 'dark' : 'light');
    return next;
  });

  return (
    <div className={darkMode ? 'site-shell dark-theme' : 'site-shell'}>
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Nainil Oza home">
          <span className="wordmark-mark">N</span>
          <span>NAINIL OZA</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#stack" onClick={closeMenu}>Capabilities</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="mailto:nainiloza1412@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top" tabIndex="-1">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="live-dot" /> Available for thoughtful product teams</p>
            <h1>I build the systems<br /><em>behind the product.</em></h1>
            <p className="hero-lede">Full-stack developer with nearly 4 years of experience building configurable platforms, dependable data flows, and agentic AI workflows.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/Nainil_Oza_Resume.pdf" download><Download size={16} /> Resume</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="System architecture illustration">
            <div className="visual-noise" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="architecture-grid" />
            <div className="system-core"><span>PRODUCT</span><strong>→</strong><span>PLATFORM</span></div>
            <div className="signal signal-one"><span className="signal-line" /> DATA</div>
            <div className="signal signal-two"><span className="signal-line" /> ACCESS</div>
            <div className="signal signal-three"><span className="signal-line" /> EVENTS</div>
            <p className="visual-caption">01 / 03<br /><span>Turning complexity into flow</span></p>
          </div>
        </section>

        <section className="signal-strip" aria-label="Experience highlights">
          <div><span className="strip-label">EXPERIENCE</span><strong>Nearly 4 years</strong></div>
          <div><span className="strip-label">SPECIALTY</span><strong>CRM · E-commerce · Agentic AI</strong></div>
          <div><span className="strip-label">BASE</span><strong>Ahmedabad, India <span className="flag">●</span></strong></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading reveal"><p className="section-kicker">01 / SELECTED WORK</p><h2>Useful complexity,<br /><span>made legible.</span></h2><p className="section-intro">I care about the seams: where data becomes a decision, where a workflow becomes a habit, and where a feature has to survive real operations.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project-${project.accent} reveal`} key={project.index}>
                <div className="project-index">{project.index}</div>
                <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p></div>
                <div className="project-detail"><p>{project.detail}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <ArrowUpRight className="project-arrow" size={22} />
              </article>
            ))}
          </div>
        </section>

        <section className="github-work section-wrap" id="github-work">
          <div className="github-heading reveal"><p className="section-kicker">01B / PROJECTS</p><h2>Proof of<br /><span>range.</span></h2><p className="section-intro">A few product builds that show how I think across agentic AI, interaction, backend flows, and integrations.</p></div>
          <div className="github-list reveal delay-1">
            {githubProjects.map((project) => (
              <a className="github-project" href={project.repo} target="_blank" rel="noreferrer" key={project.title}>
                <span className="github-number">{project.number}</span>
                <div><h3>{project.title}</h3><p>{project.description}</p><span className="github-stack">{project.stack}</span></div>
                <ArrowUpRight className="project-arrow" size={21} />
              </a>
            ))}
          </div>
        </section>

        <section className="stack section-wrap" id="stack">
          <div className="stack-header reveal"><p className="section-kicker">02 / CAPABILITIES</p><h2>Depth where<br /><span>it counts.</span></h2></div>
          <div className="skills-list reveal delay-1">
            {skills.map(([label, value]) => <div className="skill-row" key={label}><span>{label}</span><p>{value}</p><Check size={17} /></div>)}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-number">03</div>
          <div className="about-copy reveal"><p className="section-kicker">03 / THE BUILDER</p><h2>Good software is<br /><span>a team sport.</span></h2><p>I&apos;m a Software Developer at eSparkBiz, where I architect enterprise CRM modules and the APIs behind them. I&apos;ve worked across product surfaces, databases, integrations, and production delivery - which means I&apos;m comfortable zooming in on a query and zooming out to the workflow it serves.</p><p>My favorite work sits in that middle ground: ambitious enough to matter, concrete enough to ship.</p><div className="career-line"><div><strong>2023—now</strong><span>Software Developer · eSparkBiz</span></div><div><strong>2023</strong><span>Software Developer Intern · eDelta</span></div><div><strong>2019—23</strong><span>B.E. Information Technology · GCET</span></div></div></div>
          <div className="about-aside reveal delay-1"><p className="aside-label">CURRENTLY EXPLORING</p><p>How AI-assisted development can make engineering teams faster without making the thinking shallower.</p><div className="aside-rule" /><p className="aside-label">WORKING LANGUAGES</p><p>English · Hindi · Gujarati</p></div>
        </section>

        <section className="workflow section-wrap" id="workflow">
          <div className="workflow-heading reveal"><p className="section-kicker">04 / HOW I WORK</p><h2>From ambiguity<br /><span>to shipped.</span></h2><p className="section-intro">The tools change. The discipline stays: make the problem smaller, make the system clearer, and leave evidence behind.</p></div>
          <div className="workflow-list reveal delay-1">
            {workflowSteps.map(([number, title, description]) => <div className="workflow-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}
          </div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-line" /><p className="section-kicker">05 / NEXT MOVE</p><h2>Have a hard problem<br /><em>worth solving?</em></h2><a className="contact-link" href="mailto:nainiloza1412@gmail.com">nainiloza1412@gmail.com <ArrowUpRight size={28} /></a></section>
      </main>

      <footer className="footer section-wrap"><span>© {new Date().getFullYear()} Nainil Oza</span><span>Built with care · Designed for clarity</span><div className="socials"><a href="https://github.com/Nainil1412" aria-label="GitHub">GitHub</a><a href="https://linkedin.com/in/nainiloza" aria-label="LinkedIn">LinkedIn</a><a href="mailto:nainiloza1412@gmail.com" aria-label="Email"><Mail size={18} /></a></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
