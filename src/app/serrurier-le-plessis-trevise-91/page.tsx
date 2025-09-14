import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Plessis-Trévise',
  department: '91',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Plessis-Trévise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-plessis-trevise-91', 'serrurier urgence le-plessis-trevise-91', 'ouverture porte le-plessis-trevise-91', 'serrurier 24h le-plessis-trevise-91', 'dépannage serrure le-plessis-trevise-91']
};

export default function Page() {
  return <CityPage 
    cityName="Le Plessis-Trévise"
    citySlug="le-plessis-trevise-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Plessis-Trévise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-plessis-trevise-91", "serrurier urgence le-plessis-trevise-91", "ouverture porte le-plessis-trevise-91", "serrurier 24h le-plessis-trevise-91", "dépannage serrure le-plessis-trevise-91"]}
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