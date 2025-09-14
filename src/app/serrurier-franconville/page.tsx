import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Franconville',
  department: '95',
  population: '34000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Franconville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier franconville', 'serrurier urgence franconville', 'ouverture porte franconville', 'serrurier 24h franconville', 'dépannage serrure franconville']
};

export default function Page() {
  return <CityPage 
    cityName="Franconville"
    citySlug="franconville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Franconville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier franconville", "serrurier urgence franconville", "ouverture porte franconville", "serrurier 24h franconville", "dépannage serrure franconville"]}
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