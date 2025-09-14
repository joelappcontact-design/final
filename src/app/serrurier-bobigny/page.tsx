import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bobigny',
  department: '93',
  population: '50000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bobigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bobigny', 'serrurier urgence bobigny', 'ouverture porte bobigny', 'serrurier 24h bobigny', 'dépannage serrure bobigny']
};

export default function Page() {
  return <CityPage 
    cityName="Bobigny"
    citySlug="bobigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bobigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bobigny", "serrurier urgence bobigny", "ouverture porte bobigny", "serrurier 24h bobigny", "dépannage serrure bobigny"]}
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