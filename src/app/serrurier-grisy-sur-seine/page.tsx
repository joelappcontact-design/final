import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grisy-sur-Seine',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grisy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grisy-sur-seine', 'serrurier urgence grisy-sur-seine', 'ouverture porte grisy-sur-seine', 'serrurier 24h grisy-sur-seine', 'dépannage serrure grisy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Grisy-sur-Seine"
    citySlug="grisy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grisy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grisy-sur-seine", "serrurier urgence grisy-sur-seine", "ouverture porte grisy-sur-seine", "serrurier 24h grisy-sur-seine", "dépannage serrure grisy-sur-seine"]}
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