import { withOGImage } from "next-api-og-image";

interface QueryParams {
  stage: string;
  name: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    html: ({ name }) => `
    <html>
      <head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="flex items-center p-36">
        <div>
          <h1 class="text-6xl text-black font-black">${name}</h1>
          <p class="mt-10 text-6xl text-gray-500">Husker</p>
        </div>
      </body>
    </html>`,
  },
  dev: {
    inspectHtml: false,
  },
});
