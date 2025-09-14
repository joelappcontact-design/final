import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouy-le-Châtel',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouy-le-Châtel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouy-le-chatel', 'serrurier urgence jouy-le-chatel', 'ouverture porte jouy-le-chatel', 'serrurier 24h jouy-le-chatel', 'dépannage serrure jouy-le-chatel']
};

export default function Page() {
  return <CityPage 
    cityName="Jouy-le-Châtel"
    citySlug="jouy-le-chatel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouy-le-Châtel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouy-le-chatel", "serrurier urgence jouy-le-chatel", "ouverture porte jouy-le-chatel", "serrurier 24h jouy-le-chatel", "dépannage serrure jouy-le-chatel"]}
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