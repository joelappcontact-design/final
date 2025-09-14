import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Athis-Mons-Centre',
  department: '91',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Athis-Mons-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier athis-mons-centre', 'serrurier urgence athis-mons-centre', 'ouverture porte athis-mons-centre', 'serrurier 24h athis-mons-centre', 'dépannage serrure athis-mons-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Athis-Mons-Centre"
    citySlug="athis-mons-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Athis-Mons-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier athis-mons-centre", "serrurier urgence athis-mons-centre", "ouverture porte athis-mons-centre", "serrurier 24h athis-mons-centre", "dépannage serrure athis-mons-centre"]}
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