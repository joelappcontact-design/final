import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Conches-sur-Gondoire',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Conches-sur-Gondoire 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier conches-sur-gondoire', 'serrurier urgence conches-sur-gondoire', 'ouverture porte conches-sur-gondoire', 'serrurier 24h conches-sur-gondoire', 'dépannage serrure conches-sur-gondoire']
};

export default function Page() {
  return <CityPage 
    cityName="Conches-sur-Gondoire"
    citySlug="conches-sur-gondoire"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Conches-sur-Gondoire - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier conches-sur-gondoire", "serrurier urgence conches-sur-gondoire", "ouverture porte conches-sur-gondoire", "serrurier 24h conches-sur-gondoire", "dépannage serrure conches-sur-gondoire"]}
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