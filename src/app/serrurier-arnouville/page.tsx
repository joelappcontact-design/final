import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arnouville',
  department: '95',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arnouville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arnouville', 'serrurier urgence arnouville', 'ouverture porte arnouville', 'serrurier 24h arnouville', 'dépannage serrure arnouville']
};

export default function Page() {
  return <CityPage 
    cityName="Arnouville"
    citySlug="arnouville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arnouville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arnouville", "serrurier urgence arnouville", "ouverture porte arnouville", "serrurier 24h arnouville", "dépannage serrure arnouville"]}
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