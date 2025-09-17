import { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Serrurier d\'urgence Issy-les-Moulineaux 24h/24 | Appelez 07 56 90 21 12 | Serrurierfrancais.com',
  description: 'Serrurier d\'urgence Issy-les-Moulineaux 24h/24. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés, intervention en 30-45 minutes.',
  keywords: [
    'serrurier issy-les-moulineaux',
    'serrurier urgence issy-les-moulineaux',
    'ouverture porte issy-les-moulineaux',
    'changement cylindre issy-les-moulineaux',
    'serrurier 24h issy-les-moulineaux',
    'dépannage serrure issy-les-moulineaux',
    'artisan serrurier issy-les-moulineaux',
    'serrurier pas cher issy-les-moulineaux',
    'appeler serrurier issy-les-moulineaux'
  ],
};

export default function SerrurierIssyLesMoulineauxPage() {
  return (
    <CityPageTemplate
      cityName="Issy-les-Moulineaux"
      citySlug="issy-les-moulineaux"
      description="Intervention rapide en 30-45 minutes à Issy-les-Moulineaux. Artisans certifiés et tarifs transparents."
    />
  );
}