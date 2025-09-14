import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Plessis-Trévise',
  department: '94',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Plessis-Trévise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-plessis-trevise', 'serrurier urgence le-plessis-trevise', 'ouverture porte le-plessis-trevise', 'serrurier 24h le-plessis-trevise', 'dépannage serrure le-plessis-trevise']
};

export default function Page() {
  return <CityPage 
    cityName="Le Plessis-Trévise"
    citySlug="le-plessis-trevise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Plessis-Trévise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-plessis-trevise", "serrurier urgence le-plessis-trevise", "ouverture porte le-plessis-trevise", "serrurier 24h le-plessis-trevise", "dépannage serrure le-plessis-trevise"]}
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