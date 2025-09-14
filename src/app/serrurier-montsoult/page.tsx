import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montsoult',
  department: '95',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montsoult 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montsoult', 'serrurier urgence montsoult', 'ouverture porte montsoult', 'serrurier 24h montsoult', 'dépannage serrure montsoult']
};

export default function Page() {
  return <CityPage 
    cityName="Montsoult"
    citySlug="montsoult"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montsoult - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montsoult", "serrurier urgence montsoult", "ouverture porte montsoult", "serrurier 24h montsoult", "dépannage serrure montsoult"]}
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