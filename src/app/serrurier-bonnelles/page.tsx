import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bonnelles',
  department: '78',
  population: '2000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bonnelles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bonnelles', 'serrurier urgence bonnelles', 'ouverture porte bonnelles', 'serrurier 24h bonnelles', 'dépannage serrure bonnelles']
};

export default function Page() {
  return <CityPage 
    cityName="Bonnelles"
    citySlug="bonnelles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bonnelles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bonnelles", "serrurier urgence bonnelles", "ouverture porte bonnelles", "serrurier 24h bonnelles", "dépannage serrure bonnelles"]}
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