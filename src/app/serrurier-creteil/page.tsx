import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Créteil',
  department: '94',
  population: '92000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Créteil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier creteil', 'serrurier urgence creteil', 'ouverture porte creteil', 'serrurier 24h creteil', 'dépannage serrure creteil']
};

export default function Page() {
  return <CityPage 
    cityName="Créteil"
    citySlug="creteil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Créteil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier creteil", "serrurier urgence creteil", "ouverture porte creteil", "serrurier 24h creteil", "dépannage serrure creteil"]}
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