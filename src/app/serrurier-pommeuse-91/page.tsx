import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pommeuse',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pommeuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pommeuse-91', 'serrurier urgence pommeuse-91', 'ouverture porte pommeuse-91', 'serrurier 24h pommeuse-91', 'dépannage serrure pommeuse-91']
};

export default function Page() {
  return <CityPage 
    cityName="Pommeuse"
    citySlug="pommeuse-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pommeuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pommeuse-91", "serrurier urgence pommeuse-91", "ouverture porte pommeuse-91", "serrurier 24h pommeuse-91", "dépannage serrure pommeuse-91"]}
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