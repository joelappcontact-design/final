import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dannemarie',
  department: '78',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dannemarie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dannemarie', 'serrurier urgence dannemarie', 'ouverture porte dannemarie', 'serrurier 24h dannemarie', 'dépannage serrure dannemarie']
};

export default function Page() {
  return <CityPage 
    cityName="Dannemarie"
    citySlug="dannemarie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dannemarie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dannemarie", "serrurier urgence dannemarie", "ouverture porte dannemarie", "serrurier 24h dannemarie", "dépannage serrure dannemarie"]}
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