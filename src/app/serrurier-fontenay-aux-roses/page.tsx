import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-aux-Roses',
  department: '92',
  population: '25000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-aux-Roses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-aux-roses', 'serrurier urgence fontenay-aux-roses', 'ouverture porte fontenay-aux-roses', 'serrurier 24h fontenay-aux-roses', 'dépannage serrure fontenay-aux-roses']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-aux-Roses"
    citySlug="fontenay-aux-roses"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-aux-Roses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-aux-roses", "serrurier urgence fontenay-aux-roses", "ouverture porte fontenay-aux-roses", "serrurier 24h fontenay-aux-roses", "dépannage serrure fontenay-aux-roses"]}
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