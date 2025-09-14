import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Rochette',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Rochette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-rochette', 'serrurier urgence la-rochette', 'ouverture porte la-rochette', 'serrurier 24h la-rochette', 'dépannage serrure la-rochette']
};

export default function Page() {
  return <CityPage 
    cityName="La Rochette"
    citySlug="la-rochette"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Rochette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-rochette", "serrurier urgence la-rochette", "ouverture porte la-rochette", "serrurier 24h la-rochette", "dépannage serrure la-rochette"]}
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