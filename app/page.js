import Image from 'next/image';

const focusAreas = [
  {
    title: 'LLM Reasoning Safety',
    text:
      'Studying how language models reason about software architecture, where confident recommendations become unsafe, and how to evaluate AI-assisted design decisions before they reach production.'
  },
  {
    title: 'Cloud-Native Architecture',
    text:
      'Designing resilient platforms based on Kubernetes, GitOps, CI/CD, observability, policy-as-code, and distributed systems principles.'
  },
  {
    title: 'Autonomous Infrastructure',
    text:
      'Exploring infrastructure tools that can explain, validate, and safely assist operational decisions while keeping deterministic engineering controls in place.'
  },
  {
    title: 'Reliability Engineering',
    text:
      'Thinking about failure modes, graceful degradation, incident response, and the operational practices that turn complex systems into reliable systems.'
  }
];

const essays = [
  {
    title: 'What LLMs Get Wrong About Architecture',
    desc:
      'A practical essay on confident but invalid architectural recommendations, hidden feasibility gaps, and why AI-generated system designs need validation.'
  },
  {
    title: 'Reliability Lessons from Distributed Systems',
    desc:
      'Notes on failure modes, operational discipline, observability, and building systems that degrade gracefully under pressure.'
  },
  {
    title: 'Neural Networks Generating Neural Networks',
    desc:
      'A research direction for systems that produce, evaluate, and evolve model architectures under explicit safety and reliability constraints.'
  },
  {
    title: 'Why Infrastructure Needs Reasoning Models',
    desc:
      'An argument for tools that understand constraints, dependencies, and trade-offs instead of simply generating configuration files.'
  }
];

const projects = [
  {
    title: 'KubX',
    tag: 'AI infrastructure / research project',
    desc:
      'A research-driven platform for intelligent cloud-native infrastructure, focused on safe automation, architecture reasoning, and operational reliability.'
  },
  {
    title: 'Architecture Reasoning Benchmark',
    tag: 'paper / evaluation',
    desc:
      'A benchmark-style research effort for evaluating how LLMs reason about cloud-native architecture, quality attributes, trade-offs, and impossible system designs.'
  },
  {
    title: 'Infrastructure Knowledge Systems',
    tag: 'experiments',
    desc:
      'Experiments around turning operational knowledge, runbooks, and architecture constraints into usable reasoning context for engineers and AI systems.'
  }
];

const research = [
  {
    title: 'LLM-Augmented Architecture Style Selection for Cloud-Native Systems',
    meta: 'Preprint direction · LLM evaluation · cloud-native architecture',
    desc: 'Evaluating whether language models can correctly map system requirements and quality attributes to feasible architecture styles.'
  },
  {
    title: 'Safety Analysis of LLM Architectural Reasoning',
    meta: 'Ongoing research · AI safety · software architecture',
    desc: 'Studying cases where models produce confident but unsafe or infeasible recommendations for reliability-critical systems.'
  },
  {
    title: 'Autonomous Infrastructure and Human-in-the-Loop Reliability Controls',
    meta: 'Research notes · autonomous infrastructure · operations',
    desc: 'Exploring how AI-assisted infrastructure can remain explainable, bounded, auditable, and useful to engineers.'
  }
];

const principles = [
  'Reliability is a property of system design, not a feature added later.',
  'AI systems should reason about constraints, not only generate plausible text.',
  'Autonomy in infrastructure must remain observable, explainable, and bounded.',
  'Good architecture is the discipline of trade-offs under real constraints.'
];

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrii Petruk',
    url: 'https://andriipetruk.com',
    image: 'https://andriipetruk.com/andrii-portrait.png',
    jobTitle: ['Systems Researcher', 'Infrastructure Architect', 'AI Systems Builder'],
    sameAs: [],
    knowsAbout: [
      'LLM reasoning safety',
      'AI-assisted system design',
      'cloud-native architecture',
      'autonomous infrastructure',
      'distributed systems',
      'Kubernetes',
      'site reliability engineering',
      'DevOps',
      'AI infrastructure',
      'software architecture'
    ],
    description:
      'Andrii Petruk is a systems researcher, infrastructure architect, and AI systems builder focused on reliable AI, cloud-native architecture, distributed systems, and autonomous infrastructure.'
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  return (
    <main>
      <JsonLd />
      <header className="nav">
        <a className="mark" href="#top" aria-label="Andrii Petruk home">AP</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#writing">Writing</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Personal Research Lab</p>
          <h1>Andrii Petruk</h1>
          <p className="role">Systems Researcher · Infrastructure Architect · AI Systems Builder</p>
          <p className="lead">
            Building trustworthy intelligent systems at the intersection of AI, infrastructure, and architecture.
          </p>
          <p className="supporting">
            Focused on LLM reasoning safety, cloud-native systems, distributed systems, and autonomous infrastructure.
          </p>
          <div className="actions">
            <a href="#research">Papers</a>
            <a href="#writing">Writing</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Work With Me</a>
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
          <h2>Researching how intelligent systems should reason, not just generate.</h2>
        </div>
        <div className="rich-text compact">
          <p>
            My work connects practical infrastructure engineering with research questions around model reasoning, reliability, and safe automation. The goal is not to make systems look intelligent, but to make them trustworthy under real operational constraints.
          </p>
          <p>
            I am interested in AI systems that can understand architecture constraints, evaluate trade-offs, explain uncertainty, and support engineers without hiding failure modes behind fluent language.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <p className="eyebrow">What I Work On</p>
        <h2 id="work-title">Core areas</h2>
        <div className="four-grid">
          {focusAreas.map((item) => (
            <article className="text-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section split">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>Projects and systems</h2>
          <p className="muted">Research-oriented systems, prototypes, and tools around AI infrastructure and architecture reasoning.</p>
        </div>
        <div className="list">
          {projects.map((project) => (
            <article className="list-item" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <span>{project.tag}</span>
              </div>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="section split">
        <div>
          <p className="eyebrow">Research</p>
          <h2>Current research directions</h2>
          <p className="muted">Papers, preprints, notes, and ongoing research will live here as the research portfolio grows.</p>
        </div>
        <div className="paper-list">
          {research.map((paper) => (
            <article key={paper.title}>
              <h3>{paper.title}</h3>
              <p className="paper-meta">{paper.meta}</p>
              <p>{paper.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="section split">
        <div>
          <p className="eyebrow">Writing</p>
          <h2>Essays and technical notes</h2>
          <p className="muted">Long-form writing on AI reasoning, infrastructure, reliability, and systems thinking.</p>
        </div>
        <div className="list">
          {essays.map((essay) => (
            <article className="list-item quiet" key={essay.title}>
              <h3>{essay.title}</h3>
              <p>{essay.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section principles">
        <p className="eyebrow">Operating Principles</p>
        <h2>How I think about systems</h2>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-long">
        <p className="eyebrow">About</p>
        <h2>From SRE to systems research and intelligent infrastructure.</h2>
        <div className="about-body">
          <h3>Background</h3>
          <p>
            I’m a systems engineer and researcher focused on building reliable, interpretable, and architecturally sound intelligent systems. My work sits at the intersection of distributed systems, cloud-native infrastructure, and artificial intelligence — with a particular focus on how large language models reason about complex systems and make architectural decisions.
          </p>
          <p>
            I started my career in infrastructure and site reliability engineering, working on production systems at scale. That experience shaped how I think about systems: reliability is not a feature, but a property that must be designed, measured, and continuously enforced. Real systems fail in complex ways, and good engineering requires understanding constraints, dependencies, failure modes, and operational behavior over time.
          </p>

          <h3>Transition to Research</h3>
          <p>
            Over time, I became increasingly interested in the deeper questions behind system design — not only how systems operate, but how they should be designed, how architecture decisions are made, and how we can build systems that are both powerful and trustworthy.
          </p>
          <p>
            This naturally led me toward research-oriented work. I began exploring how intelligent systems, particularly large language models, reason about architecture and where their limitations appear in practice. I observed a gap between confident model outputs and actual architectural feasibility, especially in reliability-critical environments. That gap raises important questions about safety, reasoning, evaluation, and trust in AI-assisted system design.
          </p>

          <h3>Current Focus</h3>
          <p>
            Today, I work on problems that sit between theory and real-world systems: LLM reasoning and architectural decision-making, safety and reliability of AI-generated system designs, cloud-native architecture at scale, autonomous infrastructure, and intelligent tooling for engineers.
          </p>
          <p>
            I’m particularly interested in moving from systems that generate answers to systems that can reason, validate, and operate reliably in complex environments. For infrastructure, this means AI tools should not only produce code or diagrams — they should understand trade-offs, identify impossible assumptions, expose uncertainty, and remain bounded by observable engineering controls.
          </p>

          <h3>Projects and Perspective</h3>
          <p>
            Alongside research, I build systems that explore these ideas in practice. I’m currently working on KubX, a project focused on intelligent infrastructure and AI-assisted system design, as well as smaller experimental systems that investigate how reasoning models can interact with real-world architectures.
          </p>
          <p>
            I tend to approach problems from a systems-first perspective: understand the constraints, failure modes, trade-offs, and long-term behavior before optimizing for surface-level performance. This perspective comes from years of working with production systems where correctness, reliability, and observability matter more than idealized assumptions.
          </p>

          <h3>Now</h3>
          <p>
            At this stage, I’m actively exploring research directions and preparing for a potential PhD path while continuing to build and experiment with intelligent infrastructure systems. I’m especially interested in how intelligent systems should reason about architecture, what “safe” system design means in the context of AI, and how to build systems that are both autonomous and reliable.
          </p>
          <p>
            I’m based in California, originally from Ukraine. Outside of work, I’m interested in long-form writing, systems thinking, and ideas at the intersection of engineering and research.
          </p>
        </div>
      </section>

      <section className="section now">
        <p className="eyebrow">Now</p>
        <div className="now-box">
          <h2>Currently</h2>
          <ul>
            <li>Building KubX and exploring AI-native infrastructure.</li>
            <li>Writing about LLM architectural reasoning, reliability, and safety.</li>
            <li>Preparing a stronger research profile for future PhD and publication paths.</li>
            <li>Developing essays and technical notes on systems thinking and autonomous infrastructure.</li>
          </ul>
        </div>
      </section>

      <footer id="contact" className="section footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about reliable AI systems, infrastructure, or research.</h2>
        </div>
        <a className="contact-link" href="mailto:hello@andriipetruk.com">hello@andriipetruk.com</a>
      </footer>
    </main>
  );
}
