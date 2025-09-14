import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-sur-École',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-sur-École 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-sur-ecole-91', 'serrurier urgence noisy-sur-ecole-91', 'ouverture porte noisy-sur-ecole-91', 'serrurier 24h noisy-sur-ecole-91', 'dépannage serrure noisy-sur-ecole-91']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-sur-École"
    citySlug="noisy-sur-ecole-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-sur-École - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-sur-ecole-91", "serrurier urgence noisy-sur-ecole-91", "ouverture porte noisy-sur-ecole-91", "serrurier 24h noisy-sur-ecole-91", "dépannage serrure noisy-sur-ecole-91"]}
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