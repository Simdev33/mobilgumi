"use client";

import { useEffect } from "react";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import Script from "next/script";

const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || "";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      if (GADS_CONVERSION_LABEL) {
        window.gtag("event", "conversion", {
          send_to: GADS_CONVERSION_LABEL,
        });
      }

      if (GA4_ID) {
        window.gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: "form_submission",
        });
      }
    }
  }, []);

  return (
    <>
      {/* Google Ads conversion snippet for this page */}
      {GADS_CONVERSION_LABEL && (
        <Script
          id="gads-thankyou-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': '${GADS_CONVERSION_LABEL}'
              });
            `,
          }}
        />
      )}

      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Köszönjük!
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              Üzenetét sikeresen megkaptuk.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Munkatársaink hamarosan felveszik Önnel a kapcsolatot. Sürgős
              esetben hívjon minket közvetlenül!
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 mb-8">
            <p className="text-gray-400 text-sm mb-3">
              Sürgős segítségre van szüksége?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+36206282000"
                className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-accent-500/20 text-lg"
              >
                <Phone className="w-5 h-5" />
                +36 20 628 2000
              </a>
              <a
                href="tel:+36301940601"
                className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-accent-500/20 text-lg"
              >
                <Phone className="w-5 h-5" />
                +36 30 194 0601
              </a>
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
          </a>
        </div>
      </div>
    </>
  );
}
