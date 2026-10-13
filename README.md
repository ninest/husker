# Husker

> Resources for Northeastern students.

## Contribution

- Fill out the [contribution form](https://husker.vercel.app/contribute/)
- Message me on [reddit](https://www.reddit.com/user/mapuniverse)
- Join the [Discord server](https://discord.gg/j7WkFct2rY)

If you're interested in getting updates, join the [mailing list](http://eepurl.com/imB7zE).

## Development

Run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. No API keys are needed.

## Content

All content lives in this repo as JSON, so it can be edited and reviewed like code:

- `content/links.json`: the links on the home page, in display order
- `content/categories.json`: link and wiki categories (`order` for the wiki, `linksOrder` for the links page)
- `content/articles.json`: wiki articles (title, slug, description, categories)
- `content/pages/<slug>.json`: each wiki article's content, as Notion blocks with children inlined, plus the
  page mentions it links to
- `content/courses.json`: courses, used to link course mentions
- `public/content/`: images and videos used by wiki pages

The content was exported from the original Notion workspace by `scripts/export-notion.mjs`. To re-export, put a
Notion integration key in `.env.local` as `NOTION_API_KEY="..."` and run `pnpm export-notion`. This replaces
everything in `content/` and `public/content/` with Notion's current data.

## Contributors

- [Parth Kabra](https://www.parthkabra.me/)
- ... (more from Northeastern Electric Racing)

## Licence

MIT