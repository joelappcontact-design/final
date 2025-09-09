import { Metadata } from 'next';
import { config } from '@/lib/config';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact serrurier d\'urgence - Appelez-nous 24h/24',
  description: `Contactez ${config.siteName} pour une intervention d'urgence 24h/24. Téléphone, WhatsApp, email. Intervention en ${config.slaMinutes}.`,
  keywords: [
    'contact serrurier',
    'serrurier urgence',
    'appel serrurier',
    'whatsapp serrurier',
    'intervention serrurier'
  ],
  openGraph: {
    title: 'Contact serrurier d\'urgence - Appelez-nous 24h/24',
    description: `Contactez ${config.siteName} pour une intervention d'urgence 24h/24.`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
