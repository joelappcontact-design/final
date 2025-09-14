import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrelaye',
  department: '95',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrelaye 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrelaye', 'serrurier urgence pierrelaye', 'ouverture porte pierrelaye', 'serrurier 24h pierrelaye', 'dépannage serrure pierrelaye']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrelaye"
    citySlug="pierrelaye"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrelaye - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrelaye", "serrurier urgence pierrelaye", "ouverture porte pierrelaye", "serrurier 24h pierrelaye", "dépannage serrure pierrelaye"]}
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