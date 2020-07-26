---
title: Introducing modern web - Developer tools for modern web development.
published: false
description: Write Interactive Demos Using Markdown and JavaScript
date: 2020-07-30
tags: javascript, tests, demos
cover_image: https://raw.githubusercontent.com/open-wc/blog-posts/master/2020-04-introducing-mdjs-interactive-demos-everywhere/images/aaron-burden-TNlHf4m4gpI-unsplash.jpg
---

We are incredible proud to announce our latest improvements to you. It is something we call "Modern Web".

## What is Modern Web?

Modern Web will host all these developer tools which are to general to be only on [Open Web Components](https://open-wc.org).

We are same Open Web Components developers but we split the general modern web development related topics away from the web components specifics.

You can find our new home at [modern-web.dev](https://modern-web.dev). All our tools will be available on npm within the [@web](https://www.npmjs.com/org/web) npm namespace. Our code is open source and on [github.com/modernweb-dev/web](https://github.com/modernweb-dev/web). For updates you can follow us on [Twitter](https://twitter.com/modern_web_dev).

## What Modern Web stands for

### Low barrier to entry

Tooling that works out of the box and seldomly requires configuration. Knowledge of HTML, CSS and JS should be all you need. We go back to the old days where we wrote html we understood. Include some scripts and link some css and you are ready to go. No longer do you need a degree in Webpack to deploy an application.

### Performance

We care about performance and therefore we encourage to ship as little code to your users as possible.
By utilizing what the modern browser offers out of the box to minimize user code.
Combining this with tools that understand html/css/js we can produce small high performant websites.

### Close to the browser

Following the browser ensures that your knowledge and skill remain relevant over time. Frameworks may come and go, but the browser stays.
This means that we value browser solutions over tooling that goes into the opposite direction.

## What we will bring in the future

Modern Web is our starting point into a list of tools that will enable you to create websites as a mere mortal human.
In the end we will offer a complete set of tools to enable building modern websites for and with the browser.

Our tools are generally comprised of many individual parts/plugins/packages. Each of those packages tries to cover the smallest possible feature set but still solving an isolated problem domain. You may find these smaller packages useful but generally we advice to consume our opinionated and more user friendly packages.

Each of our opinionated tools will come with a learning section that guides you step by step into using the specific tool. Furthermore there will be a comprehensive documentation for each of those tool and also for all the different parts/plugins/packages it's made of.

We start off our journey with a brand new `Web Test Runner` that actually uses the browser as we see that as the area with the biggest gap.

## Web Test Runner

The test runner for web applications.

👉&nbsp;&nbsp; Headless browsers with puppeteer, playwright, or selenium. <br>
🚧&nbsp;&nbsp; Reports logs, 404s, and errors from the browser. <br>
📦&nbsp;&nbsp; Supports native es modules.<br>
🔧&nbsp;&nbsp; Runs tests in parallel and isolation.<br>
👀&nbsp;&nbsp; Interactive watch mode.<br>
🏃&nbsp;&nbsp; Reruns only changed tests.<br>
🚀&nbsp;&nbsp; Powered by [esbuild](https://modern-web.dev/docs/dev-server/esbuild.md) and [rollup plugins](https://modern-web.dev/docs/dev-server/rollup.md)

### Why a new test runner?

One of our core principals is to be close to the browser. Therefore our tests should run in a browser.
You may ask why? and it might not be totally obvious but JavaScript in Node and in the Browser are two totally different eco systems and implementation.
This leads to a diversion in what is supported. One of the most prominent examples is probably ES Modules. While supported in all evergreen browsers in early 2018 it's still has some road bump in 2020 and is far from being fully embraces by the node community.

## What this means for Open Web Components

We see this as a win-win as `Open Web Components` can fully focusing on web components while `Modern Web` will provide us with everything needed for modern web development.
