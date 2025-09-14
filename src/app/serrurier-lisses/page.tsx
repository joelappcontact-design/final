import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lisses',
  department: '91',
  population: '7500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lisses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lisses', 'serrurier urgence lisses', 'ouverture porte lisses', 'serrurier 24h lisses', 'dépannage serrure lisses']
};

export default function Page() {
  return <CityPage 
    cityName="Lisses"
    citySlug="lisses"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lisses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lisses", "serrurier urgence lisses", "ouverture porte lisses", "serrurier 24h lisses", "dépannage serrure lisses"]}
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