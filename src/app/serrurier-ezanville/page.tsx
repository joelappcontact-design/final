import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ézanville',
  department: '95',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ézanville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ezanville', 'serrurier urgence ezanville', 'ouverture porte ezanville', 'serrurier 24h ezanville', 'dépannage serrure ezanville']
};

export default function Page() {
  return <CityPage 
    cityName="Ézanville"
    citySlug="ezanville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ézanville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ezanville", "serrurier urgence ezanville", "ouverture porte ezanville", "serrurier 24h ezanville", "dépannage serrure ezanville"]}
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