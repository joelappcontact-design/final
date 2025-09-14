import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mortcerf',
  department: '77',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mortcerf 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mortcerf', 'serrurier urgence mortcerf', 'ouverture porte mortcerf', 'serrurier 24h mortcerf', 'dépannage serrure mortcerf']
};

export default function Page() {
  return <CityPage 
    cityName="Mortcerf"
    citySlug="mortcerf"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mortcerf - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mortcerf", "serrurier urgence mortcerf", "ouverture porte mortcerf", "serrurier 24h mortcerf", "dépannage serrure mortcerf"]}
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