import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puteaux',
  department: '92',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Puteaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puteaux-92', 'serrurier urgence puteaux-92', 'ouverture porte puteaux-92', 'serrurier 24h puteaux-92', 'dépannage serrure puteaux-92']
};

export default function Page() {
  return <CityPage 
    cityName="Puteaux"
    citySlug="puteaux-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Puteaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puteaux-92", "serrurier urgence puteaux-92", "ouverture porte puteaux-92", "serrurier 24h puteaux-92", "dépannage serrure puteaux-92"]}
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