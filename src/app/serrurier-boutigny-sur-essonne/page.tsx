import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boutigny-sur-Essonne',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boutigny-sur-Essonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boutigny-sur-essonne', 'serrurier urgence boutigny-sur-essonne', 'ouverture porte boutigny-sur-essonne', 'serrurier 24h boutigny-sur-essonne', 'dépannage serrure boutigny-sur-essonne']
};

export default function Page() {
  return <CityPage 
    cityName="Boutigny-sur-Essonne"
    citySlug="boutigny-sur-essonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boutigny-sur-Essonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boutigny-sur-essonne", "serrurier urgence boutigny-sur-essonne", "ouverture porte boutigny-sur-essonne", "serrurier 24h boutigny-sur-essonne", "dépannage serrure boutigny-sur-essonne"]}
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