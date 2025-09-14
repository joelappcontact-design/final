import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Livry-Gargan Nord',
  department: '93',
  population: '22500',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Livry-Gargan Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier livry-gargan-nord', 'serrurier urgence livry-gargan-nord', 'ouverture porte livry-gargan-nord', 'serrurier 24h livry-gargan-nord', 'dépannage serrure livry-gargan-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Livry-Gargan Nord"
    citySlug="livry-gargan-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Livry-Gargan Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier livry-gargan-nord", "serrurier urgence livry-gargan-nord", "ouverture porte livry-gargan-nord", "serrurier 24h livry-gargan-nord", "dépannage serrure livry-gargan-nord"]}
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