import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
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
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

          {/* Goat counter */}

          {process.env.NODE_ENV === "production" && (
            <>
              <script
                data-goatcounter="https://husker.goatcounter.com/count"
                async
                src="//gc.zgo.at/count.js"
              ></script>
            </>
          )}
        </Head>

        <body className="bg-light text-gray dark:bg-dark">
          {/* Blocking script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `try {window.document.documentElement.className = JSON.parse(window.localStorage.getItem("settings")).dark || "dark"}
                       catch(error) {window.document.documentElement.className = "dark"}`,
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
