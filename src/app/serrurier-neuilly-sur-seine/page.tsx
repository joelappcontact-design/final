import { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Serrurier d\'urgence Neuilly-sur-Seine 24h/24 | Appelez 07 56 90 21 12 | Serrurierfrancais.com',
  description: 'Serrurier d\'urgence Neuilly-sur-Seine 24h/24. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés, intervention en 30-45 minutes.',
  keywords: [
    'serrurier neuilly-sur-seine',
    'serrurier urgence neuilly-sur-seine',
    'ouverture porte neuilly-sur-seine',
    'changement cylindre neuilly-sur-seine',
    'serrurier 24h neuilly-sur-seine',
    'dépannage serrure neuilly-sur-seine',
    'artisan serrurier neuilly-sur-seine',
    'serrurier pas cher neuilly-sur-seine',
    'appeler serrurier neuilly-sur-seine'
  ],
};

export default function SerrurierNeuillySurSeinePage() {
  return (
    <CityPageTemplate
      cityName="Neuilly-sur-Seine"
      citySlug="neuilly-sur-seine"
      description="Intervention rapide en 30-45 minutes à Neuilly-sur-Seine. Artisans certifiés et tarifs transparents."
    />
  );
}