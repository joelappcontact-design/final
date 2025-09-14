import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ivry-sur-Seine',
  department: '94',
  population: '62000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ivry-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ivry-sur-seine', 'serrurier urgence ivry-sur-seine', 'ouverture porte ivry-sur-seine', 'serrurier 24h ivry-sur-seine', 'dépannage serrure ivry-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Ivry-sur-Seine"
    citySlug="ivry-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ivry-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ivry-sur-seine", "serrurier urgence ivry-sur-seine", "ouverture porte ivry-sur-seine", "serrurier 24h ivry-sur-seine", "dépannage serrure ivry-sur-seine"]}
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