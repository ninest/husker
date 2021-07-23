import "../styles/global.scss";
import "../styles/colors.scss";
import "../styles/utils.scss";
import "../styles/prose.scss";
import { Navbar } from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
