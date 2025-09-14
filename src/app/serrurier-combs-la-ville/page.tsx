import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Combs-la-Ville',
  department: '77',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Combs-la-Ville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier combs-la-ville', 'serrurier urgence combs-la-ville', 'ouverture porte combs-la-ville', 'serrurier 24h combs-la-ville', 'dépannage serrure combs-la-ville']
};

export default function Page() {
  return <CityPage 
    cityName="Combs-la-Ville"
    citySlug="combs-la-ville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Combs-la-Ville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier combs-la-ville", "serrurier urgence combs-la-ville", "ouverture porte combs-la-ville", "serrurier 24h combs-la-ville", "dépannage serrure combs-la-ville"]}
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