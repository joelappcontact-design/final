import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villepinte',
  department: '93',
  population: '37000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villepinte 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villepinte', 'serrurier urgence villepinte', 'ouverture porte villepinte', 'serrurier 24h villepinte', 'dépannage serrure villepinte']
};

export default function Page() {
  return <CityPage 
    cityName="Villepinte"
    citySlug="villepinte"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villepinte - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villepinte", "serrurier urgence villepinte", "ouverture porte villepinte", "serrurier 24h villepinte", "dépannage serrure villepinte"]}
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