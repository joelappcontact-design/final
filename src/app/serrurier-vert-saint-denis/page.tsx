import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vert-Saint-Denis',
  department: '77',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vert-Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vert-saint-denis', 'serrurier urgence vert-saint-denis', 'ouverture porte vert-saint-denis', 'serrurier 24h vert-saint-denis', 'dépannage serrure vert-saint-denis']
};

export default function Page() {
  return <CityPage 
    cityName="Vert-Saint-Denis"
    citySlug="vert-saint-denis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vert-Saint-Denis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vert-saint-denis", "serrurier urgence vert-saint-denis", "ouverture porte vert-saint-denis", "serrurier 24h vert-saint-denis", "dépannage serrure vert-saint-denis"]}
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