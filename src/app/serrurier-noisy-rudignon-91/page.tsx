import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-Rudignon',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-Rudignon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-rudignon-91', 'serrurier urgence noisy-rudignon-91', 'ouverture porte noisy-rudignon-91', 'serrurier 24h noisy-rudignon-91', 'dépannage serrure noisy-rudignon-91']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-Rudignon"
    citySlug="noisy-rudignon-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-Rudignon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-rudignon-91", "serrurier urgence noisy-rudignon-91", "ouverture porte noisy-rudignon-91", "serrurier 24h noisy-rudignon-91", "dépannage serrure noisy-rudignon-91"]}
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