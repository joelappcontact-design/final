import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Loges-en-Josas',
  department: '78',
  population: '1400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Loges-en-Josas 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-loges-en-josas', 'serrurier urgence les-loges-en-josas', 'ouverture porte les-loges-en-josas', 'serrurier 24h les-loges-en-josas', 'dépannage serrure les-loges-en-josas']
};

export default function Page() {
  return <CityPage 
    cityName="Les Loges-en-Josas"
    citySlug="les-loges-en-josas"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Loges-en-Josas - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-loges-en-josas", "serrurier urgence les-loges-en-josas", "ouverture porte les-loges-en-josas", "serrurier 24h les-loges-en-josas", "dépannage serrure les-loges-en-josas"]}
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