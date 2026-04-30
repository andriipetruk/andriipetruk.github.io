---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
description: >
  Things I'm building or have built — research artifacts, infrastructure, and product.
---

<section class="project-narrative">

  <article class="project-block project-feature">
    <p class="project-eyebrow">Flagship</p>
    <h2><a href="https://kubx.io" target="_blank" rel="noopener">KubX</a></h2>
    <p class="project-summary">
      An autonomous control plane for cloud-native infrastructure. KubX treats
      a Kubernetes cluster as a substrate for closed-loop agents — observe,
      reason, propose, verify, apply.
    </p>
    <p>
      The thesis: most operational toil disappears once the system can describe
      its own state precisely enough for an LLM to reason about it. The hard
      part isn't generating actions; it's generating actions that are safe,
      reversible, and auditable.
    </p>
  </article>

  <article class="project-block">
    <p class="project-eyebrow">Product</p>
    <h2>Starmingo</h2>
    <p>
      Earlier work in commerce infrastructure — high-throughput backends,
      payments, and the unglamorous reliability work that makes the rest possible.
    </p>
  </article>

  <article class="project-block">
    <p class="project-eyebrow">Experiments</p>
    <h2>Research artifacts</h2>
    <p>
      Smaller probes around LLM reasoning, prompt-program composition, and
      tooling for agents that touch real infrastructure. A few become essays;
      a few become preprints.
    </p>
  </article>

  <article class="project-block">
    <p class="project-eyebrow">Open source</p>
    <h2>Code</h2>
    <p>
      Public repositories live on
      <a href="https://github.com/{{ site.data.socials.github_username }}" target="_blank" rel="noopener">GitHub</a>.
      Most of what I publish is small and self-contained — utilities, sketches, reproductions.
    </p>
  </article>

</section>
