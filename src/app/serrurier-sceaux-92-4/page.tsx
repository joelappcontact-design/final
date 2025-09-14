import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sceaux',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sceaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sceaux-92-4', 'serrurier urgence sceaux-92-4', 'ouverture porte sceaux-92-4', 'serrurier 24h sceaux-92-4', 'dépannage serrure sceaux-92-4']
};

export default function Page() {
  return <CityPage 
    cityName="Sceaux"
    citySlug="sceaux-92-4"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sceaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sceaux-92-4", "serrurier urgence sceaux-92-4", "ouverture porte sceaux-92-4", "serrurier 24h sceaux-92-4", "dépannage serrure sceaux-92-4"]}
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