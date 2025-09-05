import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const TABS = ["Home", "Projects", "Experience", "Education", "Skills", "Activities", "Contact"];

const variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit:    { opacity: 0, y: -10, filter: "blur(4px)" },
};

function Section({ children }) {
  return <div className="section">{children}</div>;
}

/* === CONTENT SECTIONS (filled from your CV) === */

function Home() {
  return (
    <div className="home">
      <div className="home-inner">
        <h1 className="title xl">Abdollah Hosseini</h1>
        <p className="subtitle">BSc (Hons) Computer Science with Industrial Placement — University of Bath</p>
        <p className="muted center">
          Second-Year CS with a First-Class grade in Year 1 (80%).</p>
        <p className="muted center">Second-Year Modules: Algorithms, ML, Cybersecurity,
          HCI, Software Engineering, and Visual Computing.
        </p>
        <div className="cta-row">
          <a className="btn" href="/Abdollah-CV.pdf" download>Download CV</a>
          <a className="btn ghost" href="https://www.linkedin.com/in/abdollah-hosseini-9855ab236/" target="_blank">LinkedIn</a>
          <a className="btn ghost" href="https://github.com/AbdollahHosseini?tab=repositories" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const items = [
    {
      title: "Stock Prediction",
      date: "Aug 2025",
      location: "Bath, United Kingdom",
      bullets: [
        "End-to-end workflow in Python with pandas, NumPy, yfinance; visualized with matplotlib.",
        "Engineered features: lagged returns, z-scores, MAs, momentum, Bollinger Bands.",
        "Compared LSTM (PyTorch) vs Ridge; XGBoost performed best on test set.",
        "Benchmarked with Directional Accuracy and MAE against persistence & buy-and-hold baselines."
      ],
      stack: ["Python", "NumPy", "pandas", "matplotlib", "PyTorch", "XGBoost"],
      code: "https://github.com/AbdollahHosseini?tab=repositories",
      demo: ""
    },
    {
      title: "Calorie Wise",
      date: "Mar–Apr 2025",
      location: "Bath, United Kingdom",
      bullets: [
        "Team-led web app in HTML/CSS/JS for meal planning + calorie & step tracking.",
        "Led a team of 10 using GitHub/Jira for coordination and delivery.",
        "Designed competitive feature for consistency; 70%+ of users found it helpful."
      ],
      stack: ["HTML", "CSS", "JavaScript", "GitHub", "Jira"],
      code: "",
      demo: ""
    }
  ];
  return (
    <Section>
      <div className="stack-v gap-lg">
        {items.map(p => (
          <article key={p.title} className="card">
            <div className="card-head">
              <h3>{p.title}</h3>
              <div className="muted">{p.date} · {p.location}</div>
            </div>
            <ul className="bullets">
              {p.bullets.map((b,i)=><li key={i}>{b}</li>)}
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
      loc: "Bath, United Kingdom",
      bullets: [
        "Maintained kitchen operations in a fast-paced environment with high hygiene standards.",
        "Collaborated under peak pressure to meet demanding service times.",
        "Managed stock rotation and kitchen organization for smooth operations."
      ]
    },
    {
      title: "Treasurer",
      org: "University of Bath (Society)",
      date: "Jul 2025 – Present",
      loc: "Bath, United Kingdom",
      bullets: [
        "Hosted events for 500+ members (Freshers’ Week, Grand Iftar).",
        "Handled £1,000+ transactions; managed capital allocation to events.",
        "Secured external sponsorships (e.g., One Ummah) to boost funding and cut costs."
      ]
    },
    {
      title: "Summer Intern",
      org: "Care Zone Trading",
      date: "Jun 2024 – Aug 2024",
      loc: "Dubai, United Arab Emirates",
      bullets: [
        "Built a Python inventory system logging 30+ daily shipments into SQLite.",
        "Optimized search/retrieval with NumPy, improving handling efficiency by ~20%.",
        "Implemented error handling, queries, and unit tests for reliability."
      ]
    }
  ];
  return (
    <Section>
      <div className="stack-v gap-lg">
        {roles.map(r => (
          <article key={r.title} className="card">
            <h3>{r.title} — <span className="muted">{r.org}</span></h3>
            <div className="muted">{r.date} · {r.loc}</div>
            <ul className="bullets">
              {r.bullets.map((b,i)=><li key={i}>{b}</li>)}
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
          <h3>University of Bath — BSc (Hons) Computer Science (with placement)</h3>
          <div className="muted">Sep 2024 – Jun 2028</div>
          <p className="muted">First-Year Grade: First Class Honours (80%). Member of BCSS, CodeSoc, BUIS, Persian Society.</p>
          <div className="subgrid">
            <div>
              <h4>Year 2 Modules</h4>
              <p className="muted">
                Advanced Programming; Algorithms & Complexity; Cybersecurity; HCI 1 & 2; Machine Learning;
                Software Engineering; Visual Computing
              </p>
            </div>
            <div>
              <h4>Selected First-Year Modules</h4>
              <ul className="muted list-compact">
                <li>Artificial Intelligence (74%) — BFS/DFS, A*, CSPs, Naive Bayes</li>
                <li>Computer Systems Architecture (75%) — OS fundamentals</li>
                <li>Programming 1 (75%) — Functional programming in Haskell</li>
                <li>Discrete Mathematics & Databases (77%) — DB design & security</li>
                <li>Programming 2 (83.5%) — Java OOP, threads, linked lists</li>
                <li>Mathematics for Computation (96%) — matrices, calculus, Taylor</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card">
          <h3>Dubai English Speaking College (DESS College)</h3>
          <div className="muted">2017 – 2024</div>
          <p className="muted">A-Levels: Maths (A*), Computer Science (A*), Economics (A). GCSE: 9999887.</p>
        </article>
      </div>
    </Section>
  );
}

function Skills() {
  const rows = [
    { k: "Languages", v: "Python, JavaScript, HTML, CSS, Java, Haskell, C, SQL" },
    { k: "Libraries & Frameworks", v: "pandas, NumPy, Matplotlib, PyTorch, React, Node/Express" },
    { k: "Tools", v: "VS Code, Vim, Git/GitHub, Jira, AWS, Agile/SCRUM" },
  ];
  return (
    <Section>
      <div className="grid">
        {rows.map(r => (
          <div className="card" key={r.k}>
            <h3>{r.k}</h3>
            <p className="muted">{r.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Activities() {
  const items = [
    {
      title: "Hackathon Participant",
      body: "Built an educational analytics tool identifying weak performance areas; helped improve averages in low-scoring subjects."
    },
    {
      title: "Competitive Programming Enthusiast",
      body: "Solved 40+ problems on LeetCode/Codeforces, sharpening recursion, DP, and interview-style problem solving."
    },
    {
      title: "Web Development Bootcamp",
      body: "2-month hands-on: HTML/CSS/JS, React, Node/Express, APIs, SQL; delivered personal web pages and projects."
    }
  ];
  return (
    <Section>
      <div className="stack-v gap-lg">
        {items.map(a => (
          <article key={a.title} className="card">
            <h3>{a.title}</h3>
            <p className="muted">{a.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section>
      <div className="card center">
        <h3>Get in touch</h3>
        <p className="muted">
          <a href="mailto:aah221@bath.ac.uk">aah221@bath.ac.uk</a> ·{" "}
          <a target="_blank" href="https://www.linkedin.com/in/abdollah-hosseini-9855ab236/">LinkedIn</a> ·{" "}
          <a target="_blank" href="https://github.com/AbdollahHosseini?tab=repositories">GitHub</a>
        </p>
        <p className="muted">United Kingdom · +44 790 851 3870</p>
      </div>
    </Section>
  );
}

/* === APP SHELL WITH TABS + TRANSITIONS === */

export default function App() {
  const [tab, setTab] = useState("Home");

  const renderTab = () => {
    switch (tab) {
      case "Home": return <Home />;
      case "Projects": return <Projects />;
      case "Experience": return <Experience />;
      case "Education": return <Education />;
      case "Skills": return <Skills />;
      case "Activities": return <Activities />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">abdollah.dev</div>
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

      <footer className="foot muted">© {new Date().getFullYear()} Abdollah Hosseini</footer>
    </div>
  );
}