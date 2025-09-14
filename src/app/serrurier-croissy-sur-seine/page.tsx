import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Croissy-sur-Seine',
  department: '78',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Croissy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier croissy-sur-seine', 'serrurier urgence croissy-sur-seine', 'ouverture porte croissy-sur-seine', 'serrurier 24h croissy-sur-seine', 'dépannage serrure croissy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Croissy-sur-Seine"
    citySlug="croissy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Croissy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier croissy-sur-seine", "serrurier urgence croissy-sur-seine", "ouverture porte croissy-sur-seine", "serrurier 24h croissy-sur-seine", "dépannage serrure croissy-sur-seine"]}
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