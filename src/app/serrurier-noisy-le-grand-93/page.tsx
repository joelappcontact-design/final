import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Grand',
  department: '93',
  population: '70000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Grand 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-grand-93', 'serrurier urgence noisy-le-grand-93', 'ouverture porte noisy-le-grand-93', 'serrurier 24h noisy-le-grand-93', 'dépannage serrure noisy-le-grand-93']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Grand"
    citySlug="noisy-le-grand-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Grand - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-grand-93", "serrurier urgence noisy-le-grand-93", "ouverture porte noisy-le-grand-93", "serrurier 24h noisy-le-grand-93", "dépannage serrure noisy-le-grand-93"]}
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