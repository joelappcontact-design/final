import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clairefontaine-en-Yvelines',
  department: '78',
  population: '900',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clairefontaine-en-Yvelines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clairefontaine-en-yvelines', 'serrurier urgence clairefontaine-en-yvelines', 'ouverture porte clairefontaine-en-yvelines', 'serrurier 24h clairefontaine-en-yvelines', 'dépannage serrure clairefontaine-en-yvelines']
};

export default function Page() {
  return <CityPage 
    cityName="Clairefontaine-en-Yvelines"
    citySlug="clairefontaine-en-yvelines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clairefontaine-en-Yvelines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clairefontaine-en-yvelines", "serrurier urgence clairefontaine-en-yvelines", "ouverture porte clairefontaine-en-yvelines", "serrurier 24h clairefontaine-en-yvelines", "dépannage serrure clairefontaine-en-yvelines"]}
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