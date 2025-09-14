import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rouvres',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rouvres 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rouvres', 'serrurier urgence rouvres', 'ouverture porte rouvres', 'serrurier 24h rouvres', 'dépannage serrure rouvres']
};

export default function Page() {
  return <CityPage 
    cityName="Rouvres"
    citySlug="rouvres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rouvres - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rouvres", "serrurier urgence rouvres", "ouverture porte rouvres", "serrurier 24h rouvres", "dépannage serrure rouvres"]}
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