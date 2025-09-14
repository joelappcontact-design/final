import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moirans-en-Montagne',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moirans-en-Montagne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moirans-en-montagne', 'serrurier urgence moirans-en-montagne', 'ouverture porte moirans-en-montagne', 'serrurier 24h moirans-en-montagne', 'dépannage serrure moirans-en-montagne']
};

export default function Page() {
  return <CityPage 
    cityName="Moirans-en-Montagne"
    citySlug="moirans-en-montagne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moirans-en-Montagne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moirans-en-montagne", "serrurier urgence moirans-en-montagne", "ouverture porte moirans-en-montagne", "serrurier 24h moirans-en-montagne", "dépannage serrure moirans-en-montagne"]}
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