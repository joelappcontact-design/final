import { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Serrurier d\'urgence Boulogne-Billancourt 24h/24 | Appelez 07 56 90 21 12 | Serrurierfrancais.com',
  description: 'Serrurier d\'urgence Boulogne-Billancourt 24h/24. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés, intervention en 30-45 minutes.',
  keywords: [
    'serrurier boulogne-billancourt',
    'serrurier urgence boulogne-billancourt',
    'ouverture porte boulogne-billancourt',
    'changement cylindre boulogne-billancourt',
    'serrurier 24h boulogne-billancourt',
    'dépannage serrure boulogne-billancourt',
    'artisan serrurier boulogne-billancourt',
    'serrurier pas cher boulogne-billancourt',
    'appeler serrurier boulogne-billancourt'
  ],
};

export default function SerrurierBoulogneBillancourtPage() {
  return (
    <CityPageTemplate
      cityName="Boulogne-Billancourt"
      citySlug="boulogne-billancourt"
      description="Intervention rapide en 30-45 minutes à Boulogne-Billancourt. Artisans certifiés et tarifs transparents."
    />
  );
}