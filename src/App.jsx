import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const TABS = ["Home", "Projects", "Experience", "Education"];

const variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit:    { opacity: 0, y: -10, filter: "blur(4px)" },
};

function Section({ children }) { return <div className="section">{children}</div>; }

/* ====== CONTENT ====== */

function Home() {
  return (
    <div className="home">
      <div className="home-inner">
        <h1 className="title xl neon-tron">Abdollah Hosseini</h1>
        <p className="subtitle">
          I’m a second-year Computer Science student at the University of Bath. I build
          fast, minimal interfaces and data-driven projects.
        </p>
        <div className="cta-row">
          <button
            className="btn btn-solid"
            onClick={() => typeof window !== 'undefined' && window.setTab && window.setTab('Projects')}
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
const items = [
  {
    title: "Stock Predictor",
    date: "Aug 2025",
    bullets: [
      "Python pipeline for market data; engineered features and visualised trends with Matplotlib.",
      "XGBoost achieved 10% lower MAE vs Ridge and 52% DA, outperforming baseline strategies."
    ],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "PyTorch", "XGBoost"],
    code: "https://github.com/AbdollahHosseini/Stock-Predictor-via-Neural-Network"
  },
  {
    title: "Portfolio Website",
    date: "Jul 2025",
    bullets: [
      "Single-page React + Framer Motion with animated transitions and gradient branding.",
      "Built with Vite and deployed to Vercel on the custom domain abdollah.dev."
    ],
    stack: ["React", "Vite", "Framer Motion", "CSS", "Vercel"],
    code: "https://github.com/AbdollahHosseini?tab=repositories"
  },
  {
    title: "Calorie Wise",
    date: "2025",
    bullets: [
      "Team-built nutrition-tracking web app; led planning with Jira and Agile practices.",
      "Added challenges and progress tracking; 70% of users reported improved consistency."
    ],
    stack: ["HTML/CSS", "JavaScript"],
    code: "https://github.com/AbdollahHosseini/Calorie-wise"
  },
  {
    title: "Sudoku Solver",
    date: "2025",
    bullets: [
      "Modelled Sudoku as a CSP with variables and constraints derived from grid rules.",
      "Implemented MRV heuristic with forward checking to prune search and speed solutions."
    ],
    stack: ["Python", "NumPy"],
    code: "https://github.com/AbdollahHosseini/SudokuSolver"
  },
  {
    title: "Email Spam Classifier",
    date: "2025",
    bullets: [
      "Built a Naive Bayes classifier with Laplace smoothing to detect spam from tokenised emails.",
      "Evaluated on labelled data and reported accuracy/precision-recall on held-out test sets."
    ],
    stack: ["Python", "NumPy", "Pandas", "Naive Bayes"],
    code: "https://github.com/AbdollahHosseini/spamclassifier"
  }
];
  return (
    <Section>
      <a id="projects" />
      <div className="stack-v gap-lg">
        {items.map(p => (
          <article key={p.title} className="card center-card">
            <div className="card-head">
              <h3 className="gradient-pp">{p.title}</h3>
              <div className="muted">{p.date}</div>
            </div>
            <ul className="bullets">{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            <ul className="chip-row">{p.stack.map(s => <li key={s} className="chip">{s}</li>)}</ul>
            <div className="links">
              {p.title === "Portfolio Website" ? <a className="link-btn" target="_blank" href="https://abdollah.dev">You are already here, silly!</a> : <a className="link-btn" target="_blank" href={p.code}>Code</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      title: "Back of House Team Member",
      org: "Nando’s",
      date: "Aug 2025 – Present",
      bullets: ["Collaborated under peak pressure; ensured hygiene standards; managed stock rotation."],
    },
    {
      title: "Treasurer",
      org: "University of Bath",
      date: "Jul 2025 – Present",
      bullets: [
        "Managed finances for a 500+ member society; budgets of £1,000+ per event.",
        "Sponsorships increased funding by ~30%; cash-flow reconciliation across events.",
      ],
    },
    {
      title: "Summer Intern",
      org: "Care Zone Trading",
      date: "Jun 2025 – Aug 2025",
      bullets: ["Python + PostgreSQL inventory system tracking 300+ shipments/day; +20% efficiency."],
    },
  ];
  return (
    <Section>
      <div className="stack-v gap-lg">
        {roles.map(r => (
          <article key={r.title} className="card center-card">
            <h3 className="gradient-pp">{r.title} — <span className="muted">{r.org}</span></h3>
            <div className="muted">{r.date}</div>
            <ul className="bullets">{r.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section>
      <article className="card center-card">
        <h3 className="gradient-pp">University of Bath — BSc (Hons) Computer Science</h3>
        <div className="muted">Sep 2024 – Jun 2028</div>
        <p className="muted">First Year: 80% (First Class). Modules include Algorithms, ML, Cybersecurity, HCI, Software Engineering, Visual Computing.</p>
      </article>

      <article className="card center-card">
        <h3 className="gradient-pp">Dubai English Speaking College (DESS College)</h3>
        <div className="muted">Sep 2017 - Jun 2024</div>
        <p className="muted">A-levels: Mathematics (A*), Computer Science (A*), Economics (A) | GCSE: 9999887</p>
      </article>

    </Section>
  );
}

export default function App() {
  const [tab, setTab] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  if (typeof window !== 'undefined') window.setTab = setTab;
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand gradient-pp animated-gradient">abdollah.dev</div>

        {/* Desktop tabs */}
        <nav className="tabs desktop-only">
          {TABS.map(t => (
            <button
              key={t}
              className={`tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger mobile-only"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          {/* simple icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      {/* Mobile dropdown panel */}
      {mobileOpen && (
        <div className="mobile-menu mobile-only">
          {TABS.map(t => (
            <button
              key={t}
              className={`mobile-item ${tab === t ? "active" : ""}`}
              onClick={() => { setTab(t); setMobileOpen(false); }}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <main className="shell">
        <AnimatePresence mode="wait">
          <motion.section
            key={tab}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {tab === "Home" && <Home />}
            {tab === "Projects" && <Projects />}
            {tab === "Experience" && <Experience />}
            {tab === "Education" && <Education />}
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="foot muted">
        <div className="footer-icons">
          <a aria-label="Email" href="mailto:aah221@bath.ac.uk" className="icon-btn" title="Email">
            {/* mail icon */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
          </a>
          <a aria-label="GitHub" href="https://github.com/AbdollahHosseini" target="_blank" className="icon-btn" title="GitHub">
            {/* github icon */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.17-3.37-1.17-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03 .9 1.52 2.36 1.08 2.94.83 .09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .85-.27 2.78 1.02a9.7 9.7 0 0 1 5.06 0c1.93-1.29 2.78-1.02 2.78-1.02 .55 1.37.2 2.39.1 2.64 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95 .36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/abdollah-hosseini-9855ab236/" target="_blank" className="icon-btn" title="LinkedIn">
            {/* linkedin icon */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM7 8.62H3.88V20h3.12Zm5.56 0H9.44V20h3.12v-5.75c0-1.51.29-2.98 2.16-2.98s2.2 1.65 2.2 3.08V20H20V13.9c0-3.39-1.8-4.97-4.21-4.97a3.63 3.63 0 0 0-3.23 1.77h-.04Z"/></svg>
          </a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Abdollah Hosseini</div>
      </footer>
    </div>
  );
}
