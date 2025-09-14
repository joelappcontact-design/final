import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meilleray',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meilleray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meilleray-91', 'serrurier urgence meilleray-91', 'ouverture porte meilleray-91', 'serrurier 24h meilleray-91', 'dépannage serrure meilleray-91']
};

export default function Page() {
  return <CityPage 
    cityName="Meilleray"
    citySlug="meilleray-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meilleray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meilleray-91", "serrurier urgence meilleray-91", "ouverture porte meilleray-91", "serrurier 24h meilleray-91", "dépannage serrure meilleray-91"]}
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