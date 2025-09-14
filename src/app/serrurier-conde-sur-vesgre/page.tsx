import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Condé-sur-Vesgre',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Condé-sur-Vesgre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier conde-sur-vesgre', 'serrurier urgence conde-sur-vesgre', 'ouverture porte conde-sur-vesgre', 'serrurier 24h conde-sur-vesgre', 'dépannage serrure conde-sur-vesgre']
};

export default function Page() {
  return <CityPage 
    cityName="Condé-sur-Vesgre"
    citySlug="conde-sur-vesgre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Condé-sur-Vesgre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier conde-sur-vesgre", "serrurier urgence conde-sur-vesgre", "ouverture porte conde-sur-vesgre", "serrurier 24h conde-sur-vesgre", "dépannage serrure conde-sur-vesgre"]}
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