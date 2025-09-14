import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Goussainville',
  department: '95',
  population: '33000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Goussainville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier goussainville', 'serrurier urgence goussainville', 'ouverture porte goussainville', 'serrurier 24h goussainville', 'dépannage serrure goussainville']
};

export default function Page() {
  return <CityPage 
    cityName="Goussainville"
    citySlug="goussainville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Goussainville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier goussainville", "serrurier urgence goussainville", "ouverture porte goussainville", "serrurier 24h goussainville", "dépannage serrure goussainville"]}
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