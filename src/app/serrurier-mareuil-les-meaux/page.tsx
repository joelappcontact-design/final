import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mareuil-lès-Meaux',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mareuil-lès-Meaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mareuil-les-meaux', 'serrurier urgence mareuil-les-meaux', 'ouverture porte mareuil-les-meaux', 'serrurier 24h mareuil-les-meaux', 'dépannage serrure mareuil-les-meaux']
};

export default function Page() {
  return <CityPage 
    cityName="Mareuil-lès-Meaux"
    citySlug="mareuil-les-meaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mareuil-lès-Meaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mareuil-les-meaux", "serrurier urgence mareuil-les-meaux", "ouverture porte mareuil-les-meaux", "serrurier 24h mareuil-les-meaux", "dépannage serrure mareuil-les-meaux"]}
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