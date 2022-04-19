---
title: Button
---

## Basic Button
<div class="cluster">
  <button class="button">Button</button>
  <a href="#!" class="button">Link styled as a button</a>
</div>

```html
<button class="button">Button</button>
<a href="#!" class="button">Link styled as a button</a>
```

## Primary Button
<div class="cluster">
  <button class="primary button">Button</button>
  <a href="#!" class="primary button">Link styled as a button</a>
</div>

```html
<button class="primary button">Button</button>
<a href="#!" class="primary button">Link styled as a button</a>
```

## Secondary Button
<div class="cluster">
  <button class="secondary button">Button</button>
  <a href="#!" class="secondary button">Link styled as a button</a>
</div>

```html
<button class="secondary button">Button</button>
<a href="#!" class="secondary button">Link styled as a button</a>
```

## Buttons with icon
<div class="cluster">
  <button class="secondary button has-icon--start">
    {% set feathericon = "download-cloud" %}
    {% include "components/feathericon.njk" %}
    <span>Button</span>
  </button>
  <a href="#!" class="secondary button has-icon--end">
    <span>Link styled as a button</span>
    {% set feathericon = "download-cloud" %}
    {% include "components/feathericon.njk" %}
  </a>
  <a href="#!" class="secondary button has-icon--end has-icon--start">
    {% set feathericon = "download-cloud" %}
    {% include "components/feathericon.njk" %}
    <span>Link styled as a button</span>
    {% set feathericon = "chevron-down" %}
    {% include "components/feathericon.njk" %}
  </a>
</div>

```html
<button class="secondary button has-icon--start">
  {% set feathericon = "download-cloud" %}
  {% include "components/feathericon.njk" %}
  <span>Button</span>
</button>
<a href="#!" class="secondary button has-icon--end">
  <span>Link styled as a button</span>
  {% set feathericon = "download-cloud" %}
  {% include "components/feathericon.njk" %}
</a>
<a href="#!" class="secondary button has-icon--end has-icon--start">
  {% set feathericon = "download-cloud" %}
  {% include "components/feathericon.njk" %}
  <span>Link styled as a button</span>
  {% set feathericon = "chevron-down" %}
  {% include "components/feathericon.njk" %}
</a>
```