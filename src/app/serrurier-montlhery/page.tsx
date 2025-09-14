import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montlhéry',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montlhéry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montlhery', 'serrurier urgence montlhery', 'ouverture porte montlhery', 'serrurier 24h montlhery', 'dépannage serrure montlhery']
};

export default function Page() {
  return <CityPage 
    cityName="Montlhéry"
    citySlug="montlhery"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montlhéry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montlhery", "serrurier urgence montlhery", "ouverture porte montlhery", "serrurier 24h montlhery", "dépannage serrure montlhery"]}
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