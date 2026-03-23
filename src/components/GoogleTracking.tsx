"use client";

import Script from "next/script";

// =====================================================
// GOOGLE TRACKING KÓDOK - CSERÉLD KI A SAJÁT ID-IDRA!
// =====================================================
// GTM_ID:      GTM-XXXXXXX      -> Google Tag Manager ID
// GA4_ID:      G-XXXXXXXXXX     -> Google Analytics 4 Measurement ID
// GADS_ID:     AW-XXXXXXXXX     -> Google Ads Conversion ID
// CONVERSION:  AW-XXXXXXXXX/XXXX -> Google Ads Conversion Label
// =====================================================

const GTM_ID = "GTM-XXXXXXX";
const GA4_ID = "G-XXXXXXXXXX";
const GADS_ID = "AW-XXXXXXXXX";

export function GTMHead() {
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

export function GA4Script() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${GADS_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleAdsConversion() {
  return (
    <Script
      id="gads-conversion"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Google Ads konverziókövetés - hívás eseményhez
          // Hívd meg ezt a funkciót, amikor konverziós esemény történik (pl. telefonhívás gombra kattintás)
          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': '${GADS_ID}/CONVERSION_LABEL_IDE',
              'event_callback': callback
            });
            return false;
          }
        `,
      }}
    />
  );
}
