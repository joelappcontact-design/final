import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ange-le-Viel',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ange-le-Viel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ange-le-viel-91', 'serrurier urgence saint-ange-le-viel-91', 'ouverture porte saint-ange-le-viel-91', 'serrurier 24h saint-ange-le-viel-91', 'dépannage serrure saint-ange-le-viel-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ange-le-Viel"
    citySlug="saint-ange-le-viel-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ange-le-Viel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ange-le-viel-91", "serrurier urgence saint-ange-le-viel-91", "ouverture porte saint-ange-le-viel-91", "serrurier 24h saint-ange-le-viel-91", "dépannage serrure saint-ange-le-viel-91"]}
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