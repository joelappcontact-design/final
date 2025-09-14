import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mesnil-le-Roi',
  department: '78',
  population: '6500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mesnil-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mesnil-le-roi', 'serrurier urgence mesnil-le-roi', 'ouverture porte mesnil-le-roi', 'serrurier 24h mesnil-le-roi', 'dépannage serrure mesnil-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Mesnil-le-Roi"
    citySlug="mesnil-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mesnil-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mesnil-le-roi", "serrurier urgence mesnil-le-roi", "ouverture porte mesnil-le-roi", "serrurier 24h mesnil-le-roi", "dépannage serrure mesnil-le-roi"]}
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