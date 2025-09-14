import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guermantes',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guermantes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guermantes', 'serrurier urgence guermantes', 'ouverture porte guermantes', 'serrurier 24h guermantes', 'dépannage serrure guermantes']
};

export default function Page() {
  return <CityPage 
    cityName="Guermantes"
    citySlug="guermantes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guermantes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guermantes", "serrurier urgence guermantes", "ouverture porte guermantes", "serrurier 24h guermantes", "dépannage serrure guermantes"]}
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