import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Houville-la-Branche',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Houville-la-Branche 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier houville-la-branche', 'serrurier urgence houville-la-branche', 'ouverture porte houville-la-branche', 'serrurier 24h houville-la-branche', 'dépannage serrure houville-la-branche']
};

export default function Page() {
  return <CityPage 
    cityName="Houville-la-Branche"
    citySlug="houville-la-branche"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Houville-la-Branche - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier houville-la-branche", "serrurier urgence houville-la-branche", "ouverture porte houville-la-branche", "serrurier 24h houville-la-branche", "dépannage serrure houville-la-branche"]}
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