import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Ferté-Gaucher',
  department: '77',
  population: '5000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Ferté-Gaucher 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-ferte-gaucher', 'serrurier urgence la-ferte-gaucher', 'ouverture porte la-ferte-gaucher', 'serrurier 24h la-ferte-gaucher', 'dépannage serrure la-ferte-gaucher']
};

export default function Page() {
  return <CityPage 
    cityName="La Ferté-Gaucher"
    citySlug="la-ferte-gaucher"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Ferté-Gaucher - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-ferte-gaucher", "serrurier urgence la-ferte-gaucher", "ouverture porte la-ferte-gaucher", "serrurier 24h la-ferte-gaucher", "dépannage serrure la-ferte-gaucher"]}
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