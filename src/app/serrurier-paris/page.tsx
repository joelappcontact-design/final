import { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Serrurier d\'urgence Paris 24h/24 | Appelez 07 56 90 21 12 | Serrurierfrancais.com',
  description: 'Serrurier d\'urgence Paris 24h/24. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés, intervention en 30-45 minutes.',
  keywords: [
    'serrurier paris',
    'serrurier urgence paris',
    'ouverture porte paris',
    'changement cylindre paris',
    'serrurier 24h paris',
    'dépannage serrure paris',
    'artisan serrurier paris',
    'serrurier pas cher paris',
    'appeler serrurier paris'
  ],
};

export default function SerrurierParisPage() {
  return (
    <CityPageTemplate
      cityName="Paris"
      citySlug="paris"
      description="Intervention rapide en 30-45 minutes dans tous les arrondissements de Paris. Artisans certifiés et tarifs transparents."
      services={[
        {
          title: 'Ouverture de porte',
          description: 'Ouverture rapide et sécurisée de tous types de serrures sans endommager votre porte',
          price: 'À partir de 129€',
          icon: '🔓'
        },
        {
          title: 'Changement de cylindre',
          description: 'Installation et réparation de cylindres de serrure pour une sécurité optimale',
          price: 'À partir de 89€',
          icon: '🔧'
        },
        {
          title: 'Sécurisation',
          description: 'Renforcement et sécurisation de vos ouvertures avec les dernières technologies',
          price: 'Sur devis',
          icon: '🛡️'
        }
      ]}
      features={[
        {
          title: 'Intervention rapide',
          description: 'Délai garanti de 30-45 minutes',
          icon: '⚡'
        },
        {
          title: 'Artisans certifiés',
          description: 'Professionnels vérifiés et assurés',
          icon: '🛡️'
        },
        {
          title: 'Disponible 24h/24',
          description: 'Service d\'urgence permanent',
          icon: '📞'
        }
      ]}
    />
  );
}