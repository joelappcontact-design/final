import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pomponne',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pomponne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pomponne-91', 'serrurier urgence pomponne-91', 'ouverture porte pomponne-91', 'serrurier 24h pomponne-91', 'dépannage serrure pomponne-91']
};

export default function Page() {
  return <CityPage 
    cityName="Pomponne"
    citySlug="pomponne-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pomponne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pomponne-91", "serrurier urgence pomponne-91", "ouverture porte pomponne-91", "serrurier 24h pomponne-91", "dépannage serrure pomponne-91"]}
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