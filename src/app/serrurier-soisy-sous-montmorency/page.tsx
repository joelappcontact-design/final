import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Soisy-sous-Montmorency',
  department: '95',
  population: '18000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Soisy-sous-Montmorency 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier soisy-sous-montmorency', 'serrurier urgence soisy-sous-montmorency', 'ouverture porte soisy-sous-montmorency', 'serrurier 24h soisy-sous-montmorency', 'dépannage serrure soisy-sous-montmorency']
};

export default function Page() {
  return <CityPage 
    cityName="Soisy-sous-Montmorency"
    citySlug="soisy-sous-montmorency"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Soisy-sous-Montmorency - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier soisy-sous-montmorency", "serrurier urgence soisy-sous-montmorency", "ouverture porte soisy-sous-montmorency", "serrurier 24h soisy-sous-montmorency", "dépannage serrure soisy-sous-montmorency"]}
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