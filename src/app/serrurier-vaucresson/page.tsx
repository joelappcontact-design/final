import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vaucresson',
  department: '92',
  population: '9000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vaucresson 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vaucresson', 'serrurier urgence vaucresson', 'ouverture porte vaucresson', 'serrurier 24h vaucresson', 'dépannage serrure vaucresson']
};

export default function Page() {
  return <CityPage 
    cityName="Vaucresson"
    citySlug="vaucresson"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vaucresson - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vaucresson", "serrurier urgence vaucresson", "ouverture porte vaucresson", "serrurier 24h vaucresson", "dépannage serrure vaucresson"]}
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