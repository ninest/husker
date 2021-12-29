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
        </Head>
        <body className="bg-light" {...{ "data-theme": "dark" }}>
          <Main />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `document.body.dataset.theme = window.localStorage.getItem("theme") || "light";
              console.log("Hello")`,
            }}
          ></script> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
