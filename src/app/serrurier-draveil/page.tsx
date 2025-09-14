import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Draveil',
  department: '91',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Draveil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier draveil', 'serrurier urgence draveil', 'ouverture porte draveil', 'serrurier 24h draveil', 'dépannage serrure draveil']
};

export default function Page() {
  return <CityPage 
    cityName="Draveil"
    citySlug="draveil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Draveil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier draveil", "serrurier urgence draveil", "ouverture porte draveil", "serrurier 24h draveil", "dépannage serrure draveil"]}
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