import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bondoufle',
  department: '91',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bondoufle 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bondoufle', 'serrurier urgence bondoufle', 'ouverture porte bondoufle', 'serrurier 24h bondoufle', 'dépannage serrure bondoufle']
};

export default function Page() {
  return <CityPage 
    cityName="Bondoufle"
    citySlug="bondoufle"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bondoufle - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bondoufle", "serrurier urgence bondoufle", "ouverture porte bondoufle", "serrurier 24h bondoufle", "dépannage serrure bondoufle"]}
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