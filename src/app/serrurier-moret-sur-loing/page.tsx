import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moret-sur-Loing',
  department: '77',
  population: '5000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moret-sur-Loing 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moret-sur-loing', 'serrurier urgence moret-sur-loing', 'ouverture porte moret-sur-loing', 'serrurier 24h moret-sur-loing', 'dépannage serrure moret-sur-loing']
};

export default function Page() {
  return <CityPage 
    cityName="Moret-sur-Loing"
    citySlug="moret-sur-loing"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moret-sur-Loing - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moret-sur-loing", "serrurier urgence moret-sur-loing", "ouverture porte moret-sur-loing", "serrurier 24h moret-sur-loing", "dépannage serrure moret-sur-loing"]}
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