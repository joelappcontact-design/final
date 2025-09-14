import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrelaye',
  department: '95',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrelaye 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrelaye-95', 'serrurier urgence pierrelaye-95', 'ouverture porte pierrelaye-95', 'serrurier 24h pierrelaye-95', 'dépannage serrure pierrelaye-95']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrelaye"
    citySlug="pierrelaye-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrelaye - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrelaye-95", "serrurier urgence pierrelaye-95", "ouverture porte pierrelaye-95", "serrurier 24h pierrelaye-95", "dépannage serrure pierrelaye-95"]}
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