import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Loup-de-Naud',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Loup-de-Naud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-loup-de-naud', 'serrurier urgence saint-loup-de-naud', 'ouverture porte saint-loup-de-naud', 'serrurier 24h saint-loup-de-naud', 'dépannage serrure saint-loup-de-naud']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Loup-de-Naud"
    citySlug="saint-loup-de-naud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Loup-de-Naud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-loup-de-naud", "serrurier urgence saint-loup-de-naud", "ouverture porte saint-loup-de-naud", "serrurier 24h saint-loup-de-naud", "dépannage serrure saint-loup-de-naud"]}
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