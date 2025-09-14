import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coulombs-en-Valois',
  department: '77',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coulombs-en-Valois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coulombs-en-valois', 'serrurier urgence coulombs-en-valois', 'ouverture porte coulombs-en-valois', 'serrurier 24h coulombs-en-valois', 'dépannage serrure coulombs-en-valois']
};

export default function Page() {
  return <CityPage 
    cityName="Coulombs-en-Valois"
    citySlug="coulombs-en-valois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coulombs-en-Valois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coulombs-en-valois", "serrurier urgence coulombs-en-valois", "ouverture porte coulombs-en-valois", "serrurier 24h coulombs-en-valois", "dépannage serrure coulombs-en-valois"]}
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