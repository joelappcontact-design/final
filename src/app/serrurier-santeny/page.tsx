import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Santeny',
  department: '94',
  population: '3500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Santeny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier santeny', 'serrurier urgence santeny', 'ouverture porte santeny', 'serrurier 24h santeny', 'dépannage serrure santeny']
};

export default function Page() {
  return <CityPage 
    cityName="Santeny"
    citySlug="santeny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Santeny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier santeny", "serrurier urgence santeny", "ouverture porte santeny", "serrurier 24h santeny", "dépannage serrure santeny"]}
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