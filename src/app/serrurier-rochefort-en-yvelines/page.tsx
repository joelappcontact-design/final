import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rochefort-en-Yvelines',
  department: '78',
  population: '1000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rochefort-en-Yvelines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rochefort-en-yvelines', 'serrurier urgence rochefort-en-yvelines', 'ouverture porte rochefort-en-yvelines', 'serrurier 24h rochefort-en-yvelines', 'dépannage serrure rochefort-en-yvelines']
};

export default function Page() {
  return <CityPage 
    cityName="Rochefort-en-Yvelines"
    citySlug="rochefort-en-yvelines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rochefort-en-Yvelines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rochefort-en-yvelines", "serrurier urgence rochefort-en-yvelines", "ouverture porte rochefort-en-yvelines", "serrurier 24h rochefort-en-yvelines", "dépannage serrure rochefort-en-yvelines"]}
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