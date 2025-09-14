import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gasny',
  department: '78',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gasny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gasny', 'serrurier urgence gasny', 'ouverture porte gasny', 'serrurier 24h gasny', 'dépannage serrure gasny']
};

export default function Page() {
  return <CityPage 
    cityName="Gasny"
    citySlug="gasny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gasny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gasny", "serrurier urgence gasny", "ouverture porte gasny", "serrurier 24h gasny", "dépannage serrure gasny"]}
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