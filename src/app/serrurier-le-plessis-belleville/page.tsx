import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Plessis-Belleville',
  department: '93',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Plessis-Belleville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-plessis-belleville', 'serrurier urgence le-plessis-belleville', 'ouverture porte le-plessis-belleville', 'serrurier 24h le-plessis-belleville', 'dépannage serrure le-plessis-belleville']
};

export default function Page() {
  return <CityPage 
    cityName="Le Plessis-Belleville"
    citySlug="le-plessis-belleville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Plessis-Belleville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-plessis-belleville", "serrurier urgence le-plessis-belleville", "ouverture porte le-plessis-belleville", "serrurier 24h le-plessis-belleville", "dépannage serrure le-plessis-belleville"]}
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