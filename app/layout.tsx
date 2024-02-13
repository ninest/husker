import { Analytics } from "@/app/analytics";
import { createOgImageUrl } from "@/app/api/og/og-functions";
import { CommandMenu } from "@/app/command-menu";
import { NavRail } from "@/app/nav-rail";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { getArticles } from "@/modules/content/article";
import { getLinks } from "@/modules/content/link";
import { Provider } from "jotai";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Karla } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata: Metadata = {
  title: { default: "Husker", template: "%s - Husker" },
  description: "Useful resources and links for everything Northeastern",
  openGraph: {
    images: [{ url: createOgImageUrl() }],
  },
  metadataBase: new URL("https://husker.nu"),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [huskerLinks, wikiLinks] = await Promise.all([getLinks(), getArticles()]);
  const wikiLinksWithUrl = wikiLinks.map((wl) => ({ ...wl, url: `/wiki/${wl.slug}` }));

  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && <Analytics />}
      <body
        className={`${inter.variable} ${jetbrains.variable} ${karla.variable} font-sans h-full text-foreground dark:text-foreground flex`}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <Toaster />
            <CommandMenu
              linkGroups={[
                { name: "Links", links: huskerLinks },
                { name: "Articles", links: wikiLinksWithUrl },
              ]}
            />
            <div className="hidden md:block">
              <NavRail />
            </div>
            <div className="flex-1">{children}</div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
