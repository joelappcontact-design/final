import CityPage from '@/components/CityPage';

const cityData = {
  name: 'L\'Île-Saint-Denis',
  department: '93',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence L\'Île-Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lile-saint-denis', 'serrurier urgence lile-saint-denis', 'ouverture porte lile-saint-denis', 'serrurier 24h lile-saint-denis', 'dépannage serrure lile-saint-denis']
};

export default function Page() {
  return <CityPage 
    cityName="L\'Île-Saint-Denis"
    citySlug="lile-saint-denis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="L\'Île-Saint-Denis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lile-saint-denis", "serrurier urgence lile-saint-denis", "ouverture porte lile-saint-denis", "serrurier 24h lile-saint-denis", "dépannage serrure lile-saint-denis"]}
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