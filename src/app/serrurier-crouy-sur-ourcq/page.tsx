import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Crouy-sur-Ourcq',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Crouy-sur-Ourcq 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier crouy-sur-ourcq', 'serrurier urgence crouy-sur-ourcq', 'ouverture porte crouy-sur-ourcq', 'serrurier 24h crouy-sur-ourcq', 'dépannage serrure crouy-sur-ourcq']
};

export default function Page() {
  return <CityPage 
    cityName="Crouy-sur-Ourcq"
    citySlug="crouy-sur-ourcq"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Crouy-sur-Ourcq - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier crouy-sur-ourcq", "serrurier urgence crouy-sur-ourcq", "ouverture porte crouy-sur-ourcq", "serrurier 24h crouy-sur-ourcq", "dépannage serrure crouy-sur-ourcq"]}
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