import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puteaux',
  department: '92',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la Défense', 'Quartier de la République', 'Quartier de la Gare'],
  description: 'Serrurier d\'urgence Puteaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puteaux', 'serrurier urgence puteaux', 'ouverture porte puteaux', 'serrurier 24h puteaux', 'dépannage serrure puteaux']
};

export default function Page() {
  return <CityPage 
    cityName="Puteaux"
    citySlug="puteaux"
    zones={['Centre-ville', 'Quartier de la Défense', 'Quartier de la République', 'Quartier de la Gare']}
    description="Puteaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puteaux", "serrurier urgence puteaux", "ouverture porte puteaux", "serrurier 24h puteaux", "dépannage serrure puteaux"]}
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