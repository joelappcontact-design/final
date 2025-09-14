import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-le-Bretonneux',
  department: '92',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-le-Bretonneux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-le-bretonneux', 'serrurier urgence montigny-le-bretonneux', 'ouverture porte montigny-le-bretonneux', 'serrurier 24h montigny-le-bretonneux', 'dépannage serrure montigny-le-bretonneux']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-le-Bretonneux"
    citySlug="montigny-le-bretonneux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-le-Bretonneux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-le-bretonneux", "serrurier urgence montigny-le-bretonneux", "ouverture porte montigny-le-bretonneux", "serrurier 24h montigny-le-bretonneux", "dépannage serrure montigny-le-bretonneux"]}
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