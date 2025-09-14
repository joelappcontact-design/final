import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tertre-Saint-Denis',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tertre-Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tertre-saint-denis', 'serrurier urgence tertre-saint-denis', 'ouverture porte tertre-saint-denis', 'serrurier 24h tertre-saint-denis', 'dépannage serrure tertre-saint-denis']
};

export default function Page() {
  return <CityPage 
    cityName="Tertre-Saint-Denis"
    citySlug="tertre-saint-denis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tertre-Saint-Denis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tertre-saint-denis", "serrurier urgence tertre-saint-denis", "ouverture porte tertre-saint-denis", "serrurier 24h tertre-saint-denis", "dépannage serrure tertre-saint-denis"]}
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