import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Malay-le-Petit',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Malay-le-Petit 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier malay-le-petit', 'serrurier urgence malay-le-petit', 'ouverture porte malay-le-petit', 'serrurier 24h malay-le-petit', 'dépannage serrure malay-le-petit']
};

export default function Page() {
  return <CityPage 
    cityName="Malay-le-Petit"
    citySlug="malay-le-petit"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Malay-le-Petit - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier malay-le-petit", "serrurier urgence malay-le-petit", "ouverture porte malay-le-petit", "serrurier 24h malay-le-petit", "dépannage serrure malay-le-petit"]}
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