import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saulx-les-Chartreux',
  department: '91',
  population: '5500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saulx-les-Chartreux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saulx-les-chartreux', 'serrurier urgence saulx-les-chartreux', 'ouverture porte saulx-les-chartreux', 'serrurier 24h saulx-les-chartreux', 'dépannage serrure saulx-les-chartreux']
};

export default function Page() {
  return <CityPage 
    cityName="Saulx-les-Chartreux"
    citySlug="saulx-les-chartreux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saulx-les-Chartreux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saulx-les-chartreux", "serrurier urgence saulx-les-chartreux", "ouverture porte saulx-les-chartreux", "serrurier 24h saulx-les-chartreux", "dépannage serrure saulx-les-chartreux"]}
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