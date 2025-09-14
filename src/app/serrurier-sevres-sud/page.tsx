import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sèvres-Sud',
  department: '92',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sèvres-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sevres-sud', 'serrurier urgence sevres-sud', 'ouverture porte sevres-sud', 'serrurier 24h sevres-sud', 'dépannage serrure sevres-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Sèvres-Sud"
    citySlug="sevres-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sèvres-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sevres-sud", "serrurier urgence sevres-sud", "ouverture porte sevres-sud", "serrurier 24h sevres-sud", "dépannage serrure sevres-sud"]}
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