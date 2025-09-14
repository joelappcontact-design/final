import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saulx-Marchais',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saulx-Marchais 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saulx-marchais', 'serrurier urgence saulx-marchais', 'ouverture porte saulx-marchais', 'serrurier 24h saulx-marchais', 'dépannage serrure saulx-marchais']
};

export default function Page() {
  return <CityPage 
    cityName="Saulx-Marchais"
    citySlug="saulx-marchais"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saulx-Marchais - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saulx-marchais", "serrurier urgence saulx-marchais", "ouverture porte saulx-marchais", "serrurier 24h saulx-marchais", "dépannage serrure saulx-marchais"]}
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