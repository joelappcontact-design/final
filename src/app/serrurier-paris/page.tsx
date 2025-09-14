import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Paris',
  department: '75',
  population: '2165423',
  priority: 'critique',
  zones: ['1er arrondissement', '2e arrondissement', '3e arrondissement', '4e arrondissement', '5e arrondissement', '6e arrondissement', '7e arrondissement', '8e arrondissement', '9e arrondissement', '10e arrondissement', '11e arrondissement', '12e arrondissement', '13e arrondissement', '14e arrondissement', '15e arrondissement', '16e arrondissement', '17e arrondissement', '18e arrondissement', '19e arrondissement', '20e arrondissement'],
  description: 'Serrurier d\'urgence Paris 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier paris', 'serrurier urgence paris', 'ouverture porte paris', 'serrurier 24h paris', 'dépannage serrure paris']
};

export default function Page() {
  return <CityPage 
    cityName="Paris"
    citySlug="paris"
    zones={['1er arrondissement', '2e arrondissement', '3e arrondissement', '4e arrondissement', '5e arrondissement', '6e arrondissement', '7e arrondissement', '8e arrondissement', '9e arrondissement', '10e arrondissement', '11e arrondissement', '12e arrondissement', '13e arrondissement', '14e arrondissement', '15e arrondissement', '16e arrondissement', '17e arrondissement', '18e arrondissement', '19e arrondissement', '20e arrondissement']}
    description="Paris - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier paris", "serrurier urgence paris", "ouverture porte paris", "serrurier 24h paris", "dépannage serrure paris"]}
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