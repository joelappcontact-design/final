import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Jean-les-Deux-Jumeaux',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Jean-les-Deux-Jumeaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-jean-les-deux-jumeaux', 'serrurier urgence saint-jean-les-deux-jumeaux', 'ouverture porte saint-jean-les-deux-jumeaux', 'serrurier 24h saint-jean-les-deux-jumeaux', 'dépannage serrure saint-jean-les-deux-jumeaux']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Jean-les-Deux-Jumeaux"
    citySlug="saint-jean-les-deux-jumeaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Jean-les-Deux-Jumeaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-jean-les-deux-jumeaux", "serrurier urgence saint-jean-les-deux-jumeaux", "ouverture porte saint-jean-les-deux-jumeaux", "serrurier 24h saint-jean-les-deux-jumeaux", "dépannage serrure saint-jean-les-deux-jumeaux"]}
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