import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marcq',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marcq 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marcq-78', 'serrurier urgence marcq-78', 'ouverture porte marcq-78', 'serrurier 24h marcq-78', 'dépannage serrure marcq-78']
};

export default function Page() {
  return <CityPage 
    cityName="Marcq"
    citySlug="marcq-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marcq - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marcq-78", "serrurier urgence marcq-78", "ouverture porte marcq-78", "serrurier 24h marcq-78", "dépannage serrure marcq-78"]}
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