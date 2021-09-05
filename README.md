<h1 align="center"><a href="https://huskinfo.vercel.app/">🐾 NEU Links</a></h1>

<p align="center">Useful Northeastern resources and links</p>

## Features

- [x] Categories of links and resources (saved on a Google Sheet)
  - [x] Use incremental static regeneration to rebuild site
- [x] Northeastern campus map
  - [ ] Optimize map for desktop

### Pages to add
- [x] Apps list: https://neulinks.vercel.app/apps
- [x] Group chats list - in progress: https://neulinks.vercel.app/social/chats
- [ ] FAQ
- [x] Husky card uses, free stuff to claim - in progress: https://neulinks.vercel.app/free

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

The website uses the new `revalidate` option in [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) to enable [incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

### Project structure

- `next.config.js`
- `pages/`
- `components/`
- `layouts/`
- `lib/`
- `utils/`
- `public/`
- `content/`
  - `guides/`
- `scripts/`
- `data/`

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

## Credits

- Inspiration from [kj800x/nulinks](https://github.com/kj800x/nulinks)

## Licence

MIT
