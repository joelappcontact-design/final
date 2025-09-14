import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Plessis-Robinson',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Plessis-Robinson 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-plessis-robinson', 'serrurier urgence le-plessis-robinson', 'ouverture porte le-plessis-robinson', 'serrurier 24h le-plessis-robinson', 'dépannage serrure le-plessis-robinson']
};

export default function Page() {
  return <CityPage 
    cityName="Le Plessis-Robinson"
    citySlug="le-plessis-robinson"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Plessis-Robinson - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-plessis-robinson", "serrurier urgence le-plessis-robinson", "ouverture porte le-plessis-robinson", "serrurier 24h le-plessis-robinson", "dépannage serrure le-plessis-robinson"]}
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