import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montereau-Fault-Yonne',
  department: '77',
  population: '17000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montereau-Fault-Yonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montereau-fault-yonne', 'serrurier urgence montereau-fault-yonne', 'ouverture porte montereau-fault-yonne', 'serrurier 24h montereau-fault-yonne', 'dépannage serrure montereau-fault-yonne']
};

export default function Page() {
  return <CityPage 
    cityName="Montereau-Fault-Yonne"
    citySlug="montereau-fault-yonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montereau-Fault-Yonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montereau-fault-yonne", "serrurier urgence montereau-fault-yonne", "ouverture porte montereau-fault-yonne", "serrurier 24h montereau-fault-yonne", "dépannage serrure montereau-fault-yonne"]}
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