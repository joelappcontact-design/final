import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Quincy-Voisins',
  department: '77',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Quincy-Voisins 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier quincy-voisins', 'serrurier urgence quincy-voisins', 'ouverture porte quincy-voisins', 'serrurier 24h quincy-voisins', 'dépannage serrure quincy-voisins']
};

export default function Page() {
  return <CityPage 
    cityName="Quincy-Voisins"
    citySlug="quincy-voisins"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Quincy-Voisins - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier quincy-voisins", "serrurier urgence quincy-voisins", "ouverture porte quincy-voisins", "serrurier 24h quincy-voisins", "dépannage serrure quincy-voisins"]}
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