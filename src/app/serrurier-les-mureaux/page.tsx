import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Mureaux',
  department: '78',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Mureaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-mureaux', 'serrurier urgence les-mureaux', 'ouverture porte les-mureaux', 'serrurier 24h les-mureaux', 'dépannage serrure les-mureaux']
};

export default function Page() {
  return <CityPage 
    cityName="Les Mureaux"
    citySlug="les-mureaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Mureaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-mureaux", "serrurier urgence les-mureaux", "ouverture porte les-mureaux", "serrurier 24h les-mureaux", "dépannage serrure les-mureaux"]}
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