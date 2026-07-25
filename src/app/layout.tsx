import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://sbconnect.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SB Connect — Community Business Platform | Verified Business Network",
    template: "%s | SB Connect",
  },
  description:
    "Together We Grow in Business. Only Business No Politics. Join 127+ verified businesses, close deals worth 4.2Cr+, and grow your professional network with SB Connect.",
  keywords: [
    "SB Connect",
    "business community",
    "verified business network",
    "B2B networking",
    "business professionals India",
    "entrepreneur network",
    "business growth",
    "Telangana business",
    "Andhra Pradesh business network",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "SB Connect — Community Business Platform",
    description:
      "Together We Grow in Business. Only Business No Politics. Join 127+ verified businesses, close deals worth 4.2Cr+.",
    type: "website",
    siteName: "SB Connect",
    locale: "en_IN",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SB Connect — Community Business Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SB Connect — Community Business Platform",
    description:
      "Together We Grow in Business. Only Business No Politics. Join 127+ verified businesses, close deals worth 4.2Cr+.",
    images: ["/og-image.jpg"],
  },
  other: {
    "theme-color": "#28487A",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SB Connect",
      url: siteUrl,
      description:
        "Private community of verified business professionals committed to mutual growth through authentic connections, collaboration, and shared opportunities.",
      foundingDate: "2025-01-26",
      founder: {
        "@type": "Person",
        name: "ILLA SOMA SEKHAR",
      },
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SB Connect — Community Business Platform",
      description:
        "Private community of verified business professionals. Network, collaborate, and grow together.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <div className="relative min-h-screen overflow-x-hidden">
          <CursorGlow />
          {children}
        </div>
      </body>
    </html>
  );
}
