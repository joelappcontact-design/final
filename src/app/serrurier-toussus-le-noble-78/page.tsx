import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Toussus-le-Noble',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Toussus-le-Noble 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier toussus-le-noble-78', 'serrurier urgence toussus-le-noble-78', 'ouverture porte toussus-le-noble-78', 'serrurier 24h toussus-le-noble-78', 'dépannage serrure toussus-le-noble-78']
};

export default function Page() {
  return <CityPage 
    cityName="Toussus-le-Noble"
    citySlug="toussus-le-noble-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Toussus-le-Noble - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier toussus-le-noble-78", "serrurier urgence toussus-le-noble-78", "ouverture porte toussus-le-noble-78", "serrurier 24h toussus-le-noble-78", "dépannage serrure toussus-le-noble-78"]}
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