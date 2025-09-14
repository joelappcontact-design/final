import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuilly-Plaisance',
  department: '93',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neuilly-Plaisance 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuilly-plaisance', 'serrurier urgence neuilly-plaisance', 'ouverture porte neuilly-plaisance', 'serrurier 24h neuilly-plaisance', 'dépannage serrure neuilly-plaisance']
};

export default function Page() {
  return <CityPage 
    cityName="Neuilly-Plaisance"
    citySlug="neuilly-plaisance"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neuilly-Plaisance - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuilly-plaisance", "serrurier urgence neuilly-plaisance", "ouverture porte neuilly-plaisance", "serrurier 24h neuilly-plaisance", "dépannage serrure neuilly-plaisance"]}
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