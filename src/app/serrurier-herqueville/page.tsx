import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Herqueville',
  department: '78',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Herqueville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier herqueville', 'serrurier urgence herqueville', 'ouverture porte herqueville', 'serrurier 24h herqueville', 'dépannage serrure herqueville']
};

export default function Page() {
  return <CityPage 
    cityName="Herqueville"
    citySlug="herqueville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Herqueville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier herqueville", "serrurier urgence herqueville", "ouverture porte herqueville", "serrurier 24h herqueville", "dépannage serrure herqueville"]}
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