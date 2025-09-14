import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Héricy',
  department: '77',
  population: '1400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Héricy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier hericy', 'serrurier urgence hericy', 'ouverture porte hericy', 'serrurier 24h hericy', 'dépannage serrure hericy']
};

export default function Page() {
  return <CityPage 
    cityName="Héricy"
    citySlug="hericy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Héricy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier hericy", "serrurier urgence hericy", "ouverture porte hericy", "serrurier 24h hericy", "dépannage serrure hericy"]}
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