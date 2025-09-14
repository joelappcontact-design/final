import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Thoiry',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Thoiry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier thoiry', 'serrurier urgence thoiry', 'ouverture porte thoiry', 'serrurier 24h thoiry', 'dépannage serrure thoiry']
};

export default function Page() {
  return <CityPage 
    cityName="Thoiry"
    citySlug="thoiry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Thoiry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier thoiry", "serrurier urgence thoiry", "ouverture porte thoiry", "serrurier 24h thoiry", "dépannage serrure thoiry"]}
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