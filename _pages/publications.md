---
layout: page
permalink: /research/
title: research
nav: true
nav_order: 1
description: >
  Notes, preprints, and ongoing work on how intelligent systems should reason — not just generate.
---

<!-- _pages/publications.md → /research/ -->

<section class="research-intro">
  <p>
    My research sits at the intersection of <strong>large language models</strong>,
    <strong>cloud-native infrastructure</strong>, and <strong>system architecture</strong>.
    The questions I keep returning to:
  </p>
  <ul>
    <li>How do we make LLMs reason about systems, not just describe them?</li>
    <li>What does a trustworthy autonomous control plane look like?</li>
    <li>Can neural networks generate, verify, and operate the systems they propose?</li>
  </ul>
</section>

<h2 class="section-heading">Publications &amp; preprints</h2>

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography %}
</div>

<h2 class="section-heading">Ongoing research</h2>

<ul class="research-list">
  <li>
    <strong>LLM architectural reasoning.</strong>
    Probing whether language models can produce internally consistent system designs
    under realistic constraints (latency, blast radius, failure modes).
  </li>
  <li>
    <strong>Self-operating infrastructure.</strong>
    Closed-loop agents that propose, simulate, and apply Kubernetes-level changes
    — with verifiable rollbacks.
  </li>
  <li>
    <strong>Reliability lessons across scales.</strong>
    What distributed systems teach us about training, inference, and deployment of frontier models.
  </li>
</ul>
