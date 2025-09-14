import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villecresnes',
  department: '94',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villecresnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villecresnes', 'serrurier urgence villecresnes', 'ouverture porte villecresnes', 'serrurier 24h villecresnes', 'dépannage serrure villecresnes']
};

export default function Page() {
  return <CityPage 
    cityName="Villecresnes"
    citySlug="villecresnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villecresnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villecresnes", "serrurier urgence villecresnes", "ouverture porte villecresnes", "serrurier 24h villecresnes", "dépannage serrure villecresnes"]}
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