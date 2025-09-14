import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bondoufle-Centre',
  department: '91',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bondoufle-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bondoufle-centre', 'serrurier urgence bondoufle-centre', 'ouverture porte bondoufle-centre', 'serrurier 24h bondoufle-centre', 'dépannage serrure bondoufle-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bondoufle-Centre"
    citySlug="bondoufle-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bondoufle-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bondoufle-centre", "serrurier urgence bondoufle-centre", "ouverture porte bondoufle-centre", "serrurier 24h bondoufle-centre", "dépannage serrure bondoufle-centre"]}
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