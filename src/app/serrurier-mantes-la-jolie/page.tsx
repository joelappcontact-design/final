import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mantes-la-Jolie',
  department: '92',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mantes-la-Jolie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mantes-la-jolie', 'serrurier urgence mantes-la-jolie', 'ouverture porte mantes-la-jolie', 'serrurier 24h mantes-la-jolie', 'dépannage serrure mantes-la-jolie']
};

export default function Page() {
  return <CityPage 
    cityName="Mantes-la-Jolie"
    citySlug="mantes-la-jolie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mantes-la-Jolie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mantes-la-jolie", "serrurier urgence mantes-la-jolie", "ouverture porte mantes-la-jolie", "serrurier 24h mantes-la-jolie", "dépannage serrure mantes-la-jolie"]}
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