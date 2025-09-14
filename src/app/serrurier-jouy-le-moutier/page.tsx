import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouy-le-Moutier',
  department: '95',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouy-le-Moutier 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouy-le-moutier', 'serrurier urgence jouy-le-moutier', 'ouverture porte jouy-le-moutier', 'serrurier 24h jouy-le-moutier', 'dépannage serrure jouy-le-moutier']
};

export default function Page() {
  return <CityPage 
    cityName="Jouy-le-Moutier"
    citySlug="jouy-le-moutier"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouy-le-Moutier - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouy-le-moutier", "serrurier urgence jouy-le-moutier", "ouverture porte jouy-le-moutier", "serrurier 24h jouy-le-moutier", "dépannage serrure jouy-le-moutier"]}
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