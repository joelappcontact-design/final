import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Mée-sur-Seine',
  department: '77',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Mée-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-mee-sur-seine', 'serrurier urgence le-mee-sur-seine', 'ouverture porte le-mee-sur-seine', 'serrurier 24h le-mee-sur-seine', 'dépannage serrure le-mee-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Le Mée-sur-Seine"
    citySlug="le-mee-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Mée-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-mee-sur-seine", "serrurier urgence le-mee-sur-seine", "ouverture porte le-mee-sur-seine", "serrurier 24h le-mee-sur-seine", "dépannage serrure le-mee-sur-seine"]}
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