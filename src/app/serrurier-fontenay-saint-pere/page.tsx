import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-Saint-Père',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-Saint-Père 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-saint-pere', 'serrurier urgence fontenay-saint-pere', 'ouverture porte fontenay-saint-pere', 'serrurier 24h fontenay-saint-pere', 'dépannage serrure fontenay-saint-pere']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-Saint-Père"
    citySlug="fontenay-saint-pere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-Saint-Père - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-saint-pere", "serrurier urgence fontenay-saint-pere", "ouverture porte fontenay-saint-pere", "serrurier 24h fontenay-saint-pere", "dépannage serrure fontenay-saint-pere"]}
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