import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Serrurier d'urgence Île-de-France | Intervention 24h/24 - Serrurierfrancais.com",
  description: "Serrurier d'urgence en Île-de-France. Intervention 30-45 min, 24h/24. Ouverture porte, changement serrure, sécurisation. Artisans certifiés. À partir de 39€.",
  keywords: "serrurier, urgence, île-de-france, paris, ouverture porte, changement serrure, 24h/24, intervention rapide",
  authors: [{ name: "Serrurierfrancais.com" }],
  creator: "Serrurierfrancais.com",
  publisher: "Serrurierfrancais.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://serrurierfrancais.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Serrurier d'urgence Île-de-France | Intervention 24h/24",
    description: "Serrurier d'urgence en Île-de-France. Intervention 30-45 min, 24h/24. Artisans certifiés. À partir de 39€.",
    url: 'https://serrurierfrancais.com',
    siteName: 'Serrurierfrancais.com',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serrurier d'urgence Île-de-France | Intervention 24h/24",
    description: "Serrurier d'urgence en Île-de-France. Intervention 30-45 min, 24h/24. Artisans certifiés. À partir de 39€.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Serrurier Français" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Serrurierfrancais.com",
              "description": "Serrurier d'urgence en Île-de-France",
              "url": "https://serrurierfrancais.com",
              "telephone": "0756902112",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Île-de-France",
                "addressCountry": "FR"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8566,
                  "longitude": 2.3522
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18052286933"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18052286933');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
