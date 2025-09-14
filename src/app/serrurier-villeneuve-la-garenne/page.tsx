import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villeneuve-la-Garenne',
  department: '92',
  population: '25000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villeneuve-la-Garenne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villeneuve-la-garenne', 'serrurier urgence villeneuve-la-garenne', 'ouverture porte villeneuve-la-garenne', 'serrurier 24h villeneuve-la-garenne', 'dépannage serrure villeneuve-la-garenne']
};

export default function Page() {
  return <CityPage 
    cityName="Villeneuve-la-Garenne"
    citySlug="villeneuve-la-garenne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villeneuve-la-Garenne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villeneuve-la-garenne", "serrurier urgence villeneuve-la-garenne", "ouverture porte villeneuve-la-garenne", "serrurier 24h villeneuve-la-garenne", "dépannage serrure villeneuve-la-garenne"]}
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