import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vaucresson',
  department: '92',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vaucresson 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vaucresson-92', 'serrurier urgence vaucresson-92', 'ouverture porte vaucresson-92', 'serrurier 24h vaucresson-92', 'dépannage serrure vaucresson-92']
};

export default function Page() {
  return <CityPage 
    cityName="Vaucresson"
    citySlug="vaucresson-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vaucresson - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vaucresson-92", "serrurier urgence vaucresson-92", "ouverture porte vaucresson-92", "serrurier 24h vaucresson-92", "dépannage serrure vaucresson-92"]}
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