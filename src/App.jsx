import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// ----- Tabs kept -----
const TABS = ["Home", "Projects", "Experience", "Education"];

const variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit:    { opacity: 0, y: -10, filter: "blur(4px)" },
};

function Section({ children }) {
  return <div className="section">{children}</div>;
}

/* =========================
   Typewriter headline
   ========================= */
function useTypewriter(words, speed = 60, hold = 1200, erase = 35) {
  const seq = useMemo(() => words, [words]);
  const [i, setI] = useState(0);       // which word
  const [t, setT] = useState("");      // text
  const [phase, setPhase] = useState("typing"); // typing | holding | erasing

  useEffect(() => {
    let id;
    const current = seq[i];

    if (phase === "typing") {
      if (t.length < current.length) {
        id = setTimeout(() => setT(current.slice(0, t.length + 1)), speed);
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      id = setTimeout(() => setPhase("erasing"), hold);
    } else if (phase === "erasing") {
      if (t.length > 0) {
        id = setTimeout(() => setT(current.slice(0, t.length - 1)), erase);
      } else {
        setI((i + 1) % seq.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(id);
  }, [seq, i, t, phase, speed, hold, erase]);

  return t;
}

/* =========================
   CONTENT
   ========================= */

function Home() {
  const typed = useTypewriter([
    "Abdollah Hosseini",
    "Software Engineer",
    "Web Developer",
    "Problem Solver",
  ]);

  return (
    <div className="home">
      <div className="home-inner">
        <h1 className="title xl">
          {" "}
          <span className="gradient-pp animated-gradient">{typed}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="subtitle">
          I’m a second-year Computer Science student at the University of Bath. I build
          fast, minimal interfaces and data-driven projects.
        </p>

        <div className="cta-row">
          <a className="btn btn-solid" href="/Abdollah-CV.pdf" download>
            Download CV
          </a>
          <a className="btn btn-ghost" href="#projects">
            View Projects
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/AbdollahHosseini"
            target="_blank"
          >
            GitHub
          </a>
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
        "Python pipeline for market data; engineered features & visualised with Matplotlib.",
        "XGBoost achieved 10% lower MAE vs Ridge; 52% DA outperforming baselines.",
      ],
      stack: ["Python", "NumPy", "pandas", "Matplotlib", "PyTorch", "XGBoost"],
      code: "https://github.com/AbdollahHosseini/Stock-Predictor-via-Neural-Network",
    },
    {
      title: "Portfolio Website",
      date: "Jul 2025",
      bullets: [
        "Single-page React + Framer Motion with animated transitions and gradient branding.",
        "Built with Vite; deployed on Vercel; custom domain abdollah.dev.",
      ],
      stack: ["React", "Vite", "Framer Motion", "CSS", "Vercel"],
      demo: "https://abdollah.dev",
      code: "https://github.com/AbdollahHosseini?tab=repositories",
    },
  ];
  return (
    <Section>
      <a id="projects" />
      <div className="stack-v gap-lg">
        {items.map(p => (
          <article key={p.title} className="card">
            <div className="card-head">
              <h3 className="gradient-pp">{p.title}</h3>
              <div className="muted">{p.date}</div>
            </div>
            <ul className="bullets">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <ul className="chip-row">
              {p.stack.map(s => <li key={s} className="chip">{s}</li>)}
            </ul>
            <div className="links">
              {p.demo && <a target="_blank" href={p.demo}>Live</a>}
              {p.code && <a target="_blank" href={p.code}>Code</a>}
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
      bullets: [
        "Collaborated under peak pressure; ensured hygiene standards; managed stock rotation.",
      ],
    },
    {
      title: "Treasurer",
      org: "University of Bath",
      date: "Jul 2025 – Present",
      bullets: [
        "Managed finances for a 500+ member society; budgets of £1,000+ per event.",
        "Sponsorships increased funding by ~30%; cashflow reconciliation across events.",
      ],
    },
    {
      title: "Summer Intern",
      org: "Care Zone Trading",
      date: "Jun 2025 – Aug 2025",
      bullets: [
        "Python + PostgreSQL inventory system tracking 300+ daily shipments; +20% efficiency.",
      ],
    },
  ];
  return (
    <Section>
      <div className="stack-v gap-lg">
        {roles.map(r => (
          <article key={r.title} className="card">
            <h3 className="gradient-pp">{r.title} — <span className="muted">{r.org}</span></h3>
            <div className="muted">{r.date}</div>
            <ul className="bullets">
              {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section>
      <div className="stack-v gap-lg">
        <article className="card">
          <h3 className="gradient-pp">University of Bath — BSc (Hons) Computer Science</h3>
          <div className="muted">Sep 2024 – Jun 2028</div>
          <p className="muted">First Year: 80% (First Class). Modules include Algorithms, ML, Cybersecurity, HCI, Software Engineering, Visual Computing.</p>
        </article>
      </div>
    </Section>
  );
}

/* =========================
   APP SHELL
   ========================= */
export default function App() {
  const [tab, setTab] = useState("Home");

  const renderTab = () => {
    switch (tab) {
      case "Home": return <Home />;
      case "Projects": return <Projects />;
      case "Experience": return <Experience />;
      case "Education": return <Education />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand gradient-pp animated-gradient">abdollah.dev</div>
        <nav className="tabs">
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
      </header>

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
            {renderTab()}
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="foot muted">
        <div className="footer-links">
          <a href="mailto:aah221@bath.ac.uk">aah221@bath.ac.uk</a>
          <span>·</span>
          <a target="_blank" href="https://github.com/AbdollahHosseini">GitHub</a>
          <span>·</span>
          <a target="_blank" href="https://www.linkedin.com/in/abdollah-hosseini-9855ab236/">LinkedIn</a>
        </div>
        <div>© {new Date().getFullYear()} Abdollah Hosseini</div>
      </footer>
    </div>
  );
}