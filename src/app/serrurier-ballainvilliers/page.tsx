import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ballainvilliers',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ballainvilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ballainvilliers', 'serrurier urgence ballainvilliers', 'ouverture porte ballainvilliers', 'serrurier 24h ballainvilliers', 'dépannage serrure ballainvilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Ballainvilliers"
    citySlug="ballainvilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ballainvilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ballainvilliers", "serrurier urgence ballainvilliers", "ouverture porte ballainvilliers", "serrurier 24h ballainvilliers", "dépannage serrure ballainvilliers"]}
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