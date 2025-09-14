import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Méry-sur-Marne',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Méry-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mery-sur-marne', 'serrurier urgence mery-sur-marne', 'ouverture porte mery-sur-marne', 'serrurier 24h mery-sur-marne', 'dépannage serrure mery-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Méry-sur-Marne"
    citySlug="mery-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Méry-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mery-sur-marne", "serrurier urgence mery-sur-marne", "ouverture porte mery-sur-marne", "serrurier 24h mery-sur-marne", "dépannage serrure mery-sur-marne"]}
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