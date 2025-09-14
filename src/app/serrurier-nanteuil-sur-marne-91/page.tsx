import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanteuil-sur-Marne',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanteuil-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanteuil-sur-marne-91', 'serrurier urgence nanteuil-sur-marne-91', 'ouverture porte nanteuil-sur-marne-91', 'serrurier 24h nanteuil-sur-marne-91', 'dépannage serrure nanteuil-sur-marne-91']
};

export default function Page() {
  return <CityPage 
    cityName="Nanteuil-sur-Marne"
    citySlug="nanteuil-sur-marne-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanteuil-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanteuil-sur-marne-91", "serrurier urgence nanteuil-sur-marne-91", "ouverture porte nanteuil-sur-marne-91", "serrurier 24h nanteuil-sur-marne-91", "dépannage serrure nanteuil-sur-marne-91"]}
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