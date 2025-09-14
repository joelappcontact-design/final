import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ballancourt-sur-Essonne',
  department: '91',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ballancourt-sur-Essonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ballancourt-sur-essonne', 'serrurier urgence ballancourt-sur-essonne', 'ouverture porte ballancourt-sur-essonne', 'serrurier 24h ballancourt-sur-essonne', 'dépannage serrure ballancourt-sur-essonne']
};

export default function Page() {
  return <CityPage 
    cityName="Ballancourt-sur-Essonne"
    citySlug="ballancourt-sur-essonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ballancourt-sur-Essonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ballancourt-sur-essonne", "serrurier urgence ballancourt-sur-essonne", "ouverture porte ballancourt-sur-essonne", "serrurier 24h ballancourt-sur-essonne", "dépannage serrure ballancourt-sur-essonne"]}
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