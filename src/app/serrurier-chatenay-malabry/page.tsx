import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Châtenay-Malabry',
  department: '91',
  population: '34000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Châtenay-Malabry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chatenay-malabry', 'serrurier urgence chatenay-malabry', 'ouverture porte chatenay-malabry', 'serrurier 24h chatenay-malabry', 'dépannage serrure chatenay-malabry']
};

export default function Page() {
  return <CityPage 
    cityName="Châtenay-Malabry"
    citySlug="chatenay-malabry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Châtenay-Malabry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chatenay-malabry", "serrurier urgence chatenay-malabry", "ouverture porte chatenay-malabry", "serrurier 24h chatenay-malabry", "dépannage serrure chatenay-malabry"]}
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