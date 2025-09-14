import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courbevoie-Centre',
  department: '92',
  population: '78000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courbevoie-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courbevoie-centre', 'serrurier urgence courbevoie-centre', 'ouverture porte courbevoie-centre', 'serrurier 24h courbevoie-centre', 'dépannage serrure courbevoie-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Courbevoie-Centre"
    citySlug="courbevoie-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courbevoie-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courbevoie-centre", "serrurier urgence courbevoie-centre", "ouverture porte courbevoie-centre", "serrurier 24h courbevoie-centre", "dépannage serrure courbevoie-centre"]}
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