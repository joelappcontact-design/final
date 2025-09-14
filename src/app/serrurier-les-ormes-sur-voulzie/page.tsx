import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Ormes-sur-Voulzie',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Ormes-sur-Voulzie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-ormes-sur-voulzie', 'serrurier urgence les-ormes-sur-voulzie', 'ouverture porte les-ormes-sur-voulzie', 'serrurier 24h les-ormes-sur-voulzie', 'dépannage serrure les-ormes-sur-voulzie']
};

export default function Page() {
  return <CityPage 
    cityName="Les Ormes-sur-Voulzie"
    citySlug="les-ormes-sur-voulzie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Ormes-sur-Voulzie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-ormes-sur-voulzie", "serrurier urgence les-ormes-sur-voulzie", "ouverture porte les-ormes-sur-voulzie", "serrurier 24h les-ormes-sur-voulzie", "dépannage serrure les-ormes-sur-voulzie"]}
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