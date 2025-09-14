import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Magny-les-Hameaux',
  department: '78',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Magny-les-Hameaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier magny-les-hameaux', 'serrurier urgence magny-les-hameaux', 'ouverture porte magny-les-hameaux', 'serrurier 24h magny-les-hameaux', 'dépannage serrure magny-les-hameaux']
};

export default function Page() {
  return <CityPage 
    cityName="Magny-les-Hameaux"
    citySlug="magny-les-hameaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Magny-les-Hameaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier magny-les-hameaux", "serrurier urgence magny-les-hameaux", "ouverture porte magny-les-hameaux", "serrurier 24h magny-les-hameaux", "dépannage serrure magny-les-hameaux"]}
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