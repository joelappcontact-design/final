import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Esmans',
  department: '77',
  population: '900',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Esmans 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier esmans', 'serrurier urgence esmans', 'ouverture porte esmans', 'serrurier 24h esmans', 'dépannage serrure esmans']
};

export default function Page() {
  return <CityPage 
    cityName="Esmans"
    citySlug="esmans"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Esmans - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier esmans", "serrurier urgence esmans", "ouverture porte esmans", "serrurier 24h esmans", "dépannage serrure esmans"]}
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