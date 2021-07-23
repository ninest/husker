<h1 align="center"><a href="https://huskinfo.vercel.app/">🐾 NEU Links</a></h1>

<p align="center">Useful Northeastern resources and links</p>

## Features
- [x] Categories of links and resources (saved on a Google Sheet)
- [ ] Guides
- [x] Northeastern campus map

## Build setup
Clone or fork the repository, then run the commands to start the development server:

```bash
yarn
yarn dev
```

To build and serve the website, run

```bash
yarn build
yarn serve
```

### Hosting

The game is hosted with Vercel. To host a debug version of the app, run

```
vc
```

To host the production version of the app, run

```
vc --prod
```

If you're getting errors with `mdx-bundler`, or TailwindCSS styles aren't loading, try `vc --prod --force` to delete the old build cache.