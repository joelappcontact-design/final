import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-le-Vicomte',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-le-Vicomte 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-le-vicomte', 'serrurier urgence fontenay-le-vicomte', 'ouverture porte fontenay-le-vicomte', 'serrurier 24h fontenay-le-vicomte', 'dépannage serrure fontenay-le-vicomte']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-le-Vicomte"
    citySlug="fontenay-le-vicomte"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-le-Vicomte - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-le-vicomte", "serrurier urgence fontenay-le-vicomte", "ouverture porte fontenay-le-vicomte", "serrurier 24h fontenay-le-vicomte", "dépannage serrure fontenay-le-vicomte"]}
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