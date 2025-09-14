import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Orge',
  department: '91',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Orge 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-orge', 'serrurier urgence epinay-sur-orge', 'ouverture porte epinay-sur-orge', 'serrurier 24h epinay-sur-orge', 'dépannage serrure epinay-sur-orge']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Orge"
    citySlug="epinay-sur-orge"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Orge - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-orge", "serrurier urgence epinay-sur-orge", "ouverture porte epinay-sur-orge", "serrurier 24h epinay-sur-orge", "dépannage serrure epinay-sur-orge"]}
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