import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';
import CallButton from '@/components/CallButton';
import { config } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `Serrurier d'urgence ${config.primaryCity} 24h/24 | Appelez ${config.phoneDisplay} | Serrurierfrancais.com`,
    template: `%s | Serrurierfrancais.com`,
  },
  description: `Serrurier d'urgence ${config.primaryCity} 24h/24. Appelez ${config.phoneDisplay} pour intervention immédiate. Artisans vérifiés, intervention en ${config.slaMinutes}.`,
  keywords: [
    'serrurierfrancais.com',
    'serrurier urgence',
    'serrurier paris',
    'ouverture porte',
    'changement cylindre',
    'serrurier 24h',
    'dépannage serrure',
    'artisan serrurier',
    'serrurier pas cher',
    'appeler serrurier'
  ],
  authors: [{ name: config.siteName }],
  creator: config.siteName,
  publisher: config.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://serrurierfrancais.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: `${config.siteName} - Serrurier d'urgence ${config.primaryCity} 24h/24`,
    description: `Serrurier d'urgence ${config.primaryCity} - Intervention 24h/24, 7j/7. Intervention rapide, artisans vérifiés.`,
    siteName: config.siteName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${config.siteName} - Serrurier d'urgence ${config.primaryCity}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Serrurier d'urgence ${config.primaryCity} 24h/24 | Appelez ${config.phoneDisplay}`,
    description: `Serrurier d'urgence ${config.primaryCity} 24h/24. Appelez ${config.phoneDisplay} pour intervention immédiate.`,
    images: ['/og-image.jpg'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <SchemaLocalBusiness />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6B4EFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LM2SGGT"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="VjubS7Tiwo6c5RrnOOvDvw"
          strategy="afterInteractive"
        />
        
        {/* Google Ads + Consent Mode v2 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17551229588`}
          strategy="afterInteractive"
        />
        <Script id="ga-consent" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Consent Mode v2 par défaut (ajuste selon ton CMP)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted'
            });
            gtag('js', new Date());
            gtag('config', 'AW-17551229588', {
              allow_enhanced_conversions: true
            });
          `}
        </Script>
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LM2SGGT');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LM2SGGT"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        
        {/* Bouton d'appel sticky mobile */}
        <div className="md:hidden">
          <CallButton variant="sticky" size="lg" />
        </div>
      </body>
    </html>
  );
}
