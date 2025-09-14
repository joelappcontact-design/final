import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-sous-Doue',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-sous-Doue 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-sous-doue-91', 'serrurier urgence saint-germain-sous-doue-91', 'ouverture porte saint-germain-sous-doue-91', 'serrurier 24h saint-germain-sous-doue-91', 'dépannage serrure saint-germain-sous-doue-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-sous-Doue"
    citySlug="saint-germain-sous-doue-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-sous-Doue - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-sous-doue-91", "serrurier urgence saint-germain-sous-doue-91", "ouverture porte saint-germain-sous-doue-91", "serrurier 24h saint-germain-sous-doue-91", "dépannage serrure saint-germain-sous-doue-91"]}
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