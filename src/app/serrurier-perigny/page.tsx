import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Périgny',
  department: '94',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Périgny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier perigny', 'serrurier urgence perigny', 'ouverture porte perigny', 'serrurier 24h perigny', 'dépannage serrure perigny']
};

export default function Page() {
  return <CityPage 
    cityName="Périgny"
    citySlug="perigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Périgny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier perigny", "serrurier urgence perigny", "ouverture porte perigny", "serrurier 24h perigny", "dépannage serrure perigny"]}
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