---
layout: page
title: Sitemap
description: Don't wait, explore our amazing content today and discover something new!
permalink: "/sitemap.html"
sitemap: false
---

<!-- Pages -->
{% assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.url != "/404.html"' | where_exp:'doc', 'doc.url != "/"' %}

{%- if pages != empty or pages.size >= 1 -%}
## Pages
<ul>
{%- for page in pages -%}
  {%- if page.title -%}
  <li>
      <a href="{{ page.url | absolute_url }}" title="{{ page.title }}">{{ page.title }}</a>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>
{%- endif -%}

<!-- Collections -->
{% assign collections = site.collections | where_exp:'collection','collection.output != false' %}

{%- if collections -%}
{% for collection in collections %}
{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}
{% if docs.size >= 1 %}
<h2>{{ collection.label | capitalize }}</h2>
  <ul>
  {% for doc in docs %}
    <li>
        <a href="{{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }}" title="{{ doc.title }}">{{ doc.title }}</a>
    </li>
  {% endfor %}
  </ul>
{%- endif -%}
{% endfor %}
{%- endif -%}