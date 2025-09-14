import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-Trésigny',
  department: '77',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-Trésigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-tresigny', 'serrurier urgence fontenay-tresigny', 'ouverture porte fontenay-tresigny', 'serrurier 24h fontenay-tresigny', 'dépannage serrure fontenay-tresigny']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-Trésigny"
    citySlug="fontenay-tresigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-Trésigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-tresigny", "serrurier urgence fontenay-tresigny", "ouverture porte fontenay-tresigny", "serrurier 24h fontenay-tresigny", "dépannage serrure fontenay-tresigny"]}
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