"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-DGEG3B5B16";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === "production" && typeof window !== "undefined" && "goatcounter" in window) {
      // @ts-ignore
      window.goatcounter.count({
        path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <Script data-goatcounter="https://husker.goatcounter.com/count" async src="//gc.zgo.at/count.js"></Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
      </Script>
    </>
  );
}
