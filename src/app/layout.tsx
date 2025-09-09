import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { config } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${config.siteName} - Serrurier d'urgence ${config.primaryCity} 24h/24`,
    template: `%s | ${config.siteName}`,
  },
  description: `Serrurier d'urgence ${config.primaryCity} - Intervention 24h/24, 7j/7. Prix clairs et transparents, artisans vérifiés. Intervention en ${config.slaMinutes}.`,
  keywords: [
    'serrurier urgence',
    'serrurier paris',
    'ouverture porte',
    'changement cylindre',
    'serrurier 24h',
    'dépannage serrure',
    'artisan serrurier',
    'prix clair serrurier'
  ],
  authors: [{ name: config.siteName }],
  creator: config.siteName,
  publisher: config.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://serrurier-joel.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: `${config.siteName} - Serrurier d'urgence ${config.primaryCity} 24h/24`,
    description: `Serrurier d'urgence ${config.primaryCity} - Intervention 24h/24, 7j/7. Prix clairs et transparents, artisans vérifiés.`,
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
    title: `${config.siteName} - Serrurier d'urgence ${config.primaryCity} 24h/24`,
    description: `Serrurier d'urgence ${config.primaryCity} - Intervention 24h/24, 7j/7. Prix clairs et transparents.`,
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
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
