import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gournay-sur-Marne',
  department: '93',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gournay-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gournay-sur-marne', 'serrurier urgence gournay-sur-marne', 'ouverture porte gournay-sur-marne', 'serrurier 24h gournay-sur-marne', 'dépannage serrure gournay-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Gournay-sur-Marne"
    citySlug="gournay-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gournay-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gournay-sur-marne", "serrurier urgence gournay-sur-marne", "ouverture porte gournay-sur-marne", "serrurier 24h gournay-sur-marne", "dépannage serrure gournay-sur-marne"]}
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