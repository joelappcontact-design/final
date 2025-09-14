import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villebon-sur-Yvette',
  department: '91',
  population: '5500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villebon-sur-Yvette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villebon-sur-yvette', 'serrurier urgence villebon-sur-yvette', 'ouverture porte villebon-sur-yvette', 'serrurier 24h villebon-sur-yvette', 'dépannage serrure villebon-sur-yvette']
};

export default function Page() {
  return <CityPage 
    cityName="Villebon-sur-Yvette"
    citySlug="villebon-sur-yvette"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villebon-sur-Yvette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villebon-sur-yvette", "serrurier urgence villebon-sur-yvette", "ouverture porte villebon-sur-yvette", "serrurier 24h villebon-sur-yvette", "dépannage serrure villebon-sur-yvette"]}
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