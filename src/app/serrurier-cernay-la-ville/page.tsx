import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cernay-la-Ville',
  department: '78',
  population: '1000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cernay-la-Ville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cernay-la-ville', 'serrurier urgence cernay-la-ville', 'ouverture porte cernay-la-ville', 'serrurier 24h cernay-la-ville', 'dépannage serrure cernay-la-ville']
};

export default function Page() {
  return <CityPage 
    cityName="Cernay-la-Ville"
    citySlug="cernay-la-ville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cernay-la-Ville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cernay-la-ville", "serrurier urgence cernay-la-ville", "ouverture porte cernay-la-ville", "serrurier 24h cernay-la-ville", "dépannage serrure cernay-la-ville"]}
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