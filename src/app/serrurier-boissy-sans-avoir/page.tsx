import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-sans-Avoir',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-sans-Avoir 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-sans-avoir', 'serrurier urgence boissy-sans-avoir', 'ouverture porte boissy-sans-avoir', 'serrurier 24h boissy-sans-avoir', 'dépannage serrure boissy-sans-avoir']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-sans-Avoir"
    citySlug="boissy-sans-avoir"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-sans-Avoir - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-sans-avoir", "serrurier urgence boissy-sans-avoir", "ouverture porte boissy-sans-avoir", "serrurier 24h boissy-sans-avoir", "dépannage serrure boissy-sans-avoir"]}
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