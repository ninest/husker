import { Footer } from "@/components/ui/Footer";
import { MobileNavbar } from "@/components/ui/MobileNavbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { Spacer } from "@/components/util/Spacer";
import { useSettings, useTheme } from "@/hooks/settings";
import { withTRPC } from "@trpc/next";
import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import superjson from "superjson";
import type { AppRouter } from "../server/router";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Set initial theme
  const { settings } = useSettings();
  const { setTheme } = useTheme();
  useEffect(() => {
    const currentTheme = settings.theme;
    setTheme(currentTheme);
    document.body.dataset.theme = currentTheme;
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Husker Northeastern"
        defaultTitle="Husker"
        description="Information about Northeastern including dorms, housing, free stuff, and apps to download"
      ></DefaultSeo>

      {/* Top padding to the toast on mobile so it doesn't block the navbar */}
      <Toaster position="top-right" containerClassName="mt-16 md:mt-0" />

      {/* <ThemeProvider> */}
      {/* <SettingsProvider> */}
      {!showSidebar && (
        <div className={clsx("block md:hidden sticky top-0 z-50")}>
          <MobileNavbar
            onMenuClick={() => {
              setShowSidebar(!showSidebar);
            }}
          ></MobileNavbar>
        </div>
      )}

      <main className={clsx("md:flex")}>
        {/* 
              TODO
              Wrapping this element in a div will fix the safari scroll bug
              https://stackoverflow.com/q/51792783/8677167
              But it causes an issue with the sidebar
            */}
        <div
          className={clsx(
            { hidden: !showSidebar },
            "md:block sticky z-50 top-0 bottom-0 left-0"
          )}
        >
          <Sidebar onCloseClick={() => setShowSidebar(false)}></Sidebar>
        </div>

        {/*  https://stackoverflow.com/a/43312314/8677167 */}
        {/*  min-w-0 required if children may scroll horizontally */}
        <div className="min-w-0 w-full">
          <div className="min-h-screen">
            <Component {...pageProps} />
          </div>
          <Spacer size="md"></Spacer>
          <hr />

          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      // transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
