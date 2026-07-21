import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Loader from "@/components/Loader";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE = "https://wpsolicitors.au";
const DESCRIPTION =
  "WEPlan Solicitors are Wills and estate planning specialists led by Kerstin Glomb, with over 25 years' experience across the ACT, NSW, QLD and VIC. Fixed fees and flexible face-to-face or online meetings.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "WEPlan Solicitors — Wills & Estate Planning Specialists",
    template: "%s — WEPlan Solicitors",
  },
  description: DESCRIPTION,
  applicationName: "WEPlan Solicitors",
  keywords: [
    "wills",
    "estate planning",
    "testamentary trust",
    "enduring power of attorney",
    "appointment of enduring guardians",
    "binding death benefit nomination",
    "Canberra wills lawyer",
    "ACT estate planning solicitor",
    "NSW estate planning",
    "Kerstin Glomb",
    "WEPlan Solicitors",
  ],
  authors: [{ name: "WEPlan Solicitors", url: SITE }],
  creator: "WEPlan Solicitors",
  publisher: "Glomb Solicitors Pty Limited",
  category: "Legal Services",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/images/cropped-WPS_Social-Media-Icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/cropped-WPS_Social-Media-Icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/cropped-WPS_Social-Media-Icon-180x180.png",
  },
  openGraph: {
    title: "WEPlan Solicitors — Wills & Estate Planning Specialists",
    description: DESCRIPTION,
    url: SITE,
    siteName: "WEPlan Solicitors",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEPlan Solicitors — Wills & Estate Planning Specialists",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#16232d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${SITE}/#firm`,
      name: "WEPlan Solicitors",
      legalName: "Glomb Solicitors Pty Limited",
      description: DESCRIPTION,
      url: SITE,
      telephone: "+61448760662",
      email: "kerstin@wpsolicitors.au",
      image: `${SITE}/opengraph-image`,
      logo: `${SITE}/images/WPS_Landscape_WEB-WHITE.png`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressRegion: "ACT",
        addressCountry: "AU",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
        { "@type": "State", name: "New South Wales" },
        { "@type": "State", name: "Queensland" },
        { "@type": "State", name: "Victoria" },
      ],
      founder: {
        "@type": "Person",
        name: "Kerstin Glomb",
        jobTitle: "Principal",
      },
      knowsAbout: [
        "Wills",
        "Estate Planning",
        "Testamentary Trust Wills",
        "Enduring Powers of Attorney",
        "Appointments of Enduring Guardians",
        "Binding Death Benefit Nominations",
        "Discretionary (Family) Trusts",
      ],
      sameAs: [
        "https://www.linkedin.com/company/weplan-solicitors/",
        "https://www.facebook.com/profile.php?id=61577969920739",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "WEPlan Solicitors",
      inLanguage: "en-AU",
      publisher: { "@id": `${SITE}/#firm` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Loader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
