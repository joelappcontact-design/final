import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Morangis',
  department: '91',
  population: '12000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Morangis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier morangis', 'serrurier urgence morangis', 'ouverture porte morangis', 'serrurier 24h morangis', 'dépannage serrure morangis']
};

export default function Page() {
  return <CityPage 
    cityName="Morangis"
    citySlug="morangis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Morangis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier morangis", "serrurier urgence morangis", "ouverture porte morangis", "serrurier 24h morangis", "dépannage serrure morangis"]}
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