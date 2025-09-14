import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lommoye',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lommoye 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lommoye', 'serrurier urgence lommoye', 'ouverture porte lommoye', 'serrurier 24h lommoye', 'dépannage serrure lommoye']
};

export default function Page() {
  return <CityPage 
    cityName="Lommoye"
    citySlug="lommoye"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lommoye - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lommoye", "serrurier urgence lommoye", "ouverture porte lommoye", "serrurier 24h lommoye", "dépannage serrure lommoye"]}
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