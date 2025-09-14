import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vauhallan',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vauhallan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vauhallan', 'serrurier urgence vauhallan', 'ouverture porte vauhallan', 'serrurier 24h vauhallan', 'dépannage serrure vauhallan']
};

export default function Page() {
  return <CityPage 
    cityName="Vauhallan"
    citySlug="vauhallan"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vauhallan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vauhallan", "serrurier urgence vauhallan", "ouverture porte vauhallan", "serrurier 24h vauhallan", "dépannage serrure vauhallan"]}
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