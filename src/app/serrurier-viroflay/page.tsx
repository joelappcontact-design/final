import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Viroflay',
  department: '92',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Viroflay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier viroflay', 'serrurier urgence viroflay', 'ouverture porte viroflay', 'serrurier 24h viroflay', 'dépannage serrure viroflay']
};

export default function Page() {
  return <CityPage 
    cityName="Viroflay"
    citySlug="viroflay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Viroflay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier viroflay", "serrurier urgence viroflay", "ouverture porte viroflay", "serrurier 24h viroflay", "dépannage serrure viroflay"]}
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