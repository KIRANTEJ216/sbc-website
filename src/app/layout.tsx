import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SB Connect - Community Business Platform",
  description: "No Politics Only Business. Join 127+ verified businesses, close deals worth 4.2Cr+, and grow your professional network with SB Connect.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "SB Connect - Community Business Platform",
    description: "No Politics Only Business. Join 127+ verified businesses, close deals worth 4.2Cr+.",
    type: "website",
    siteName: "SB Connect",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SB Connect - Community Business Platform",
    description: "No Politics Only Business. Join 127+ verified businesses, close deals worth 4.2Cr+.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}