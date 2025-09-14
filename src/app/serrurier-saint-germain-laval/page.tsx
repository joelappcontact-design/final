import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-Laval',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-Laval 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-laval', 'serrurier urgence saint-germain-laval', 'ouverture porte saint-germain-laval', 'serrurier 24h saint-germain-laval', 'dépannage serrure saint-germain-laval']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-Laval"
    citySlug="saint-germain-laval"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-Laval - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-laval", "serrurier urgence saint-germain-laval", "ouverture porte saint-germain-laval", "serrurier 24h saint-germain-laval", "dépannage serrure saint-germain-laval"]}
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