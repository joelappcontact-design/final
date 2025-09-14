import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-le-Guesdier',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-le-Guesdier 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-le-guesdier-91', 'serrurier urgence montigny-le-guesdier-91', 'ouverture porte montigny-le-guesdier-91', 'serrurier 24h montigny-le-guesdier-91', 'dépannage serrure montigny-le-guesdier-91']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-le-Guesdier"
    citySlug="montigny-le-guesdier-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-le-Guesdier - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-le-guesdier-91", "serrurier urgence montigny-le-guesdier-91", "ouverture porte montigny-le-guesdier-91", "serrurier 24h montigny-le-guesdier-91", "dépannage serrure montigny-le-guesdier-91"]}
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