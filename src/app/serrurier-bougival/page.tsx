import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bougival',
  department: '78',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bougival 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bougival', 'serrurier urgence bougival', 'ouverture porte bougival', 'serrurier 24h bougival', 'dépannage serrure bougival']
};

export default function Page() {
  return <CityPage 
    cityName="Bougival"
    citySlug="bougival"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bougival - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bougival", "serrurier urgence bougival", "ouverture porte bougival", "serrurier 24h bougival", "dépannage serrure bougival"]}
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