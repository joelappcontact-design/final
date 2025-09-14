import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanteuil-lès-Meaux',
  department: '91',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanteuil-lès-Meaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanteuil-les-meaux-91', 'serrurier urgence nanteuil-les-meaux-91', 'ouverture porte nanteuil-les-meaux-91', 'serrurier 24h nanteuil-les-meaux-91', 'dépannage serrure nanteuil-les-meaux-91']
};

export default function Page() {
  return <CityPage 
    cityName="Nanteuil-lès-Meaux"
    citySlug="nanteuil-les-meaux-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanteuil-lès-Meaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanteuil-les-meaux-91", "serrurier urgence nanteuil-les-meaux-91", "ouverture porte nanteuil-les-meaux-91", "serrurier 24h nanteuil-les-meaux-91", "dépannage serrure nanteuil-les-meaux-91"]}
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