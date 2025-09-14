import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meudon-Sud',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meudon-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meudon-sud', 'serrurier urgence meudon-sud', 'ouverture porte meudon-sud', 'serrurier 24h meudon-sud', 'dépannage serrure meudon-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Meudon-Sud"
    citySlug="meudon-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meudon-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meudon-sud", "serrurier urgence meudon-sud", "ouverture porte meudon-sud", "serrurier 24h meudon-sud", "dépannage serrure meudon-sud"]}
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