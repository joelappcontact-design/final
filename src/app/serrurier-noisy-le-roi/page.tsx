import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Roi',
  department: '92',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-roi', 'serrurier urgence noisy-le-roi', 'ouverture porte noisy-le-roi', 'serrurier 24h noisy-le-roi', 'dépannage serrure noisy-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Roi"
    citySlug="noisy-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-roi", "serrurier urgence noisy-le-roi", "ouverture porte noisy-le-roi", "serrurier 24h noisy-le-roi", "dépannage serrure noisy-le-roi"]}
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