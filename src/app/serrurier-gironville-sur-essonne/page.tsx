import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gironville-sur-Essonne',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gironville-sur-Essonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gironville-sur-essonne', 'serrurier urgence gironville-sur-essonne', 'ouverture porte gironville-sur-essonne', 'serrurier 24h gironville-sur-essonne', 'dépannage serrure gironville-sur-essonne']
};

export default function Page() {
  return <CityPage 
    cityName="Gironville-sur-Essonne"
    citySlug="gironville-sur-essonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gironville-sur-Essonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gironville-sur-essonne", "serrurier urgence gironville-sur-essonne", "ouverture porte gironville-sur-essonne", "serrurier 24h gironville-sur-essonne", "dépannage serrure gironville-sur-essonne"]}
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