import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Code2,
  Disc3,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Radio,
  Sparkles,
  Terminal
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Terceiro Setor",
    category: "PLATFORM / FULLSTACK",
    description:
      "A platform connecting nonprofits and beneficiaries, modernized into a contemporary web architecture.",
    stack: ["Next.js", "Java 17", "Spring Boot", "PostgreSQL"],
    metric: "8,200+",
    metricLabel: "beneficiaries",
    secondaryMetric: "160+",
    secondaryLabel: "nonprofits",
    visual: "terceiro"
  },
  {
    number: "02",
    title: "Teigro",
    category: "BACKEND / API ENGINEERING",
    description:
      "Backend services designed around dependable APIs, data workflows and production stability.",
    stack: ["NestJS", "Node.js", "TypeScript", "DynamoDB"],
    metric: "99.8%",
    metricLabel: "reported uptime",
    secondaryMetric: "API",
    secondaryLabel: "engineering",
    visual: "teigro"
  }
];

const credits = [
  { label: "BACKEND", items: "NestJS · Node.js · Java · Spring Boot" },
  { label: "FRONTEND", items: "React · Next.js · TypeScript" },
  { label: "DATA", items: "PostgreSQL · DynamoDB" },
  { label: "DELIVERY", items: "Docker · GitHub Actions · CI/CD" }
];

function SectionEyebrow({
  index,
  children
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-eyebrow">
      <span>{index}</span>
      <span className="eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="COMEBACK.exe home">
          <span className="wordmark-icon"><Disc3 size={19} /></span>
          <span>COMEBACK<span className="wordmark-dot">.exe</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#releases">RELEASES</a>
          <a href="#profile">PROFILE</a>
          <a href="#credits">CREDITS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a className="availability" href="mailto:hello@example.com">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </a>
        <button className="mobile-menu" aria-label="Open navigation">
          <Menu size={21} />
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="system-label">
            <span className="system-pulse" />
            INDEPENDENT DEVELOPER · BRAZIL
          </div>

          <p className="hero-kicker">THE NEXT CHAPTER STARTS HERE</p>
          <h1>
            GIAN
            <span className="hero-name-second">MICHEL<span className="hero-period">.</span></span>
          </h1>
          <div className="hero-role">
            <span className="role-bracket">[</span>
            FULLSTACK DEVELOPER
            <span className="role-bracket">]</span>
          </div>
          <p className="hero-description">
            I build digital products, reliable backends and thoughtful
            experiences. Turning complex problems into software people can use.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#releases">
              EXPLORE RELEASES <ArrowUpRight size={16} />
            </a>
            <a className="button button-quiet" href="#contact">
              LET&apos;S CONNECT <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">BASE</span>
              <span className="meta-value">BRAZIL · REMOTE</span>
            </div>
            <div>
              <span className="meta-label">DEBUT</span>
              <span className="meta-value">2020</span>
            </div>
            <div>
              <span className="meta-label">CURRENT MODE</span>
              <span className="meta-value meta-live">BUILDING WHAT&apos;S NEXT</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract COMEBACK.exe album artwork">
          <div className="art-orbit orbit-a" />
          <div className="art-orbit orbit-b" />
          <div className="art-grid" />
          <div className="art-disc">
            <div className="disc-shine" />
            <div className="disc-hole" />
            <span className="disc-label">CB / 026</span>
          </div>
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-caption">
            <span>FIG. 001 / DIGITAL IDENTITY</span>
            <span>EST. MMXX</span>
          </div>
          <div className="art-sticker">
            <Sparkles size={13} />
            <span>NEW<br />CHAPTER</span>
          </div>
          <div className="art-index">01—04</div>
        </div>

        <a className="scroll-cue" href="#releases">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={15} />
        </a>
      </section>

      <section className="release-section section-wrap" id="releases">
        <div className="section-heading">
          <div>
            <SectionEyebrow index="01">THE DISCOGRAPHY</SectionEyebrow>
            <h2>SELECTED <span>RELEASES</span></h2>
          </div>
          <p className="section-note">
            A selection of systems, products<br />and things brought to life.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.visual}`}>
                <div className="project-art-top">
                  <span>COMEBACK.exe / RELEASE {project.number}</span>
                  <span>2023—26</span>
                </div>
                {project.visual === "terceiro" ? (
                  <div className="terceiro-visual">
                    <div className="visual-ring ring-one" />
                    <div className="visual-ring ring-two" />
                    <div className="visual-core"><span>TS</span></div>
                    <div className="visual-orbit-dot" />
                    <span className="visual-side-note">CONNECTING<br />PEOPLE / PURPOSE</span>
                  </div>
                ) : (
                  <div className="teigro-visual">
                    <div className="teigro-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="teigro-node node-a" />
                    <div className="teigro-node node-b" />
                    <div className="teigro-node node-c" />
                    <span className="teigro-code">SYSTEMS / IN MOTION</span>
                  </div>
                )}
                <div className="project-art-bottom">
                  <span>LIMITED EDITION / DIGITAL</span>
                  <span>G.M.®</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-index">{project.number} <span>—</span> {project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-stats">
                  <div>
                    <strong>{project.metric}</strong>
                    <span>{project.metricLabel}</span>
                  </div>
                  <div>
                    <strong>{project.secondaryMetric}</strong>
                    <span>{project.secondaryLabel}</span>
                  </div>
                </div>
                <a className="text-link" href="#contact">
                  CASE STUDY DETAILS <MoveUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section section-wrap" id="profile">
        <SectionEyebrow index="02">ARTIST PROFILE</SectionEyebrow>
        <div className="profile-grid">
          <h2>BUILT WITH<br /><span>INTENTION.</span></h2>
          <div className="profile-copy">
            <p className="profile-lead">
              Software is more than making things work. It&apos;s understanding
              the problem, choosing the right tools and caring about what ships.
            </p>
            <p>
              I&apos;m a fullstack developer with a degree in Information Systems
              and experience across frontend applications, backend services,
              APIs and data-driven platforms. I enjoy moving between product
              thinking and engineering detail.
            </p>
            <div className="profile-tags">
              <span><Code2 size={13} /> PRODUCT-MINDED</span>
              <span><Terminal size={13} /> FULLSTACK</span>
              <span><Radio size={13} /> ALWAYS ITERATING</span>
            </div>
          </div>
        </div>
      </section>

      <section className="credits-section section-wrap" id="credits">
        <div className="section-heading">
          <div>
            <SectionEyebrow index="03">PRODUCTION NOTES</SectionEyebrow>
            <h2>THE <span>CREDITS</span></h2>
          </div>
          <AudioLines className="credits-icon" size={30} />
        </div>
        <div className="credits-panel">
          <div className="credits-panel-head">
            <span>COMEBACK.exe / TECHNICAL CREDITS</span>
            <span>VER. 01.26</span>
          </div>
          {credits.map((credit, index) => (
            <div className="credit-row" key={credit.label}>
              <span className="credit-number">0{index + 1}</span>
              <span className="credit-label">{credit.label}</span>
              <span className="credit-items">{credit.items}</span>
              <ArrowUpRight size={15} className="credit-arrow" />
            </div>
          ))}
          <div className="credits-footer">
            <span>WRITTEN, BUILT & ITERATED BY GIAN MICHEL</span>
            <span><Sparkles size={12} /> INDEPENDENT PRODUCTION</span>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card">
          <div className="contact-orb" />
          <SectionEyebrow index="04">FAN SIGN / CONTACT</SectionEyebrow>
          <h2>LET&apos;S MAKE<br /><span>THE NEXT THING.</span></h2>
          <p>
            Have a project, an opportunity or an interesting problem?
            I&apos;d be glad to hear about it.
          </p>
          <a className="button button-primary contact-button" href="mailto:hello@example.com">
            <Mail size={16} /> GET IN TOUCH <ArrowUpRight size={15} />
          </a>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN</a>
          </div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-icon"><Disc3 size={17} /></span>
          <span>COMEBACK<span className="wordmark-dot">.exe</span></span>
        </a>
        <span>DESIGNED & DEVELOPED BY GIAN MICHEL</span>
        <span>© 2026 · ALL SYSTEMS NOMINAL</span>
      </footer>
    </main>
  );
}
