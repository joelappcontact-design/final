import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Champmotteux',
  department: '91',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Champmotteux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier champmotteux', 'serrurier urgence champmotteux', 'ouverture porte champmotteux', 'serrurier 24h champmotteux', 'dépannage serrure champmotteux']
};

export default function Page() {
  return <CityPage 
    cityName="Champmotteux"
    citySlug="champmotteux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Champmotteux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier champmotteux", "serrurier urgence champmotteux", "ouverture porte champmotteux", "serrurier 24h champmotteux", "dépannage serrure champmotteux"]}
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