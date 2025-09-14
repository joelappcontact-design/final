import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bry-sur-Marne',
  department: '94',
  population: '17000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bry-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bry-sur-marne', 'serrurier urgence bry-sur-marne', 'ouverture porte bry-sur-marne', 'serrurier 24h bry-sur-marne', 'dépannage serrure bry-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Bry-sur-Marne"
    citySlug="bry-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bry-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bry-sur-marne", "serrurier urgence bry-sur-marne", "ouverture porte bry-sur-marne", "serrurier 24h bry-sur-marne", "dépannage serrure bry-sur-marne"]}
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