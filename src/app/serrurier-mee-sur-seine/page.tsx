import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mée-sur-Seine',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mée-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mee-sur-seine', 'serrurier urgence mee-sur-seine', 'ouverture porte mee-sur-seine', 'serrurier 24h mee-sur-seine', 'dépannage serrure mee-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Mée-sur-Seine"
    citySlug="mee-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mée-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mee-sur-seine", "serrurier urgence mee-sur-seine", "ouverture porte mee-sur-seine", "serrurier 24h mee-sur-seine", "dépannage serrure mee-sur-seine"]}
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