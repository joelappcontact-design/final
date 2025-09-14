import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Écrennes',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Écrennes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-ecrennes', 'serrurier urgence les-ecrennes', 'ouverture porte les-ecrennes', 'serrurier 24h les-ecrennes', 'dépannage serrure les-ecrennes']
};

export default function Page() {
  return <CityPage 
    cityName="Les Écrennes"
    citySlug="les-ecrennes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Écrennes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-ecrennes", "serrurier urgence les-ecrennes", "ouverture porte les-ecrennes", "serrurier 24h les-ecrennes", "dépannage serrure les-ecrennes"]}
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