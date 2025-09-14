import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Misy-sur-Yonne',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Misy-sur-Yonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier misy-sur-yonne', 'serrurier urgence misy-sur-yonne', 'ouverture porte misy-sur-yonne', 'serrurier 24h misy-sur-yonne', 'dépannage serrure misy-sur-yonne']
};

export default function Page() {
  return <CityPage 
    cityName="Misy-sur-Yonne"
    citySlug="misy-sur-yonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Misy-sur-Yonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier misy-sur-yonne", "serrurier urgence misy-sur-yonne", "ouverture porte misy-sur-yonne", "serrurier 24h misy-sur-yonne", "dépannage serrure misy-sur-yonne"]}
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