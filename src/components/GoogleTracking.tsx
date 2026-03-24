"use client";

import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";
const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || "";

export function GTMHead() {
  if (!GTM_ID) return null;
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}

export function GTMBody() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export function GtagScripts() {
  const primaryId = GA4_ID || GADS_ID;
  if (!primaryId) return null;

  const configLines: string[] = [];
  if (GA4_ID) configLines.push(`gtag('config', '${GA4_ID}');`);
  if (GADS_ID) configLines.push(`gtag('config', '${GADS_ID}');`);

  const conversionFn = GADS_CONVERSION_LABEL
    ? `
      window.gtag_report_conversion = function(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') { window.location = url; }
        };
        gtag('event', 'conversion', {
          'send_to': '${GADS_CONVERSION_LABEL}',
          'event_callback': callback
        });
        return false;
      };`
    : "";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${configLines.join("\n            ")}
            console.log('[Tracking] gtag initialized: ${[GA4_ID, GADS_ID].filter(Boolean).join(", ")}');
            ${conversionFn}
          `,
        }}
      />
    </>
  );
}

export { GADS_CONVERSION_LABEL };
