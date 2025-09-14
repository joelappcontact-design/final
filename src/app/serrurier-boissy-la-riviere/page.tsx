import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-la-Rivière',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-la-Rivière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-la-riviere', 'serrurier urgence boissy-la-riviere', 'ouverture porte boissy-la-riviere', 'serrurier 24h boissy-la-riviere', 'dépannage serrure boissy-la-riviere']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-la-Rivière"
    citySlug="boissy-la-riviere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-la-Rivière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-la-riviere", "serrurier urgence boissy-la-riviere", "ouverture porte boissy-la-riviere", "serrurier 24h boissy-la-riviere", "dépannage serrure boissy-la-riviere"]}
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