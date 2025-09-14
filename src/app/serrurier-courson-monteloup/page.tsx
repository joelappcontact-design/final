import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courson-Monteloup',
  department: '91',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courson-Monteloup 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courson-monteloup', 'serrurier urgence courson-monteloup', 'ouverture porte courson-monteloup', 'serrurier 24h courson-monteloup', 'dépannage serrure courson-monteloup']
};

export default function Page() {
  return <CityPage 
    cityName="Courson-Monteloup"
    citySlug="courson-monteloup"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courson-Monteloup - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courson-monteloup", "serrurier urgence courson-monteloup", "ouverture porte courson-monteloup", "serrurier 24h courson-monteloup", "dépannage serrure courson-monteloup"]}
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