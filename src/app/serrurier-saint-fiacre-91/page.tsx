import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Fiacre',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Fiacre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-fiacre-91', 'serrurier urgence saint-fiacre-91', 'ouverture porte saint-fiacre-91', 'serrurier 24h saint-fiacre-91', 'dépannage serrure saint-fiacre-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Fiacre"
    citySlug="saint-fiacre-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Fiacre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-fiacre-91", "serrurier urgence saint-fiacre-91", "ouverture porte saint-fiacre-91", "serrurier 24h saint-fiacre-91", "dépannage serrure saint-fiacre-91"]}
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