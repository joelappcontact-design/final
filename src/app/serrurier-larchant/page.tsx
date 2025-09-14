import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Larchant',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Larchant 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier larchant', 'serrurier urgence larchant', 'ouverture porte larchant', 'serrurier 24h larchant', 'dépannage serrure larchant']
};

export default function Page() {
  return <CityPage 
    cityName="Larchant"
    citySlug="larchant"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Larchant - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier larchant", "serrurier urgence larchant", "ouverture porte larchant", "serrurier 24h larchant", "dépannage serrure larchant"]}
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