import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moussy-le-Neuf',
  department: '77',
  population: '4500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moussy-le-Neuf 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moussy-le-neuf', 'serrurier urgence moussy-le-neuf', 'ouverture porte moussy-le-neuf', 'serrurier 24h moussy-le-neuf', 'dépannage serrure moussy-le-neuf']
};

export default function Page() {
  return <CityPage 
    cityName="Moussy-le-Neuf"
    citySlug="moussy-le-neuf"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moussy-le-Neuf - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moussy-le-neuf", "serrurier urgence moussy-le-neuf", "ouverture porte moussy-le-neuf", "serrurier 24h moussy-le-neuf", "dépannage serrure moussy-le-neuf"]}
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