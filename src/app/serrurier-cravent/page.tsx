import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cravent',
  department: '78',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cravent 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cravent', 'serrurier urgence cravent', 'ouverture porte cravent', 'serrurier 24h cravent', 'dépannage serrure cravent']
};

export default function Page() {
  return <CityPage 
    cityName="Cravent"
    citySlug="cravent"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cravent - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cravent", "serrurier urgence cravent", "ouverture porte cravent", "serrurier 24h cravent", "dépannage serrure cravent"]}
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