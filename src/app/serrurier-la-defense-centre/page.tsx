import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Défense-Centre',
  department: '92',
  population: '25000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Défense-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-defense-centre', 'serrurier urgence la-defense-centre', 'ouverture porte la-defense-centre', 'serrurier 24h la-defense-centre', 'dépannage serrure la-defense-centre']
};

export default function Page() {
  return <CityPage 
    cityName="La Défense-Centre"
    citySlug="la-defense-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Défense-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-defense-centre", "serrurier urgence la-defense-centre", "ouverture porte la-defense-centre", "serrurier 24h la-defense-centre", "dépannage serrure la-defense-centre"]}
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