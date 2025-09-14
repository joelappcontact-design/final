import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Igny',
  department: '78',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Igny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier igny-78', 'serrurier urgence igny-78', 'ouverture porte igny-78', 'serrurier 24h igny-78', 'dépannage serrure igny-78']
};

export default function Page() {
  return <CityPage 
    cityName="Igny"
    citySlug="igny-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Igny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier igny-78", "serrurier urgence igny-78", "ouverture porte igny-78", "serrurier 24h igny-78", "dépannage serrure igny-78"]}
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