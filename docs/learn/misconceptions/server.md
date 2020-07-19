---
title: Server Misconceptions
eleventyNavigation:
  key: Server
  parent: Misconceptions
  order: 20
---

A web server is responsible to provide HTML and other files to users requesting it.

Generally a server is sort of a folder on a PC that is online 24/7.

Each server has a specific name like `my-domain.com`.

## Server Content

So when you visit `https://my-domain.com/` you webserver will get asked what it has for this folder.
Let's imagine this is your folder.

```
.
└── index.html
```

It will send the content of `index.html` as there is a special rule that if no specific file is provided then it will server a `index.html`.

Now if you where to request `https://my-domain.com/help.html` then it will send you a `404 Error - File not found`.
You know why? because there is no `help.html` on the server.

Now what happens if you rename `index.html` to `help.html`?
Right now `https://my-domain.com/help.html` works but `https://my-domain.com/` will be an error.

## Folders and Subpages

You can have as many pages and folders

```
.
├── about
│   ├── index.html
│   └── contact.html
├── help.html
└── index.html
```

You offer 4 pages to your users.

| What     | Url                                        | File                 |
| -------- | ------------------------------------------ | -------------------- |
| Homepage | `https://my-domain.com/`                   | `index.html`         |
| Help     | `https://my-domain.com/help.html`          | `help.html`          |
| About    | `https://my-domain.com/about/`             | `about/index.html`   |
| contact  | `https://my-domain.com/about/contact.html` | `about/contact.html` |

## Links to outside of your server

Give the following folder structure on the server

```
.
└── var
    └── www
        ├── about
        │   ├── contact.html
        │   └── index.html
        ├── index.html
        └── help.md
```

This represents the default server root for the [apache](https://httpd.apache.org/) web server on linux.
So ever file within the `www` folder can be reached by requesting the appropriate url.
For example `domain.com/help.html` will be represented by `/var/www/help.html`.

However especially when working with local web servers for development we can easily set the server root to `/var/www/about/` for example.
We can do this by starting a server within the folder. Typically it looks something like this

```bash
cd /var/www/about
http-server
```

This however means that every file outside of my server root is NOT accessible to it.

For the server all the files it sees are

```
.
├── contact.html
└── index.html
```

In this case `help.html` can not be accessed by anyone.

## DNS

DNS stands `Domain Name System` and it is responsible to enable rememberable domain names for the web.

You may wonder why such a system is needed?

As a background every device (also servers) that are on the internet do get a IP address in the form of `50.10.88.203`. (4 numbers ranging from 0 - 255)
You can see it as the street address to find a store, so if you want to communicate with a server you need to know it's IP Address. For humans It's not very comfortable to remember 4 numbers so DNS maps those to a rememberable name like `google.com`.

You can see it as a list like this

| Name           | IP      |
| -------------- | ------- |
| google.com     | 1.2.3.4 |
| modern-web.dev | 1.3.4.5 |

For the web it's one giant list (technically it's a little more advanced 😬) so adding/removing something there takes some effort/time and is therefore usually not free. It means you need to buy domain names and once a name is take you can't have it anymore 🙈

However with DNS we can ask our browser to go to modern-web.dev and it will know which IP address to send the request to.

## Local development with localhost

While developing on your local development machine it would be a lot of effort to have a domain name point to your current IP. Especially as most of us will only get a dynamic IP (which changes every few hours/days).

To ease that pain there is a special domain called `localhost` which usually points to `127.0.0.1` which is a special IP that always point to your own machine.

Therefore while developing it makes sense to start your web server locally and then open `http://localhost`.

## Learn more

!TODO: Link for more details???
