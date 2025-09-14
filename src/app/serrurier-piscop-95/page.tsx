import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Piscop',
  department: '95',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Piscop 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier piscop-95', 'serrurier urgence piscop-95', 'ouverture porte piscop-95', 'serrurier 24h piscop-95', 'dépannage serrure piscop-95']
};

export default function Page() {
  return <CityPage 
    cityName="Piscop"
    citySlug="piscop-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Piscop - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier piscop-95", "serrurier urgence piscop-95", "ouverture porte piscop-95", "serrurier 24h piscop-95", "dépannage serrure piscop-95"]}
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