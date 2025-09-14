import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saintry-sur-Seine',
  department: '91',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saintry-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saintry-sur-seine', 'serrurier urgence saintry-sur-seine', 'ouverture porte saintry-sur-seine', 'serrurier 24h saintry-sur-seine', 'dépannage serrure saintry-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Saintry-sur-Seine"
    citySlug="saintry-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saintry-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saintry-sur-seine", "serrurier urgence saintry-sur-seine", "ouverture porte saintry-sur-seine", "serrurier 24h saintry-sur-seine", "dépannage serrure saintry-sur-seine"]}
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