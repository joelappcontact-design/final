import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lésigny',
  department: '77',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lésigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lesigny', 'serrurier urgence lesigny', 'ouverture porte lesigny', 'serrurier 24h lesigny', 'dépannage serrure lesigny']
};

export default function Page() {
  return <CityPage 
    cityName="Lésigny"
    citySlug="lesigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lésigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lesigny", "serrurier urgence lesigny", "ouverture porte lesigny", "serrurier 24h lesigny", "dépannage serrure lesigny"]}
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