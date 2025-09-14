import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-le-Fleury',
  department: '78',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-le-Fleury 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-le-fleury', 'serrurier urgence fontenay-le-fleury', 'ouverture porte fontenay-le-fleury', 'serrurier 24h fontenay-le-fleury', 'dépannage serrure fontenay-le-fleury']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-le-Fleury"
    citySlug="fontenay-le-fleury"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-le-Fleury - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-le-fleury", "serrurier urgence fontenay-le-fleury", "ouverture porte fontenay-le-fleury", "serrurier 24h fontenay-le-fleury", "dépannage serrure fontenay-le-fleury"]}
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