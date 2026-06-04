import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "German VPD Calculator for Bangladesh | CGPA to German Grade Converter",
    template: "%s | German VPD Calculator",
  },
  description:
    "Convert your Bangladeshi CGPA into German university grades instantly using the official Modified Bavarian Formula. Free German VPD Calculator.",
  keywords: [
    "german vpd calculator",
    "german grade calculator",
    "cgpa to german grade",
    "bangladesh cgpa to german grade",
    "uni assist grade calculator",
    "germany masters cgpa calculator",
    "german university cgpa conversion",
    "modified bavarian formula",
    "vpd calculator bangladesh",
  ],
  authors: [{ name: "German VPD Calculator" }],
  creator: "German VPD Calculator",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "German VPD Calculator",
    title: "German VPD Calculator for Bangladesh | CGPA to German Grade Converter",
    description:
      "Convert your Bangladeshi CGPA into German university grades instantly using the official Modified Bavarian Formula. Free & accurate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "German VPD Calculator for Bangladesh | CGPA to German Grade Converter",
    description:
      "Convert your Bangladeshi CGPA into German university grades instantly using the official Modified Bavarian Formula.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaMarkup type="website" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-[100]">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Google Analytics — only when GA ID is set */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
