import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Echouboulains',
  department: '77',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Echouboulains 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier echouboulains', 'serrurier urgence echouboulains', 'ouverture porte echouboulains', 'serrurier 24h echouboulains', 'dépannage serrure echouboulains']
};

export default function Page() {
  return <CityPage 
    cityName="Echouboulains"
    citySlug="echouboulains"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Echouboulains - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier echouboulains", "serrurier urgence echouboulains", "ouverture porte echouboulains", "serrurier 24h echouboulains", "dépannage serrure echouboulains"]}
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