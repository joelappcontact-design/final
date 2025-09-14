import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montrouge',
  department: '92',
  population: '50000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montrouge 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montrouge', 'serrurier urgence montrouge', 'ouverture porte montrouge', 'serrurier 24h montrouge', 'dépannage serrure montrouge']
};

export default function Page() {
  return <CityPage 
    cityName="Montrouge"
    citySlug="montrouge"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montrouge - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montrouge", "serrurier urgence montrouge", "ouverture porte montrouge", "serrurier 24h montrouge", "dépannage serrure montrouge"]}
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