import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garches-Centre',
  department: '92',
  population: '18000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garches-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garches-centre', 'serrurier urgence garches-centre', 'ouverture porte garches-centre', 'serrurier 24h garches-centre', 'dépannage serrure garches-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Garches-Centre"
    citySlug="garches-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garches-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garches-centre", "serrurier urgence garches-centre", "ouverture porte garches-centre", "serrurier 24h garches-centre", "dépannage serrure garches-centre"]}
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