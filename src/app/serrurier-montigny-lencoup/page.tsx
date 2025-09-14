import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-Lencoup',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-Lencoup 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-lencoup', 'serrurier urgence montigny-lencoup', 'ouverture porte montigny-lencoup', 'serrurier 24h montigny-lencoup', 'dépannage serrure montigny-lencoup']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-Lencoup"
    citySlug="montigny-lencoup"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-Lencoup - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-lencoup", "serrurier urgence montigny-lencoup", "ouverture porte montigny-lencoup", "serrurier 24h montigny-lencoup", "dépannage serrure montigny-lencoup"]}
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