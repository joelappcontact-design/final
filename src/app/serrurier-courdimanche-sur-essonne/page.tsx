import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courdimanche-sur-Essonne',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courdimanche-sur-Essonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courdimanche-sur-essonne', 'serrurier urgence courdimanche-sur-essonne', 'ouverture porte courdimanche-sur-essonne', 'serrurier 24h courdimanche-sur-essonne', 'dépannage serrure courdimanche-sur-essonne']
};

export default function Page() {
  return <CityPage 
    cityName="Courdimanche-sur-Essonne"
    citySlug="courdimanche-sur-essonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courdimanche-sur-Essonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courdimanche-sur-essonne", "serrurier urgence courdimanche-sur-essonne", "ouverture porte courdimanche-sur-essonne", "serrurier 24h courdimanche-sur-essonne", "dépannage serrure courdimanche-sur-essonne"]}
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