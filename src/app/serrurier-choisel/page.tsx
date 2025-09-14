import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Choisel',
  department: '78',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Choisel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier choisel', 'serrurier urgence choisel', 'ouverture porte choisel', 'serrurier 24h choisel', 'dépannage serrure choisel']
};

export default function Page() {
  return <CityPage 
    cityName="Choisel"
    citySlug="choisel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Choisel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier choisel", "serrurier urgence choisel", "ouverture porte choisel", "serrurier 24h choisel", "dépannage serrure choisel"]}
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