import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Magny-en-Vexin',
  department: '95',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Magny-en-Vexin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier magny-en-vexin', 'serrurier urgence magny-en-vexin', 'ouverture porte magny-en-vexin', 'serrurier 24h magny-en-vexin', 'dépannage serrure magny-en-vexin']
};

export default function Page() {
  return <CityPage 
    cityName="Magny-en-Vexin"
    citySlug="magny-en-vexin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Magny-en-Vexin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier magny-en-vexin", "serrurier urgence magny-en-vexin", "ouverture porte magny-en-vexin", "serrurier 24h magny-en-vexin", "dépannage serrure magny-en-vexin"]}
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