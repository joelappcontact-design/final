import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Frétoy',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Frétoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fretoy-91', 'serrurier urgence fretoy-91', 'ouverture porte fretoy-91', 'serrurier 24h fretoy-91', 'dépannage serrure fretoy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Frétoy"
    citySlug="fretoy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Frétoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fretoy-91", "serrurier urgence fretoy-91", "ouverture porte fretoy-91", "serrurier 24h fretoy-91", "dépannage serrure fretoy-91"]}
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