import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guignes',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guignes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guignes-91', 'serrurier urgence guignes-91', 'ouverture porte guignes-91', 'serrurier 24h guignes-91', 'dépannage serrure guignes-91']
};

export default function Page() {
  return <CityPage 
    cityName="Guignes"
    citySlug="guignes-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guignes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guignes-91", "serrurier urgence guignes-91", "ouverture porte guignes-91", "serrurier 24h guignes-91", "dépannage serrure guignes-91"]}
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