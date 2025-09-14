import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mantes-la-Ville',
  department: '78',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mantes-la-Ville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mantes-la-ville', 'serrurier urgence mantes-la-ville', 'ouverture porte mantes-la-ville', 'serrurier 24h mantes-la-ville', 'dépannage serrure mantes-la-ville']
};

export default function Page() {
  return <CityPage 
    cityName="Mantes-la-Ville"
    citySlug="mantes-la-ville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mantes-la-Ville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mantes-la-ville", "serrurier urgence mantes-la-ville", "ouverture porte mantes-la-ville", "serrurier 24h mantes-la-ville", "dépannage serrure mantes-la-ville"]}
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