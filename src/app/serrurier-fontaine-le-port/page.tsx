import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontaine-le-Port',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontaine-le-Port 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontaine-le-port', 'serrurier urgence fontaine-le-port', 'ouverture porte fontaine-le-port', 'serrurier 24h fontaine-le-port', 'dépannage serrure fontaine-le-port']
};

export default function Page() {
  return <CityPage 
    cityName="Fontaine-le-Port"
    citySlug="fontaine-le-port"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontaine-le-Port - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontaine-le-port", "serrurier urgence fontaine-le-port", "ouverture porte fontaine-le-port", "serrurier 24h fontaine-le-port", "dépannage serrure fontaine-le-port"]}
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