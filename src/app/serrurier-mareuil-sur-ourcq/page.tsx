import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mareuil-sur-Ourcq',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mareuil-sur-Ourcq 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mareuil-sur-ourcq', 'serrurier urgence mareuil-sur-ourcq', 'ouverture porte mareuil-sur-ourcq', 'serrurier 24h mareuil-sur-ourcq', 'dépannage serrure mareuil-sur-ourcq']
};

export default function Page() {
  return <CityPage 
    cityName="Mareuil-sur-Ourcq"
    citySlug="mareuil-sur-ourcq"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mareuil-sur-Ourcq - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mareuil-sur-ourcq", "serrurier urgence mareuil-sur-ourcq", "ouverture porte mareuil-sur-ourcq", "serrurier 24h mareuil-sur-ourcq", "dépannage serrure mareuil-sur-ourcq"]}
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