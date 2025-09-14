import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Silly-la-Poterie',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Silly-la-Poterie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier silly-la-poterie', 'serrurier urgence silly-la-poterie', 'ouverture porte silly-la-poterie', 'serrurier 24h silly-la-poterie', 'dépannage serrure silly-la-poterie']
};

export default function Page() {
  return <CityPage 
    cityName="Silly-la-Poterie"
    citySlug="silly-la-poterie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Silly-la-Poterie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier silly-la-poterie", "serrurier urgence silly-la-poterie", "ouverture porte silly-la-poterie", "serrurier 24h silly-la-poterie", "dépannage serrure silly-la-poterie"]}
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