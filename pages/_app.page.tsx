import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Husker"
        defaultTitle="Husker"
        description="Northeastern websites are bad"
      ></DefaultSeo>

      <main className="flex">
        <Sidebar></Sidebar>
        <article className="wrapper">
          <Component {...pageProps} />
        </article>
      </main>
    </>
  );
}

export default MyApp;
