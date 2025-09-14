import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rouilly',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rouilly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rouilly-91', 'serrurier urgence rouilly-91', 'ouverture porte rouilly-91', 'serrurier 24h rouilly-91', 'dépannage serrure rouilly-91']
};

export default function Page() {
  return <CityPage 
    cityName="Rouilly"
    citySlug="rouilly-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rouilly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rouilly-91", "serrurier urgence rouilly-91", "ouverture porte rouilly-91", "serrurier 24h rouilly-91", "dépannage serrure rouilly-91"]}
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