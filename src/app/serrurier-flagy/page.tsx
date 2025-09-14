import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Flagy',
  department: '77',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Flagy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier flagy', 'serrurier urgence flagy', 'ouverture porte flagy', 'serrurier 24h flagy', 'dépannage serrure flagy']
};

export default function Page() {
  return <CityPage 
    cityName="Flagy"
    citySlug="flagy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Flagy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier flagy", "serrurier urgence flagy", "ouverture porte flagy", "serrurier 24h flagy", "dépannage serrure flagy"]}
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