import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ocquerre',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ocquerre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ocquerre', 'serrurier urgence ocquerre', 'ouverture porte ocquerre', 'serrurier 24h ocquerre', 'dépannage serrure ocquerre']
};

export default function Page() {
  return <CityPage 
    cityName="Ocquerre"
    citySlug="ocquerre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ocquerre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ocquerre", "serrurier urgence ocquerre", "ouverture porte ocquerre", "serrurier 24h ocquerre", "dépannage serrure ocquerre"]}
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