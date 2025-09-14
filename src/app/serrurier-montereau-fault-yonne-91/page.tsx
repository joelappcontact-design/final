import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montereau-Fault-Yonne',
  department: '91',
  population: '17000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montereau-Fault-Yonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montereau-fault-yonne-91', 'serrurier urgence montereau-fault-yonne-91', 'ouverture porte montereau-fault-yonne-91', 'serrurier 24h montereau-fault-yonne-91', 'dépannage serrure montereau-fault-yonne-91']
};

export default function Page() {
  return <CityPage 
    cityName="Montereau-Fault-Yonne"
    citySlug="montereau-fault-yonne-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montereau-Fault-Yonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montereau-fault-yonne-91", "serrurier urgence montereau-fault-yonne-91", "ouverture porte montereau-fault-yonne-91", "serrurier 24h montereau-fault-yonne-91", "dépannage serrure montereau-fault-yonne-91"]}
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