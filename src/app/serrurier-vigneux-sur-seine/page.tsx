import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vigneux-sur-Seine',
  department: '91',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vigneux-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vigneux-sur-seine', 'serrurier urgence vigneux-sur-seine', 'ouverture porte vigneux-sur-seine', 'serrurier 24h vigneux-sur-seine', 'dépannage serrure vigneux-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Vigneux-sur-Seine"
    citySlug="vigneux-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vigneux-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vigneux-sur-seine", "serrurier urgence vigneux-sur-seine", "ouverture porte vigneux-sur-seine", "serrurier 24h vigneux-sur-seine", "dépannage serrure vigneux-sur-seine"]}
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