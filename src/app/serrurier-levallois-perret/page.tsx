import { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Serrurier d\'urgence Levallois-Perret 24h/24 | Appelez 07 56 90 21 12 | Serrurierfrancais.com',
  description: 'Serrurier d\'urgence Levallois-Perret 24h/24. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés, intervention en 30-45 minutes.',
  keywords: [
    'serrurier levallois-perret',
    'serrurier urgence levallois-perret',
    'ouverture porte levallois-perret',
    'changement cylindre levallois-perret',
    'serrurier 24h levallois-perret',
    'dépannage serrure levallois-perret',
    'artisan serrurier levallois-perret',
    'serrurier pas cher levallois-perret',
    'appeler serrurier levallois-perret'
  ],
};

export default function SerrurierLevalloisPerretPage() {
  return (
    <CityPageTemplate
      cityName="Levallois-Perret"
      citySlug="levallois-perret"
      description="Intervention rapide en 30-45 minutes à Levallois-Perret. Artisans certifiés et tarifs transparents."
    />
  );
}