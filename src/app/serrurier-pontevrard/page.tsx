import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ponthévrard',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ponthévrard 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontevrard', 'serrurier urgence pontevrard', 'ouverture porte pontevrard', 'serrurier 24h pontevrard', 'dépannage serrure pontevrard']
};

export default function Page() {
  return <CityPage 
    cityName="Ponthévrard"
    citySlug="pontevrard"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ponthévrard - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontevrard", "serrurier urgence pontevrard", "ouverture porte pontevrard", "serrurier 24h pontevrard", "dépannage serrure pontevrard"]}
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