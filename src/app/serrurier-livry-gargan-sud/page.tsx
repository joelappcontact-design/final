import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Livry-Gargan Sud',
  department: '93',
  population: '22500',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Livry-Gargan Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier livry-gargan-sud', 'serrurier urgence livry-gargan-sud', 'ouverture porte livry-gargan-sud', 'serrurier 24h livry-gargan-sud', 'dépannage serrure livry-gargan-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Livry-Gargan Sud"
    citySlug="livry-gargan-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Livry-Gargan Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier livry-gargan-sud", "serrurier urgence livry-gargan-sud", "ouverture porte livry-gargan-sud", "serrurier 24h livry-gargan-sud", "dépannage serrure livry-gargan-sud"]}
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