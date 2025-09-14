import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-le-Guesdier',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-le-Guesdier 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-le-guesdier', 'serrurier urgence montigny-le-guesdier', 'ouverture porte montigny-le-guesdier', 'serrurier 24h montigny-le-guesdier', 'dépannage serrure montigny-le-guesdier']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-le-Guesdier"
    citySlug="montigny-le-guesdier"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-le-Guesdier - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-le-guesdier", "serrurier urgence montigny-le-guesdier", "ouverture porte montigny-le-guesdier", "serrurier 24h montigny-le-guesdier", "dépannage serrure montigny-le-guesdier"]}
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