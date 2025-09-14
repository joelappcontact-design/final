import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanteau-sur-Lunain',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanteau-sur-Lunain 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanteau-sur-lunain', 'serrurier urgence nanteau-sur-lunain', 'ouverture porte nanteau-sur-lunain', 'serrurier 24h nanteau-sur-lunain', 'dépannage serrure nanteau-sur-lunain']
};

export default function Page() {
  return <CityPage 
    cityName="Nanteau-sur-Lunain"
    citySlug="nanteau-sur-lunain"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanteau-sur-Lunain - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanteau-sur-lunain", "serrurier urgence nanteau-sur-lunain", "ouverture porte nanteau-sur-lunain", "serrurier 24h nanteau-sur-lunain", "dépannage serrure nanteau-sur-lunain"]}
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