import "../styles/global.scss";
import "../styles/colors.scss";
import "../styles/utils.scss";
import "../styles/prose.scss";
import "../styles/components.scss";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const showNavbar = Component.navbar ?? true;
  const wrapWithMain = Component.main ?? true;
  return (
    <>
    
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
