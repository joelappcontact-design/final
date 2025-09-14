import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gressy',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gressy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gressy-91', 'serrurier urgence gressy-91', 'ouverture porte gressy-91', 'serrurier 24h gressy-91', 'dépannage serrure gressy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Gressy"
    citySlug="gressy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gressy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gressy-91", "serrurier urgence gressy-91", "ouverture porte gressy-91", "serrurier 24h gressy-91", "dépannage serrure gressy-91"]}
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