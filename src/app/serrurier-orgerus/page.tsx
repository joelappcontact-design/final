import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orgerus',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orgerus 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orgerus', 'serrurier urgence orgerus', 'ouverture porte orgerus', 'serrurier 24h orgerus', 'dépannage serrure orgerus']
};

export default function Page() {
  return <CityPage 
    cityName="Orgerus"
    citySlug="orgerus"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orgerus - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orgerus", "serrurier urgence orgerus", "ouverture porte orgerus", "serrurier 24h orgerus", "dépannage serrure orgerus"]}
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