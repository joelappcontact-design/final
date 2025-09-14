import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-Saint-Léger',
  department: '94',
  population: '17000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-Saint-Léger 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-saint-leger', 'serrurier urgence boissy-saint-leger', 'ouverture porte boissy-saint-leger', 'serrurier 24h boissy-saint-leger', 'dépannage serrure boissy-saint-leger']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-Saint-Léger"
    citySlug="boissy-saint-leger"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-Saint-Léger - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-saint-leger", "serrurier urgence boissy-saint-leger", "ouverture porte boissy-saint-leger", "serrurier 24h boissy-saint-leger", "dépannage serrure boissy-saint-leger"]}
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