import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Corbreuse',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Corbreuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier corbreuse', 'serrurier urgence corbreuse', 'ouverture porte corbreuse', 'serrurier 24h corbreuse', 'dépannage serrure corbreuse']
};

export default function Page() {
  return <CityPage 
    cityName="Corbreuse"
    citySlug="corbreuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Corbreuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier corbreuse", "serrurier urgence corbreuse", "ouverture porte corbreuse", "serrurier 24h corbreuse", "dépannage serrure corbreuse"]}
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