import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Rémy-lès-Chevreuse',
  department: '78',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Rémy-lès-Chevreuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-remy-les-chevreuse', 'serrurier urgence saint-remy-les-chevreuse', 'ouverture porte saint-remy-les-chevreuse', 'serrurier 24h saint-remy-les-chevreuse', 'dépannage serrure saint-remy-les-chevreuse']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Rémy-lès-Chevreuse"
    citySlug="saint-remy-les-chevreuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Rémy-lès-Chevreuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-remy-les-chevreuse", "serrurier urgence saint-remy-les-chevreuse", "ouverture porte saint-remy-les-chevreuse", "serrurier 24h saint-remy-les-chevreuse", "dépannage serrure saint-remy-les-chevreuse"]}
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