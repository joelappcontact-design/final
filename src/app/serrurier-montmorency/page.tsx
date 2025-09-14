import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montmorency',
  department: '95',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montmorency 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montmorency', 'serrurier urgence montmorency', 'ouverture porte montmorency', 'serrurier 24h montmorency', 'dépannage serrure montmorency']
};

export default function Page() {
  return <CityPage 
    cityName="Montmorency"
    citySlug="montmorency"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montmorency - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montmorency", "serrurier urgence montmorency", "ouverture porte montmorency", "serrurier 24h montmorency", "dépannage serrure montmorency"]}
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