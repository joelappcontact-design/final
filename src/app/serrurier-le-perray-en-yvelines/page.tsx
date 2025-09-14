import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Perray-en-Yvelines',
  department: '78',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Perray-en-Yvelines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-perray-en-yvelines', 'serrurier urgence le-perray-en-yvelines', 'ouverture porte le-perray-en-yvelines', 'serrurier 24h le-perray-en-yvelines', 'dépannage serrure le-perray-en-yvelines']
};

export default function Page() {
  return <CityPage 
    cityName="Le Perray-en-Yvelines"
    citySlug="le-perray-en-yvelines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Perray-en-Yvelines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-perray-en-yvelines", "serrurier urgence le-perray-en-yvelines", "ouverture porte le-perray-en-yvelines", "serrurier 24h le-perray-en-yvelines", "dépannage serrure le-perray-en-yvelines"]}
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