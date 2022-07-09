import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/karla.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/font.css" />
          <meta name="theme-color" content="#111111" />

          {/* Icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
        </Head>

        <body className="bg-light" {...{ "data-theme": "dark" }}>
          {/* Blocking script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `try {window.document.body.dataset.theme = JSON.parse(window.localStorage.getItem("settings")).dark || "dark"}
                       catch(error) {window.document.body.dataset.theme = "dark"}`,
            }}
          />

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
