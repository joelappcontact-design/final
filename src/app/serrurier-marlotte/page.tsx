import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marlotte',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marlotte 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marlotte', 'serrurier urgence marlotte', 'ouverture porte marlotte', 'serrurier 24h marlotte', 'dépannage serrure marlotte']
};

export default function Page() {
  return <CityPage 
    cityName="Marlotte"
    citySlug="marlotte"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marlotte - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marlotte", "serrurier urgence marlotte", "ouverture porte marlotte", "serrurier 24h marlotte", "dépannage serrure marlotte"]}
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