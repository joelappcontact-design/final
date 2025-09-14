import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-sous-Doue',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-sous-Doue 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-sous-doue', 'serrurier urgence saint-germain-sous-doue', 'ouverture porte saint-germain-sous-doue', 'serrurier 24h saint-germain-sous-doue', 'dépannage serrure saint-germain-sous-doue']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-sous-Doue"
    citySlug="saint-germain-sous-doue"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-sous-Doue - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-sous-doue", "serrurier urgence saint-germain-sous-doue", "ouverture porte saint-germain-sous-doue", "serrurier 24h saint-germain-sous-doue", "dépannage serrure saint-germain-sous-doue"]}
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