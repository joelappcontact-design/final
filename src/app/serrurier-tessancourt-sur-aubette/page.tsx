import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tessancourt-sur-Aubette',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tessancourt-sur-Aubette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tessancourt-sur-aubette', 'serrurier urgence tessancourt-sur-aubette', 'ouverture porte tessancourt-sur-aubette', 'serrurier 24h tessancourt-sur-aubette', 'dépannage serrure tessancourt-sur-aubette']
};

export default function Page() {
  return <CityPage 
    cityName="Tessancourt-sur-Aubette"
    citySlug="tessancourt-sur-aubette"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tessancourt-sur-Aubette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tessancourt-sur-aubette", "serrurier urgence tessancourt-sur-aubette", "ouverture porte tessancourt-sur-aubette", "serrurier 24h tessancourt-sur-aubette", "dépannage serrure tessancourt-sur-aubette"]}
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