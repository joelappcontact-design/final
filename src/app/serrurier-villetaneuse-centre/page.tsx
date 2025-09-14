import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villetaneuse-Centre',
  department: '93',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villetaneuse-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villetaneuse-centre', 'serrurier urgence villetaneuse-centre', 'ouverture porte villetaneuse-centre', 'serrurier 24h villetaneuse-centre', 'dépannage serrure villetaneuse-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Villetaneuse-Centre"
    citySlug="villetaneuse-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villetaneuse-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villetaneuse-centre", "serrurier urgence villetaneuse-centre", "ouverture porte villetaneuse-centre", "serrurier 24h villetaneuse-centre", "dépannage serrure villetaneuse-centre"]}
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