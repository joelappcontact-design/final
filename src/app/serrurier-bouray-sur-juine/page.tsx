import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bouray-sur-Juine',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bouray-sur-Juine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bouray-sur-juine', 'serrurier urgence bouray-sur-juine', 'ouverture porte bouray-sur-juine', 'serrurier 24h bouray-sur-juine', 'dépannage serrure bouray-sur-juine']
};

export default function Page() {
  return <CityPage 
    cityName="Bouray-sur-Juine"
    citySlug="bouray-sur-juine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bouray-sur-Juine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bouray-sur-juine", "serrurier urgence bouray-sur-juine", "ouverture porte bouray-sur-juine", "serrurier 24h bouray-sur-juine", "dépannage serrure bouray-sur-juine"]}
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