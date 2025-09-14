import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puteaux-Sud',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Puteaux-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puteaux-sud', 'serrurier urgence puteaux-sud', 'ouverture porte puteaux-sud', 'serrurier 24h puteaux-sud', 'dépannage serrure puteaux-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Puteaux-Sud"
    citySlug="puteaux-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Puteaux-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puteaux-sud", "serrurier urgence puteaux-sud", "ouverture porte puteaux-sud", "serrurier 24h puteaux-sud", "dépannage serrure puteaux-sud"]}
  />;
}

export async function generateMetadata() {
  return {
    title: `Serrurier d'urgence ${cityData.name} 24h/24 - Intervention rapide`,
    description: cityData.description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title: `Serrurier d'urgence ${cityData.name} 24h/24`,
      description: cityData.description,
      type: 'website',
      locale: 'fr_FR',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}