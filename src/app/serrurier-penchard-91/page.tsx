import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Penchard',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Penchard 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier penchard-91', 'serrurier urgence penchard-91', 'ouverture porte penchard-91', 'serrurier 24h penchard-91', 'dépannage serrure penchard-91']
};

export default function Page() {
  return <CityPage 
    cityName="Penchard"
    citySlug="penchard-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Penchard - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier penchard-91", "serrurier urgence penchard-91", "ouverture porte penchard-91", "serrurier 24h penchard-91", "dépannage serrure penchard-91"]}
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