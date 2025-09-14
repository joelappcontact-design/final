import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moussy-le-Vieux',
  department: '77',
  population: '2500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moussy-le-Vieux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moussy-le-vieux', 'serrurier urgence moussy-le-vieux', 'ouverture porte moussy-le-vieux', 'serrurier 24h moussy-le-vieux', 'dépannage serrure moussy-le-vieux']
};

export default function Page() {
  return <CityPage 
    cityName="Moussy-le-Vieux"
    citySlug="moussy-le-vieux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moussy-le-Vieux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moussy-le-vieux", "serrurier urgence moussy-le-vieux", "ouverture porte moussy-le-vieux", "serrurier 24h moussy-le-vieux", "dépannage serrure moussy-le-vieux"]}
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