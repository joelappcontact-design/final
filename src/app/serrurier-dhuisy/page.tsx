import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dhuisy',
  department: '77',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dhuisy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dhuisy', 'serrurier urgence dhuisy', 'ouverture porte dhuisy', 'serrurier 24h dhuisy', 'dépannage serrure dhuisy']
};

export default function Page() {
  return <CityPage 
    cityName="Dhuisy"
    citySlug="dhuisy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dhuisy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dhuisy", "serrurier urgence dhuisy", "ouverture porte dhuisy", "serrurier 24h dhuisy", "dépannage serrure dhuisy"]}
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