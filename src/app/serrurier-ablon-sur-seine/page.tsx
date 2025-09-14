import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ablon-sur-Seine',
  department: '94',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ablon-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ablon-sur-seine', 'serrurier urgence ablon-sur-seine', 'ouverture porte ablon-sur-seine', 'serrurier 24h ablon-sur-seine', 'dépannage serrure ablon-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Ablon-sur-Seine"
    citySlug="ablon-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ablon-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ablon-sur-seine", "serrurier urgence ablon-sur-seine", "ouverture porte ablon-sur-seine", "serrurier 24h ablon-sur-seine", "dépannage serrure ablon-sur-seine"]}
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