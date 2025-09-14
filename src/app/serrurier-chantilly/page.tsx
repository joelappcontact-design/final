import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chantilly',
  department: '95',
  population: '12000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chantilly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chantilly', 'serrurier urgence chantilly', 'ouverture porte chantilly', 'serrurier 24h chantilly', 'dépannage serrure chantilly']
};

export default function Page() {
  return <CityPage 
    cityName="Chantilly"
    citySlug="chantilly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chantilly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chantilly", "serrurier urgence chantilly", "ouverture porte chantilly", "serrurier 24h chantilly", "dépannage serrure chantilly"]}
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