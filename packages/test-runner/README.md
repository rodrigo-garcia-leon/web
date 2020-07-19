# Web Test Runner

> This project is in beta. We are looking for people to test it out, and let us know about issues and what they think about it.

A test runner for web applications.

👉&nbsp;&nbsp; Headless browsers with puppeteer, playwright, or selenium. <br>
🚧&nbsp;&nbsp; Reports logs, 404s, and errors from the browser. <br>
📦&nbsp;&nbsp; Supports native es modules.<br>
🔧&nbsp;&nbsp; Runs tests in parallel and isolation.<br>
👀&nbsp;&nbsp; Interactive watch mode.<br>
🏃&nbsp;&nbsp; Reruns only changed tests.<br>
🚀&nbsp;&nbsp; Powered by [esbuild](https://github.com/modernweb-dev/web/tree/master/packages/dev-server-esbuild) and [rollup plugins](https://github.com/modernweb-dev/web/tree/master/packages/dev-server-rollup)

## Getting started

Install the test runner:

```bash
npm i -D @web/test-runner
```

Use the cli:

```bash
web-test-runner test/**/*.test.js --node-resolve
```

## Example projects

Check out these example projects for a full setup.

- [lit-element](https://github.com/modernweb-dev/web/tree/master/demo/projects/lit-element)
- [lit-element typescript](https://github.com/modernweb-dev/web/tree/master/demo/projects/lit-element-ts)
- [preact htm](https://github.com/modernweb-dev/web/tree/master/demo/projects/preact-htm)
- [preact jsx](https://github.com/modernweb-dev/web/tree/master/demo/projects/preact-jsx)
- [preact tsx](https://github.com/modernweb-dev/web/tree/master/demo/projects/preact-tsx)

## Documentation

====>>>> [Full documentation](../../docs/docs/test-runner/overview.md) <<<=====
