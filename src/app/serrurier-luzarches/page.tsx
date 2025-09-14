import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Luzarches',
  department: '95',
  population: '4500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Luzarches 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier luzarches', 'serrurier urgence luzarches', 'ouverture porte luzarches', 'serrurier 24h luzarches', 'dépannage serrure luzarches']
};

export default function Page() {
  return <CityPage 
    cityName="Luzarches"
    citySlug="luzarches"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Luzarches - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier luzarches", "serrurier urgence luzarches", "ouverture porte luzarches", "serrurier 24h luzarches", "dépannage serrure luzarches"]}
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