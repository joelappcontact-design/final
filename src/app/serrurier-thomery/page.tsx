import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Thomery',
  department: '77',
  population: '3200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Thomery 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier thomery', 'serrurier urgence thomery', 'ouverture porte thomery', 'serrurier 24h thomery', 'dépannage serrure thomery']
};

export default function Page() {
  return <CityPage 
    cityName="Thomery"
    citySlug="thomery"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Thomery - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier thomery", "serrurier urgence thomery", "ouverture porte thomery", "serrurier 24h thomery", "dépannage serrure thomery"]}
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