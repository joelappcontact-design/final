import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Poincy',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Poincy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier poincy-91', 'serrurier urgence poincy-91', 'ouverture porte poincy-91', 'serrurier 24h poincy-91', 'dépannage serrure poincy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Poincy"
    citySlug="poincy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Poincy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier poincy-91", "serrurier urgence poincy-91", "ouverture porte poincy-91", "serrurier 24h poincy-91", "dépannage serrure poincy-91"]}
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