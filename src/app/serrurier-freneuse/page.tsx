import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Freneuse',
  department: '78',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Freneuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier freneuse', 'serrurier urgence freneuse', 'ouverture porte freneuse', 'serrurier 24h freneuse', 'dépannage serrure freneuse']
};

export default function Page() {
  return <CityPage 
    cityName="Freneuse"
    citySlug="freneuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Freneuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier freneuse", "serrurier urgence freneuse", "ouverture porte freneuse", "serrurier 24h freneuse", "dépannage serrure freneuse"]}
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