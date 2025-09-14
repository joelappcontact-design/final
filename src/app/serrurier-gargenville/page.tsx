import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gargenville',
  department: '78',
  population: '7500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gargenville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gargenville', 'serrurier urgence gargenville', 'ouverture porte gargenville', 'serrurier 24h gargenville', 'dépannage serrure gargenville']
};

export default function Page() {
  return <CityPage 
    cityName="Gargenville"
    citySlug="gargenville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gargenville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gargenville", "serrurier urgence gargenville", "ouverture porte gargenville", "serrurier 24h gargenville", "dépannage serrure gargenville"]}
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