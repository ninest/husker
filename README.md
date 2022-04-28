<h1 align="center"><a href="https://husker.vercel.app/">🐾 Husker</a></h1>

<p align="center">Useful Northeastern resources and links</p>

## Contributing

- Fill out the [contribution form](https://husker.vercel.app/contribute/)
- Message me on [reddit](https://www.reddit.com/user/mapuniverse)
- Join the [Discord server](https://discord.gg/XVUT7jRTD3)

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

## Credits

- Inspiration from [kj800x/nulinks](https://github.com/kj800x/nulinks)

## Licence

MIT
