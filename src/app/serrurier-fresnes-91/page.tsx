import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fresnes',
  department: '91',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fresnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fresnes-91', 'serrurier urgence fresnes-91', 'ouverture porte fresnes-91', 'serrurier 24h fresnes-91', 'dépannage serrure fresnes-91']
};

export default function Page() {
  return <CityPage 
    cityName="Fresnes"
    citySlug="fresnes-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fresnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fresnes-91", "serrurier urgence fresnes-91", "ouverture porte fresnes-91", "serrurier 24h fresnes-91", "dépannage serrure fresnes-91"]}
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