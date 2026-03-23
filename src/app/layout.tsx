import type { Metadata } from "next";
import "./globals.css";
import { GTMHead, GTMBody, GA4Script, GoogleAdsConversion } from "@/components/GoogleTracking";

export const metadata: Metadata = {
  title: "SOS MobilGumis - Országos Mobil Gumiszerviz 0-24",
  description:
    "Kerékcsere, gumiszerviz, defektjavítás bármikor, bárhol. Mobil gumiszervizünk az év minden napján igénybe vehető. Hívjon: 06 30 740 8998",
  keywords:
    "mobilgumis, mobil gumiszerviz, defektjavítás, kerékcsere, gumicsere, Budapest, autópálya mentés, non-stop gumiszerviz",
  openGraph: {
    title: "SOS MobilGumis - Országos Mobil Gumiszerviz 0-24",
    description:
      "Kerékcsere, gumiszerviz, defektjavítás bármikor, bárhol. Hívjon: 06 30 740 8998",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <GTMHead />
        <GA4Script />
        <GoogleAdsConversion />
      </head>
      <body className="antialiased bg-gray-950 text-gray-100">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
