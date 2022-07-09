import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

import { Footer } from "@/components/Footer";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import { Spacer } from "@/components/Spacer";
import { useTheme } from "@/hooks/settings";
import { SettingsProvider } from "@/lib/settings";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useTheme();

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Husker Northeastern"
        defaultTitle="Husker"
        description="Information about Northeastern including dorms, housing, dorms, free stuff, and apps to download"
      ></DefaultSeo>

      {/* Top padding to the toast on mobile so it doesn't block the navbar */}
      <Toaster position="top-right" containerClassName="mt-16 md:mt-0" />

      {/* <ThemeProvider> */}
      <SettingsProvider>
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

          <div className="w-full">
            <div className="min-h-screen">
              <Component {...pageProps} />
            </div>
            <Spacer size="md"></Spacer>
            <hr />

            <Footer></Footer>
          </div>
        </main>
      </SettingsProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
