import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuilly-en-Vexin',
  department: '95',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neuilly-en-Vexin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuilly-en-vexin', 'serrurier urgence neuilly-en-vexin', 'ouverture porte neuilly-en-vexin', 'serrurier 24h neuilly-en-vexin', 'dépannage serrure neuilly-en-vexin']
};

export default function Page() {
  return <CityPage 
    cityName="Neuilly-en-Vexin"
    citySlug="neuilly-en-vexin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neuilly-en-Vexin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuilly-en-vexin", "serrurier urgence neuilly-en-vexin", "ouverture porte neuilly-en-vexin", "serrurier 24h neuilly-en-vexin", "dépannage serrure neuilly-en-vexin"]}
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