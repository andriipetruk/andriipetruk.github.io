import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';

const SOCIALS = {
  email: 'andrey.petruk@gmail.com',
  github: 'https://github.com/andriipetruk',
  linkedin: 'https://www.linkedin.com/in/andriigpetruk/',
  medium: 'https://medium.com/@AndriiPeruk'
};

const pillars = [
  {
    title: 'LLM Reasoning & Safety',
    text:
      'How language models reason about software architecture — where confident recommendations become unsafe, and how to evaluate AI-assisted design decisions before they reach production.'
  },
  {
    title: 'Cloud-Native Architecture',
    text:
      'Resilient platforms built on Kubernetes, GitOps, observability, and policy-as-code — the unglamorous reliability work that makes everything else possible.'
  },
  {
    title: 'Autonomous Infrastructure',
    text:
      'Tools that explain, validate, and safely assist operational decisions while keeping deterministic engineering controls in place.'
  }
];

const projects = [
  {
    title: 'KubX',
    tag: 'Flagship · AI infrastructure',
    desc:
      'An autonomous control plane for cloud-native infrastructure. Closed-loop agents that observe, reason, propose, verify, and apply — under verifiable safety guarantees.',
    href: 'https://kubx.io'
  },
  {
    title: 'Architecture Reasoning Benchmark',
    tag: 'Research · evaluation',
    desc:
      'Evaluating how language models map system requirements and quality attributes to feasible architecture styles, including cases where the right answer is "this design is impossible."',
    href: null
  },
  {
    title: 'Infrastructure Knowledge Systems',
    tag: 'Experiments',
    desc:
      'Smaller probes around turning runbooks, architecture constraints, and operational knowledge into structured reasoning context for engineers and AI agents.',
    href: null
  }
];

const research = [
  {
    title: 'LLM-Augmented Architecture Style Selection for Cloud-Native Systems',
    meta: 'Draft · 2026',
    desc:
      'Whether language models can correctly map requirements and quality attributes to feasible architecture styles, and where they fail.'
  },
  {
    title: 'Safety Analysis of LLM Architectural Reasoning',
    meta: 'In progress',
    desc:
      'Cases where models produce confident but unsafe or infeasible recommendations for reliability-critical systems — and how to surface them.'
  },
  {
    title: 'Autonomous Infrastructure & Human-in-the-Loop Reliability Controls',
    meta: 'Research notes',
    desc:
      'How AI-assisted infrastructure can remain explainable, bounded, and auditable in production environments.'
  }
];

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrii Petruk',
    url: 'https://andriipetruk.com',
    image: 'https://andriipetruk.com/andrii-portrait.png',
    jobTitle: ['Systems Researcher', 'Infrastructure Architect', 'AI Systems Builder'],
    sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.medium],
    knowsAbout: [
      'LLM reasoning safety',
      'AI-assisted system design',
      'cloud-native architecture',
      'autonomous infrastructure',
      'distributed systems',
      'Kubernetes',
      'site reliability engineering',
      'AI infrastructure',
      'software architecture'
    ],
    description:
      'Andrii Petruk is a systems researcher, infrastructure architect, and AI systems builder focused on reliable AI, cloud-native architecture, distributed systems, and autonomous infrastructure.'
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <JsonLd />

      <header className="nav">
        <a className="mark" href="#top" aria-label="Andrii Petruk — home">
          AP
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#writing">Writing</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Personal Research Lab</p>
          <h1>
            Andrii<br />Petruk
          </h1>
          <p className="role">Systems Researcher · Infrastructure Architect · AI Systems Builder</p>
          <p className="lead">
            Building trustworthy intelligent systems at the intersection of AI, infrastructure, and architecture.
          </p>
          <p className="supporting">
            Researching how intelligent systems should reason — not just generate.
          </p>
          <div className="actions">
            <a className="link-arrow" href="#research">
              Papers <Arrow />
            </a>
            <a className="link-arrow" href="#writing">
              Writing <Arrow />
            </a>
            <a className="link-arrow" href="#projects">
              Projects <Arrow />
            </a>
            <a className="link-arrow primary" href={`mailto:${SOCIALS.email}`}>
              Work With Me <Arrow />
            </a>
          </div>
        </div>

        <figure className="portrait-card">
          <Image
            src="/andrii-portrait.png"
            width={1200}
            height={900}
            priority
            alt="Portrait of Andrii Petruk"
          />
        </figure>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Thesis</p>
          <h2>How should intelligent systems reason about real systems?</h2>
        </div>
        <div className="rich-text">
          <p>
            My work connects practical infrastructure engineering with research questions around model reasoning, reliability, and safe automation. The goal is not to make systems look intelligent — it's to make them trustworthy under real operational constraints.
          </p>
          <p>
            I'm interested in AI systems that can understand architecture constraints, evaluate trade-offs, explain uncertainty, and support engineers without hiding failure modes behind fluent language.
          </p>
        </div>
      </section>

      <section className="section pillars-section" aria-labelledby="pillars-title">
        <div className="section-head">
          <p className="eyebrow">Focus</p>
          <h2 id="pillars-title">Three research directions</h2>
        </div>
        <ol className="pillars">
          {pillars.map((item, i) => (
            <li key={item.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className="section split">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Projects &amp; systems</h2>
          <p className="muted">Research-oriented systems and prototypes around AI infrastructure and architecture reasoning.</p>
        </div>
        <div className="list">
          {projects.map((project) => {
            const Inner = (
              <>
                <div className="list-head">
                  <h3>{project.title}</h3>
                  <span className="meta">{project.tag}</span>
                </div>
                <p>{project.desc}</p>
              </>
            );
            return project.href ? (
              <a className="list-item link" key={project.title} href={project.href} target="_blank" rel="noopener">
                {Inner}
                <span className="visit">
                  Visit <Arrow />
                </span>
              </a>
            ) : (
              <article className="list-item" key={project.title}>
                {Inner}
              </article>
            );
          })}
        </div>
      </section>

      <section id="research" className="section split">
        <div className="section-head">
          <p className="eyebrow">Research</p>
          <h2>Papers &amp; preprints</h2>
          <p className="muted">
            Drafts and ongoing research. Published work and preprints will appear here as they're released.
          </p>
        </div>
        <div className="paper-list">
          {research.map((paper) => (
            <article key={paper.title}>
              <h3>{paper.title}</h3>
              <p className="meta">{paper.meta}</p>
              <p>{paper.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="section split">
        <div className="section-head">
          <p className="eyebrow">Writing</p>
          <h2>Essays &amp; technical notes</h2>
          <p className="muted">
            Long-form writing on AI reasoning, infrastructure, reliability, and systems thinking. Published on Medium.
          </p>
        </div>
        <div className="writing-card">
          <p>
            I write to clarify thinking about how intelligent systems should reason, and what reliability looks like when models become part of the operational loop.
          </p>
          <a className="link-arrow primary" href={SOCIALS.medium} target="_blank" rel="noopener">
            Read essays on Medium <Arrow />
          </a>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>From SRE to systems research and intelligent infrastructure.</h2>
        </div>
        <div className="about-body">
          <p>
            Ukrainian engineer based in California. I spent years on the operator's side of the cloud — large Kubernetes fleets, multi-region failovers, the slow accumulation of tribal knowledge that nobody can quite write down. That work taught me what makes systems hard to reason about, and why most automation stops short of actually helping.
          </p>
          <p>
            Today I work at a different layer: how language models reason about systems, what trustworthy autonomy looks like in production, and where research and engineering actually meet. I'm building <a href="https://kubx.io" target="_blank" rel="noopener">KubX</a> alongside that work, and exploring PhD paths that take it further.
          </p>
          <p>
            I write because thinking in public sharpens the thinking. I publish because the field moves faster when more people put their work down on paper.
          </p>
        </div>
      </section>

      <section className="section now">
        <div className="now-box">
          <p className="eyebrow">Now</p>
          <h2>Currently focused on</h2>
          <ul>
            <li>Building <a href="https://kubx.io" target="_blank" rel="noopener">KubX</a> — autonomous, AI-native cloud infrastructure.</li>
            <li>Research on LLM architectural reasoning — drafts in progress.</li>
            <li>Exploring PhD paths and stronger publication output.</li>
          </ul>
        </div>
      </section>

      <footer id="contact" className="section footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about reliable AI systems, infrastructure, or research.</h2>
          <a className="link-arrow primary email" href={`mailto:${SOCIALS.email}`}>
            {SOCIALS.email} <Arrow />
          </a>
        </div>
        <div className="socials">
          <a href={SOCIALS.github} target="_blank" rel="noopener">GitHub</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={SOCIALS.medium} target="_blank" rel="noopener">Medium</a>
          <span className="copyright">© {new Date().getFullYear()} Andrii Petruk</span>
        </div>
      </footer>
    </main>
  );
}
