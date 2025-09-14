import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Roi',
  department: '78',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-roi-78', 'serrurier urgence noisy-le-roi-78', 'ouverture porte noisy-le-roi-78', 'serrurier 24h noisy-le-roi-78', 'dépannage serrure noisy-le-roi-78']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Roi"
    citySlug="noisy-le-roi-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-roi-78", "serrurier urgence noisy-le-roi-78", "ouverture porte noisy-le-roi-78", "serrurier 24h noisy-le-roi-78", "dépannage serrure noisy-le-roi-78"]}
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