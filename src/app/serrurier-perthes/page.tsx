import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Perthes',
  department: '77',
  population: '900',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Perthes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier perthes', 'serrurier urgence perthes', 'ouverture porte perthes', 'serrurier 24h perthes', 'dépannage serrure perthes']
};

export default function Page() {
  return <CityPage 
    cityName="Perthes"
    citySlug="perthes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Perthes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier perthes", "serrurier urgence perthes", "ouverture porte perthes", "serrurier 24h perthes", "dépannage serrure perthes"]}
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