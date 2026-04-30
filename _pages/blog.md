---
layout: default
permalink: /essays/
title: essays
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post essays-page">
  <header class="essays-header">
    <h1>{{ site.blog_name }}</h1>
    <p>{{ site.blog_description }}</p>
  </header>

  <ul class="post-list essay-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}

      <li class="essay-item">
        <h3 class="essay-title">
          {% if post.redirect == blank %}
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% elsif post.redirect contains '://' %}
            <a href="{{ post.redirect }}" target="_blank" rel="noopener">{{ post.title }}</a>
          {% else %}
            <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
          {% endif %}
        </h3>
        {% if post.description %}
          <p class="essay-desc">{{ post.description }}</p>
        {% endif %}
        <p class="essay-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %Y' }}</time>
          <span class="dot">·</span>
          {{ read_time }} min read
        </p>
      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>
