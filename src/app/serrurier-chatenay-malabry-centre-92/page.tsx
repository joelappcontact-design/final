import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Châtenay-Malabry-Centre',
  department: '92',
  population: '33000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Châtenay-Malabry-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chatenay-malabry-centre-92', 'serrurier urgence chatenay-malabry-centre-92', 'ouverture porte chatenay-malabry-centre-92', 'serrurier 24h chatenay-malabry-centre-92', 'dépannage serrure chatenay-malabry-centre-92']
};

export default function Page() {
  return <CityPage 
    cityName="Châtenay-Malabry-Centre"
    citySlug="chatenay-malabry-centre-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Châtenay-Malabry-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chatenay-malabry-centre-92", "serrurier urgence chatenay-malabry-centre-92", "ouverture porte chatenay-malabry-centre-92", "serrurier 24h chatenay-malabry-centre-92", "dépannage serrure chatenay-malabry-centre-92"]}
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