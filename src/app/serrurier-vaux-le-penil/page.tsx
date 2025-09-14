import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vaux-le-Pénil',
  department: '77',
  population: '11000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vaux-le-Pénil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vaux-le-penil', 'serrurier urgence vaux-le-penil', 'ouverture porte vaux-le-penil', 'serrurier 24h vaux-le-penil', 'dépannage serrure vaux-le-penil']
};

export default function Page() {
  return <CityPage 
    cityName="Vaux-le-Pénil"
    citySlug="vaux-le-penil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vaux-le-Pénil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vaux-le-penil", "serrurier urgence vaux-le-penil", "ouverture porte vaux-le-penil", "serrurier 24h vaux-le-penil", "dépannage serrure vaux-le-penil"]}
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