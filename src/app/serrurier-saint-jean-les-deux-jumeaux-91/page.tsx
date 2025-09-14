import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Jean-les-Deux-Jumeaux',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Jean-les-Deux-Jumeaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-jean-les-deux-jumeaux-91', 'serrurier urgence saint-jean-les-deux-jumeaux-91', 'ouverture porte saint-jean-les-deux-jumeaux-91', 'serrurier 24h saint-jean-les-deux-jumeaux-91', 'dépannage serrure saint-jean-les-deux-jumeaux-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Jean-les-Deux-Jumeaux"
    citySlug="saint-jean-les-deux-jumeaux-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Jean-les-Deux-Jumeaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-jean-les-deux-jumeaux-91", "serrurier urgence saint-jean-les-deux-jumeaux-91", "ouverture porte saint-jean-les-deux-jumeaux-91", "serrurier 24h saint-jean-les-deux-jumeaux-91", "dépannage serrure saint-jean-les-deux-jumeaux-91"]}
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