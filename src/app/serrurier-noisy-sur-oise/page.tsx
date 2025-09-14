import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-sur-Oise',
  department: '95',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-sur-Oise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-sur-oise', 'serrurier urgence noisy-sur-oise', 'ouverture porte noisy-sur-oise', 'serrurier 24h noisy-sur-oise', 'dépannage serrure noisy-sur-oise']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-sur-Oise"
    citySlug="noisy-sur-oise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-sur-Oise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-sur-oise", "serrurier urgence noisy-sur-oise", "ouverture porte noisy-sur-oise", "serrurier 24h noisy-sur-oise", "dépannage serrure noisy-sur-oise"]}
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