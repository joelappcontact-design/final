import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontains',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontains 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontains', 'serrurier urgence fontains', 'ouverture porte fontains', 'serrurier 24h fontains', 'dépannage serrure fontains']
};

export default function Page() {
  return <CityPage 
    cityName="Fontains"
    citySlug="fontains"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontains - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontains", "serrurier urgence fontains", "ouverture porte fontains", "serrurier 24h fontains", "dépannage serrure fontains"]}
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