import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Triel-sur-Seine',
  department: '78',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Triel-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier triel-sur-seine-78', 'serrurier urgence triel-sur-seine-78', 'ouverture porte triel-sur-seine-78', 'serrurier 24h triel-sur-seine-78', 'dépannage serrure triel-sur-seine-78']
};

export default function Page() {
  return <CityPage 
    cityName="Triel-sur-Seine"
    citySlug="triel-sur-seine-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Triel-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier triel-sur-seine-78", "serrurier urgence triel-sur-seine-78", "ouverture porte triel-sur-seine-78", "serrurier 24h triel-sur-seine-78", "dépannage serrure triel-sur-seine-78"]}
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