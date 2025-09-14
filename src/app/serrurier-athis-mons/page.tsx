import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Athis-Mons',
  department: '91',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Athis-Mons 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier athis-mons', 'serrurier urgence athis-mons', 'ouverture porte athis-mons', 'serrurier 24h athis-mons', 'dépannage serrure athis-mons']
};

export default function Page() {
  return <CityPage 
    cityName="Athis-Mons"
    citySlug="athis-mons"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Athis-Mons - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier athis-mons", "serrurier urgence athis-mons", "ouverture porte athis-mons", "serrurier 24h athis-mons", "dépannage serrure athis-mons"]}
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