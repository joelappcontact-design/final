import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Etréchy',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Etréchy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier etrechy', 'serrurier urgence etrechy', 'ouverture porte etrechy', 'serrurier 24h etrechy', 'dépannage serrure etrechy']
};

export default function Page() {
  return <CityPage 
    cityName="Etréchy"
    citySlug="etrechy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Etréchy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier etrechy", "serrurier urgence etrechy", "ouverture porte etrechy", "serrurier 24h etrechy", "dépannage serrure etrechy"]}
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