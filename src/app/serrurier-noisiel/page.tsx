import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisiel',
  department: '77',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisiel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisiel', 'serrurier urgence noisiel', 'ouverture porte noisiel', 'serrurier 24h noisiel', 'dépannage serrure noisiel']
};

export default function Page() {
  return <CityPage 
    cityName="Noisiel"
    citySlug="noisiel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisiel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisiel", "serrurier urgence noisiel", "ouverture porte noisiel", "serrurier 24h noisiel", "dépannage serrure noisiel"]}
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