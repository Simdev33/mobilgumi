import type { Metadata } from "next";
import "./globals.css";
import { GTMHead, GTMBody, GtagScripts } from "@/components/GoogleTracking";

export const metadata: Metadata = {
  title: "SOS MobilGumiMost - Országos Mobil Gumiszerviz 0-24",
  description:
    "Kerékcsere, gumiszerviz, defektjavítás bármikor, bárhol. Mobil gumiszervizünk az év minden napján igénybe vehető. Hívjon: +36 20 628 2000",
  keywords:
    "mobilgumipest, mobil gumiszerviz, defektjavítás, kerékcsere, gumicsere, Budapest, autópálya mentés, non-stop gumiszerviz",
  openGraph: {
    title: "SOS MobilGumiMost - Országos Mobil Gumiszerviz 0-24",
    description:
      "Kerékcsere, gumiszerviz, defektjavítás bármikor, bárhol. Hívjon: +36 20 628 2000",
    type: "website",
    locale: "hu_HU",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <GtagScripts />
      </head>
      <body className="antialiased bg-gray-950 text-gray-100">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
