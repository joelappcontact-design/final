import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rubelles',
  department: '77',
  population: '2500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rubelles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rubelles', 'serrurier urgence rubelles', 'ouverture porte rubelles', 'serrurier 24h rubelles', 'dépannage serrure rubelles']
};

export default function Page() {
  return <CityPage 
    cityName="Rubelles"
    citySlug="rubelles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rubelles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rubelles", "serrurier urgence rubelles", "ouverture porte rubelles", "serrurier 24h rubelles", "dépannage serrure rubelles"]}
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