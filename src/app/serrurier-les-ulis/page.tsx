import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Ulis',
  department: '91',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Ulis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-ulis', 'serrurier urgence les-ulis', 'ouverture porte les-ulis', 'serrurier 24h les-ulis', 'dépannage serrure les-ulis']
};

export default function Page() {
  return <CityPage 
    cityName="Les Ulis"
    citySlug="les-ulis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Ulis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-ulis", "serrurier urgence les-ulis", "ouverture porte les-ulis", "serrurier 24h les-ulis", "dépannage serrure les-ulis"]}
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