import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chambourcy',
  department: '78',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chambourcy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chambourcy', 'serrurier urgence chambourcy', 'ouverture porte chambourcy', 'serrurier 24h chambourcy', 'dépannage serrure chambourcy']
};

export default function Page() {
  return <CityPage 
    cityName="Chambourcy"
    citySlug="chambourcy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chambourcy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chambourcy", "serrurier urgence chambourcy", "ouverture porte chambourcy", "serrurier 24h chambourcy", "dépannage serrure chambourcy"]}
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