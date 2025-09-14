import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Forges-les-Bains',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Forges-les-Bains 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier forges-les-bains', 'serrurier urgence forges-les-bains', 'ouverture porte forges-les-bains', 'serrurier 24h forges-les-bains', 'dépannage serrure forges-les-bains']
};

export default function Page() {
  return <CityPage 
    cityName="Forges-les-Bains"
    citySlug="forges-les-bains"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Forges-les-Bains - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier forges-les-bains", "serrurier urgence forges-les-bains", "ouverture porte forges-les-bains", "serrurier 24h forges-les-bains", "dépannage serrure forges-les-bains"]}
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