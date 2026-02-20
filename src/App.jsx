import { useEffect, useRef } from "react";
import "./index.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
  { icon: "🐍", name: "Python" },
  { icon: "☕", name: "Java" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "⚛️", name: "React" },
  { icon: "🔺", name: "Angular" },
  { icon: "🌿", name: "Node.js" },
  { icon: "🗄️", name: "SQL / MySQL" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "☁️", name: "Azure" },
  { icon: "🔁", name: "Git" },
];

const projects = [
  {
    emoji: "☀️",
    imgClass: "p1",
    title: "Solar Energy Analysis",
    desc: "An AI and ML powered analysis of solar energy data, uncovering patterns and insights to support smarter, data-driven energy decisions.",
    tags: [
      { label: "Python", style: { background: "rgba(139,61,255,0.15)", color: "#b57bff" } },
      { label: "AI / ML", style: { background: "rgba(200,241,53,0.1)", color: "var(--lime)" } },
      { label: "Jupyter", style: { background: "rgba(255,255,255,0.05)", color: "var(--muted)" } },
    ],
    github: "https://github.com/Saiashrita/Solar-Energy-Analysis",
  },
  {
    emoji: "🛍️",
    imgClass: "p2",
    title: "Shopping Trends Analysis",
    desc: "A deep dive into consumer shopping patterns using Python — visualizing trends, behaviors, and insights from real-world retail data.",
    tags: [
      { label: "Python", style: { background: "rgba(61,240,232,0.1)", color: "var(--sky)" } },
      { label: "Data Analysis", style: { background: "rgba(200,241,53,0.1)", color: "var(--lime)" } },
      { label: "Jupyter", style: { background: "rgba(255,255,255,0.05)", color: "var(--muted)" } },
    ],
    github: "https://github.com/Saiashrita/Shopping_trends_analysis",
  },
  {
    emoji: "📧",
    imgClass: "p3",
    title: "Mail Summaries Agent",
    desc: "An intelligent AI agent that automatically reads and summarizes emails — saving time and cutting through inbox clutter with smart automation.",
    tags: [
      { label: "AI Agent", style: { background: "rgba(255,94,94,0.12)", color: "var(--coral)" } },
      { label: "Automation", style: { background: "rgba(139,61,255,0.15)", color: "#b57bff" } },
      { label: "Python", style: { background: "rgba(255,255,255,0.05)", color: "var(--muted)" } },
    ],
    github: "https://github.com/Saiashrita/mail-summaries-agent",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
      }
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  return (
    <nav>
      <div className="nav-logo">Saiashrita.</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="dot" />
          IT Engineering Student &amp; Developer
        </div>

        <h1>
          Sai<em>ashrita</em>
          <br />
          <span className="accent">Builds</span> the Web.
        </h1>

        <p className="hero-sub">
          IT engineering student who enjoys building backend systems,
          data-driven apps, and full-stack solutions — learning by doing,
          one project at a time.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="hero-floats">
        <div className="float-card c1">
          <div className="label">Repositories</div>
          <div className="value">13+</div>
          <div className="sub">On GitHub</div>
        </div>
        <div className="float-card c2">
          <div className="label">Focus</div>
          <div className="value">Full</div>
          <div className="sub">Stack developer</div>
        </div>
        <div className="float-card c3">
          <div className="label">Exploring</div>
          <div className="value">AI/ML</div>
          <div className="sub">Driven systems</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-label">Who I Am</div>
        <div className="section-title">
          A developer who
          <br />
          learns by doing.
        </div>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Hi! I'm <span>Saiashrita Panganti</span>, an IT engineering student
            who genuinely enjoys building things — whether it's a backend system,
            a data analysis project, or a full-stack application.
          </p>
          <p>
            My skills didn't come from just lectures — they came from{" "}
            <span>debugging errors, rewriting logic, breaking code, fixing it</span>,
            and understanding why it broke in the first place.
          </p>
          <p>
            Outside tech, I <span>coach karate and play competitive frisbee</span>.
            Sports taught me discipline, resilience, and how to perform under
            pressure — skills I carry into engineering every single day.
          </p>
          <div className="about-chips">
            <span className="chip lime">Problem Solver</span>
            <span className="chip coral">Karate Coach 🥋</span>
            <span className="chip sky">Frisbee Player 🥏</span>
            <span className="chip violet">AI Explorer</span>
            <span className="chip lime">Lifelong Learner</span>
          </div>
        </div>

        <div className="about-visual reveal">
          <div className="av-box avb1">💻</div>
          <div className="av-box avb2">🥋</div>
          <div className="av-box avb3">⚡</div>
          <div className="av-box avb4">🚀</div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <div className="section-label">What I Know</div>
        <div className="section-title">Skills &amp; Technologies</div>
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card reveal" key={s.name}>
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-level">
              <div className="skill-bar" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label">My Work</div>
        <div className="section-title">Featured Projects</div>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card reveal" key={p.title}>
            <div className={`project-img ${p.imgClass}`}>{p.emoji}</div>
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" style={t.style} key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  ⌥ GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="reveal">
        <div className="section-label">Let's Talk</div>
        <div className="section-title">Got a project in mind?</div>
      </div>

      <div className="contact-wrap reveal">
        <p>
          I'm always open to exciting opportunities, collaborations, or just a
          good conversation about code and creativity. Drop me a message — I'd
          love to connect!
        </p>
        <div className="contact-links">
          <a
            href="mailto:saiashritapanganti@gmail.com"
            className="contact-btn cb-email"
          >
            ✉️ Email Me
          </a>
          <a
            href="https://github.com/Saiashrita"
            target="_blank"
            rel="noreferrer"
            className="contact-btn cb-github"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saiashrita-panganti-b1900627a/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn cb-linkedin"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>
        © 2026 <span className="footer-name">Saiashrita Panganti</span>. Crafted
        with ❤️
      </span>
      <span>IT Engineering Student &amp; Developer</span>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  useReveal();

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}