import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Samois-sur-Seine',
  department: '77',
  population: '2100',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Samois-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier samois-sur-seine', 'serrurier urgence samois-sur-seine', 'ouverture porte samois-sur-seine', 'serrurier 24h samois-sur-seine', 'dépannage serrure samois-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Samois-sur-Seine"
    citySlug="samois-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Samois-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier samois-sur-seine", "serrurier urgence samois-sur-seine", "ouverture porte samois-sur-seine", "serrurier 24h samois-sur-seine", "dépannage serrure samois-sur-seine"]}
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