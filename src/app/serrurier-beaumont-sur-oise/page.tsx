import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Beaumont-sur-Oise',
  department: '95',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Beaumont-sur-Oise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier beaumont-sur-oise', 'serrurier urgence beaumont-sur-oise', 'ouverture porte beaumont-sur-oise', 'serrurier 24h beaumont-sur-oise', 'dépannage serrure beaumont-sur-oise']
};

export default function Page() {
  return <CityPage 
    cityName="Beaumont-sur-Oise"
    citySlug="beaumont-sur-oise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Beaumont-sur-Oise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier beaumont-sur-oise", "serrurier urgence beaumont-sur-oise", "ouverture porte beaumont-sur-oise", "serrurier 24h beaumont-sur-oise", "dépannage serrure beaumont-sur-oise"]}
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