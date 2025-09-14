import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moret-Loing-et-Orvanne',
  department: '77',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moret-Loing-et-Orvanne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moret-loing-et-orvanne', 'serrurier urgence moret-loing-et-orvanne', 'ouverture porte moret-loing-et-orvanne', 'serrurier 24h moret-loing-et-orvanne', 'dépannage serrure moret-loing-et-orvanne']
};

export default function Page() {
  return <CityPage 
    cityName="Moret-Loing-et-Orvanne"
    citySlug="moret-loing-et-orvanne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moret-Loing-et-Orvanne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moret-loing-et-orvanne", "serrurier urgence moret-loing-et-orvanne", "ouverture porte moret-loing-et-orvanne", "serrurier 24h moret-loing-et-orvanne", "dépannage serrure moret-loing-et-orvanne"]}
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