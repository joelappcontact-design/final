import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Persan',
  department: '95',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Persan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier persan-95', 'serrurier urgence persan-95', 'ouverture porte persan-95', 'serrurier 24h persan-95', 'dépannage serrure persan-95']
};

export default function Page() {
  return <CityPage 
    cityName="Persan"
    citySlug="persan-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Persan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier persan-95", "serrurier urgence persan-95", "ouverture porte persan-95", "serrurier 24h persan-95", "dépannage serrure persan-95"]}
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