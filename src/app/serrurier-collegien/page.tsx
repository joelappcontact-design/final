import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Collégien',
  department: '77',
  population: '3500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Collégien 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier collegien', 'serrurier urgence collegien', 'ouverture porte collegien', 'serrurier 24h collegien', 'dépannage serrure collegien']
};

export default function Page() {
  return <CityPage 
    cityName="Collégien"
    citySlug="collegien"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Collégien - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier collegien", "serrurier urgence collegien", "ouverture porte collegien", "serrurier 24h collegien", "dépannage serrure collegien"]}
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