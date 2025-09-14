import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Méry',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Méry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-mery-91', 'serrurier urgence saint-mery-91', 'ouverture porte saint-mery-91', 'serrurier 24h saint-mery-91', 'dépannage serrure saint-mery-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Méry"
    citySlug="saint-mery-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Méry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-mery-91", "serrurier urgence saint-mery-91", "ouverture porte saint-mery-91", "serrurier 24h saint-mery-91", "dépannage serrure saint-mery-91"]}
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