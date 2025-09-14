import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuilly-sur-Marne',
  department: '93',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neuilly-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuilly-sur-marne', 'serrurier urgence neuilly-sur-marne', 'ouverture porte neuilly-sur-marne', 'serrurier 24h neuilly-sur-marne', 'dépannage serrure neuilly-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Neuilly-sur-Marne"
    citySlug="neuilly-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neuilly-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuilly-sur-marne", "serrurier urgence neuilly-sur-marne", "ouverture porte neuilly-sur-marne", "serrurier 24h neuilly-sur-marne", "dépannage serrure neuilly-sur-marne"]}
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