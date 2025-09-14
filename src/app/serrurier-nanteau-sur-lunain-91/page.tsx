import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanteau-sur-Lunain',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanteau-sur-Lunain 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanteau-sur-lunain-91', 'serrurier urgence nanteau-sur-lunain-91', 'ouverture porte nanteau-sur-lunain-91', 'serrurier 24h nanteau-sur-lunain-91', 'dépannage serrure nanteau-sur-lunain-91']
};

export default function Page() {
  return <CityPage 
    cityName="Nanteau-sur-Lunain"
    citySlug="nanteau-sur-lunain-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanteau-sur-Lunain - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanteau-sur-lunain-91", "serrurier urgence nanteau-sur-lunain-91", "ouverture porte nanteau-sur-lunain-91", "serrurier 24h nanteau-sur-lunain-91", "dépannage serrure nanteau-sur-lunain-91"]}
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