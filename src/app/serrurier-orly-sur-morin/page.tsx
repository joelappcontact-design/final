import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orly-sur-Morin',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orly-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orly-sur-morin', 'serrurier urgence orly-sur-morin', 'ouverture porte orly-sur-morin', 'serrurier 24h orly-sur-morin', 'dépannage serrure orly-sur-morin']
};

export default function Page() {
  return <CityPage 
    cityName="Orly-sur-Morin"
    citySlug="orly-sur-morin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orly-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orly-sur-morin", "serrurier urgence orly-sur-morin", "ouverture porte orly-sur-morin", "serrurier 24h orly-sur-morin", "dépannage serrure orly-sur-morin"]}
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