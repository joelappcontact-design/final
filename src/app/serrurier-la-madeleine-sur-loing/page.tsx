import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Madeleine-sur-Loing',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Madeleine-sur-Loing 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-madeleine-sur-loing', 'serrurier urgence la-madeleine-sur-loing', 'ouverture porte la-madeleine-sur-loing', 'serrurier 24h la-madeleine-sur-loing', 'dépannage serrure la-madeleine-sur-loing']
};

export default function Page() {
  return <CityPage 
    cityName="La Madeleine-sur-Loing"
    citySlug="la-madeleine-sur-loing"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Madeleine-sur-Loing - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-madeleine-sur-loing", "serrurier urgence la-madeleine-sur-loing", "ouverture porte la-madeleine-sur-loing", "serrurier 24h la-madeleine-sur-loing", "dépannage serrure la-madeleine-sur-loing"]}
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