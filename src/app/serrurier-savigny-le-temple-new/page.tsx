import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Savigny-le-Temple',
  department: '77',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Savigny-le-Temple 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier savigny-le-temple-new', 'serrurier urgence savigny-le-temple-new', 'ouverture porte savigny-le-temple-new', 'serrurier 24h savigny-le-temple-new', 'dépannage serrure savigny-le-temple-new']
};

export default function Page() {
  return <CityPage 
    cityName="Savigny-le-Temple"
    citySlug="savigny-le-temple-new"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Savigny-le-Temple - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier savigny-le-temple-new", "serrurier urgence savigny-le-temple-new", "ouverture porte savigny-le-temple-new", "serrurier 24h savigny-le-temple-new", "dépannage serrure savigny-le-temple-new"]}
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