import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Verneuil-l\'Étang',
  department: '77',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Verneuil-l\'Étang 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier verneuil-letang', 'serrurier urgence verneuil-letang', 'ouverture porte verneuil-letang', 'serrurier 24h verneuil-letang', 'dépannage serrure verneuil-letang']
};

export default function Page() {
  return <CityPage 
    cityName="Verneuil-l\'Étang"
    citySlug="verneuil-letang"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Verneuil-l\'Étang - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier verneuil-letang", "serrurier urgence verneuil-letang", "ouverture porte verneuil-letang", "serrurier 24h verneuil-letang", "dépannage serrure verneuil-letang"]}
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