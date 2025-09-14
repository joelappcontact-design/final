import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ecquevilly',
  department: '78',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ecquevilly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ecquevilly', 'serrurier urgence ecquevilly', 'ouverture porte ecquevilly', 'serrurier 24h ecquevilly', 'dépannage serrure ecquevilly']
};

export default function Page() {
  return <CityPage 
    cityName="Ecquevilly"
    citySlug="ecquevilly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ecquevilly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ecquevilly", "serrurier urgence ecquevilly", "ouverture porte ecquevilly", "serrurier 24h ecquevilly", "dépannage serrure ecquevilly"]}
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