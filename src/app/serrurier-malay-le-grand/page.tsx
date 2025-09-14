import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Malay-le-Grand',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Malay-le-Grand 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier malay-le-grand', 'serrurier urgence malay-le-grand', 'ouverture porte malay-le-grand', 'serrurier 24h malay-le-grand', 'dépannage serrure malay-le-grand']
};

export default function Page() {
  return <CityPage 
    cityName="Malay-le-Grand"
    citySlug="malay-le-grand"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Malay-le-Grand - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier malay-le-grand", "serrurier urgence malay-le-grand", "ouverture porte malay-le-grand", "serrurier 24h malay-le-grand", "dépannage serrure malay-le-grand"]}
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