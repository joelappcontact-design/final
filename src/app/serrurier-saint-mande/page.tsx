import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Mandé',
  department: '94',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Mandé 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-mande', 'serrurier urgence saint-mande', 'ouverture porte saint-mande', 'serrurier 24h saint-mande', 'dépannage serrure saint-mande']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Mandé"
    citySlug="saint-mande"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Mandé - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-mande", "serrurier urgence saint-mande", "ouverture porte saint-mande", "serrurier 24h saint-mande", "dépannage serrure saint-mande"]}
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