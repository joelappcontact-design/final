import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Serrurier d'urgence Île-de-France | 24h/24 | Serrurierfrancais.com",
  description: "Serrurier d'urgence 24h/24 en Île-de-France. Intervention rapide en 30-45 minutes. Artisans certifiés, tarifs transparents. Appelez 07 56 90 21 12",
  keywords: [
    'serrurier urgence',
    'serrurier 24h',
    'ouverture porte',
    'changement cylindre',
    'dépannage serrure',
    'artisan serrurier',
    'serrurier pas cher',
    'appeler serrurier',
    'Île-de-France',
    'Paris'
  ],
  authors: [{ name: 'Serrurierfrancais.com' }],
  creator: 'Serrurierfrancais.com',
  publisher: 'Serrurierfrancais.com',
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
    title: "Serrurier d'urgence Île-de-France | 24h/24",
    description: "Serrurier d'urgence 24h/24 en Île-de-France. Intervention rapide en 30-45 minutes. Artisans certifiés, tarifs transparents.",
    url: 'https://serrurierfrancais.com',
    siteName: 'Serrurierfrancais.com',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serrurier d'urgence Île-de-France | 24h/24",
    description: "Serrurier d'urgence 24h/24 en Île-de-France. Intervention rapide en 30-45 minutes. Artisans certifiés, tarifs transparents.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />

      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}