import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Lilas',
  department: '93',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Lilas 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-lilas', 'serrurier urgence les-lilas', 'ouverture porte les-lilas', 'serrurier 24h les-lilas', 'dépannage serrure les-lilas']
};

export default function Page() {
  return <CityPage 
    cityName="Les Lilas"
    citySlug="les-lilas"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Lilas - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-lilas", "serrurier urgence les-lilas", "ouverture porte les-lilas", "serrurier 24h les-lilas", "dépannage serrure les-lilas"]}
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