import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Luzancy',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Luzancy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier luzancy', 'serrurier urgence luzancy', 'ouverture porte luzancy', 'serrurier 24h luzancy', 'dépannage serrure luzancy']
};

export default function Page() {
  return <CityPage 
    cityName="Luzancy"
    citySlug="luzancy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Luzancy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier luzancy", "serrurier urgence luzancy", "ouverture porte luzancy", "serrurier 24h luzancy", "dépannage serrure luzancy"]}
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