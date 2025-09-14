import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orvilliers',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orvilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orvilliers', 'serrurier urgence orvilliers', 'ouverture porte orvilliers', 'serrurier 24h orvilliers', 'dépannage serrure orvilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Orvilliers"
    citySlug="orvilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orvilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orvilliers", "serrurier urgence orvilliers", "ouverture porte orvilliers", "serrurier 24h orvilliers", "dépannage serrure orvilliers"]}
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