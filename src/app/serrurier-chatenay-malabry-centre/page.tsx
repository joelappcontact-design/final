import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chatenay-Malabry-Centre',
  department: '92',
  population: '33000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chatenay-Malabry-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chatenay-malabry-centre', 'serrurier urgence chatenay-malabry-centre', 'ouverture porte chatenay-malabry-centre', 'serrurier 24h chatenay-malabry-centre', 'dépannage serrure chatenay-malabry-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Chatenay-Malabry-Centre"
    citySlug="chatenay-malabry-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chatenay-Malabry-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chatenay-malabry-centre", "serrurier urgence chatenay-malabry-centre", "ouverture porte chatenay-malabry-centre", "serrurier 24h chatenay-malabry-centre", "dépannage serrure chatenay-malabry-centre"]}
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