import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ange-le-Viel',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ange-le-Viel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ange-le-viel', 'serrurier urgence saint-ange-le-viel', 'ouverture porte saint-ange-le-viel', 'serrurier 24h saint-ange-le-viel', 'dépannage serrure saint-ange-le-viel']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ange-le-Viel"
    citySlug="saint-ange-le-viel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ange-le-Viel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ange-le-viel", "serrurier urgence saint-ange-le-viel", "ouverture porte saint-ange-le-viel", "serrurier 24h saint-ange-le-viel", "dépannage serrure saint-ange-le-viel"]}
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