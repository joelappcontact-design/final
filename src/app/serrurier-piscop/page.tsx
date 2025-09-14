import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Piscop',
  department: '95',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Piscop 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier piscop', 'serrurier urgence piscop', 'ouverture porte piscop', 'serrurier 24h piscop', 'dépannage serrure piscop']
};

export default function Page() {
  return <CityPage 
    cityName="Piscop"
    citySlug="piscop"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Piscop - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier piscop", "serrurier urgence piscop", "ouverture porte piscop", "serrurier 24h piscop", "dépannage serrure piscop"]}
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