import "../styles/global.scss";
import "../styles/colors.scss";
import "../styles/utils.scss";
import "../styles/prose.scss";
import { Navbar } from "@/components/Navbar";

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
    </>
  );
}

export default MyApp;
