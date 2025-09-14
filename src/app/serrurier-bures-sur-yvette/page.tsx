import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bures-sur-Yvette',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bures-sur-Yvette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bures-sur-yvette', 'serrurier urgence bures-sur-yvette', 'ouverture porte bures-sur-yvette', 'serrurier 24h bures-sur-yvette', 'dépannage serrure bures-sur-yvette']
};

export default function Page() {
  return <CityPage 
    cityName="Bures-sur-Yvette"
    citySlug="bures-sur-yvette"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bures-sur-Yvette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bures-sur-yvette", "serrurier urgence bures-sur-yvette", "ouverture porte bures-sur-yvette", "serrurier 24h bures-sur-yvette", "dépannage serrure bures-sur-yvette"]}
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