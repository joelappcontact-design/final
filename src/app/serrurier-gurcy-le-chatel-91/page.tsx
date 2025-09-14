import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gurcy-le-Châtel',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gurcy-le-Châtel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gurcy-le-chatel-91', 'serrurier urgence gurcy-le-chatel-91', 'ouverture porte gurcy-le-chatel-91', 'serrurier 24h gurcy-le-chatel-91', 'dépannage serrure gurcy-le-chatel-91']
};

export default function Page() {
  return <CityPage 
    cityName="Gurcy-le-Châtel"
    citySlug="gurcy-le-chatel-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gurcy-le-Châtel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gurcy-le-chatel-91", "serrurier urgence gurcy-le-chatel-91", "ouverture porte gurcy-le-chatel-91", "serrurier 24h gurcy-le-chatel-91", "dépannage serrure gurcy-le-chatel-91"]}
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