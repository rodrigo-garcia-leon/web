---
title: Css Misconceptions
eleventyNavigation:
  key: Css
  parent: Misconceptions
  order: 30
---

```js script
// TODO: find out why this is needed?
import { html } from 'lit-html';
```

Css shall be used to define the look for a give html content site displayed in the browser.

Be sure you are familiar with CSS before continuing. If you are unsure check out MDN's [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS).

## Use variables in css

```html preview-story
<style>
  html {
    --my-variable: 12px;
  }

  h2 {
    font-size: var(--my-variable);
  }
</style>
<h2>hey there</h2>
```
