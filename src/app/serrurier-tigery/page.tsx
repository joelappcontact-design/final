import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tigery',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tigery 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tigery', 'serrurier urgence tigery', 'ouverture porte tigery', 'serrurier 24h tigery', 'dépannage serrure tigery']
};

export default function Page() {
  return <CityPage 
    cityName="Tigery"
    citySlug="tigery"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tigery - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tigery", "serrurier urgence tigery", "ouverture porte tigery", "serrurier 24h tigery", "dépannage serrure tigery"]}
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