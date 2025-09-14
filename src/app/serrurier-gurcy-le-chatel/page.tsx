import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gurcy-le-Châtel',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gurcy-le-Châtel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gurcy-le-chatel', 'serrurier urgence gurcy-le-chatel', 'ouverture porte gurcy-le-chatel', 'serrurier 24h gurcy-le-chatel', 'dépannage serrure gurcy-le-chatel']
};

export default function Page() {
  return <CityPage 
    cityName="Gurcy-le-Châtel"
    citySlug="gurcy-le-chatel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gurcy-le-Châtel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gurcy-le-chatel", "serrurier urgence gurcy-le-chatel", "ouverture porte gurcy-le-chatel", "serrurier 24h gurcy-le-chatel", "dépannage serrure gurcy-le-chatel"]}
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