import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courcouronnes',
  department: '91',
  population: '14000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courcouronnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courcouronnes', 'serrurier urgence courcouronnes', 'ouverture porte courcouronnes', 'serrurier 24h courcouronnes', 'dépannage serrure courcouronnes']
};

export default function Page() {
  return <CityPage 
    cityName="Courcouronnes"
    citySlug="courcouronnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courcouronnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courcouronnes", "serrurier urgence courcouronnes", "ouverture porte courcouronnes", "serrurier 24h courcouronnes", "dépannage serrure courcouronnes"]}
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