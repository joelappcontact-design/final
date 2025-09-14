import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Toussus-le-Noble',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Toussus-le-Noble 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier toussus-le-noble', 'serrurier urgence toussus-le-noble', 'ouverture porte toussus-le-noble', 'serrurier 24h toussus-le-noble', 'dépannage serrure toussus-le-noble']
};

export default function Page() {
  return <CityPage 
    cityName="Toussus-le-Noble"
    citySlug="toussus-le-noble"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Toussus-le-Noble - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier toussus-le-noble", "serrurier urgence toussus-le-noble", "ouverture porte toussus-le-noble", "serrurier 24h toussus-le-noble", "dépannage serrure toussus-le-noble"]}
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