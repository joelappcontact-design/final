import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Faramans',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Faramans 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier faramans', 'serrurier urgence faramans', 'ouverture porte faramans', 'serrurier 24h faramans', 'dépannage serrure faramans']
};

export default function Page() {
  return <CityPage 
    cityName="Faramans"
    citySlug="faramans"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Faramans - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier faramans", "serrurier urgence faramans", "ouverture porte faramans", "serrurier 24h faramans", "dépannage serrure faramans"]}
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