import "../styles/global.scss";
import "../styles/colors.scss";
import "../styles/utils.scss";
import "../styles/prose.scss";
import "../styles/components.scss";

import "../styles/masonry.scss";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const showNavbar = Component.navbar ?? true;
  const wrapWithMain = Component.main ?? true;
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - NEU Links"
        defaultTitle="NEU Links"
        description="Useful links and resources related to Northeastern"
        openGraph={{
          site_name: "NEU Links",
          type: "website",
        }}
      ></DefaultSeo>
      {showNavbar && <Navbar></Navbar>}
      {wrapWithMain ? (
        <main>
          <Component {...pageProps} />
        </main>
      ) : (
        <Component {...pageProps} />
      )}
      {showNavbar && <Footer></Footer>}
    </>
  );
}

export default MyApp;
