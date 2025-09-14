import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouars-Pontchartrain',
  department: '78',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouars-Pontchartrain 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouars-pontchartrain', 'serrurier urgence jouars-pontchartrain', 'ouverture porte jouars-pontchartrain', 'serrurier 24h jouars-pontchartrain', 'dépannage serrure jouars-pontchartrain']
};

export default function Page() {
  return <CityPage 
    cityName="Jouars-Pontchartrain"
    citySlug="jouars-pontchartrain"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouars-Pontchartrain - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouars-pontchartrain", "serrurier urgence jouars-pontchartrain", "ouverture porte jouars-pontchartrain", "serrurier 24h jouars-pontchartrain", "dépannage serrure jouars-pontchartrain"]}
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