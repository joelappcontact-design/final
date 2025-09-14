import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Livry-Gargan',
  department: '93',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Livry-Gargan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier livry-gargan', 'serrurier urgence livry-gargan', 'ouverture porte livry-gargan', 'serrurier 24h livry-gargan', 'dépannage serrure livry-gargan']
};

export default function Page() {
  return <CityPage 
    cityName="Livry-Gargan"
    citySlug="livry-gargan"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Livry-Gargan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier livry-gargan", "serrurier urgence livry-gargan", "ouverture porte livry-gargan", "serrurier 24h livry-gargan", "dépannage serrure livry-gargan"]}
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