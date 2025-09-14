import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marly-le-Roi',
  department: '78',
  population: '17000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marly-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marly-le-roi', 'serrurier urgence marly-le-roi', 'ouverture porte marly-le-roi', 'serrurier 24h marly-le-roi', 'dépannage serrure marly-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Marly-le-Roi"
    citySlug="marly-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marly-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marly-le-roi", "serrurier urgence marly-le-roi", "ouverture porte marly-le-roi", "serrurier 24h marly-le-roi", "dépannage serrure marly-le-roi"]}
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