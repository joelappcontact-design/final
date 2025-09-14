import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orcemont',
  department: '78',
  population: '1000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orcemont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orcemont', 'serrurier urgence orcemont', 'ouverture porte orcemont', 'serrurier 24h orcemont', 'dépannage serrure orcemont']
};

export default function Page() {
  return <CityPage 
    cityName="Orcemont"
    citySlug="orcemont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orcemont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orcemont", "serrurier urgence orcemont", "ouverture porte orcemont", "serrurier 24h orcemont", "dépannage serrure orcemont"]}
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