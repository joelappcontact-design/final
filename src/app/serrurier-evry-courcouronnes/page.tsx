import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Evry-Courcouronnes',
  department: '91',
  population: '70000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Evry-Courcouronnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier evry-courcouronnes', 'serrurier urgence evry-courcouronnes', 'ouverture porte evry-courcouronnes', 'serrurier 24h evry-courcouronnes', 'dépannage serrure evry-courcouronnes']
};

export default function Page() {
  return <CityPage 
    cityName="Evry-Courcouronnes"
    citySlug="evry-courcouronnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Evry-Courcouronnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier evry-courcouronnes", "serrurier urgence evry-courcouronnes", "ouverture porte evry-courcouronnes", "serrurier 24h evry-courcouronnes", "dépannage serrure evry-courcouronnes"]}
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