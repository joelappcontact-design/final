import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontaine-la-Rivière',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontaine-la-Rivière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontaine-la-riviere', 'serrurier urgence fontaine-la-riviere', 'ouverture porte fontaine-la-riviere', 'serrurier 24h fontaine-la-riviere', 'dépannage serrure fontaine-la-riviere']
};

export default function Page() {
  return <CityPage 
    cityName="Fontaine-la-Rivière"
    citySlug="fontaine-la-riviere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontaine-la-Rivière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontaine-la-riviere", "serrurier urgence fontaine-la-riviere", "ouverture porte fontaine-la-riviere", "serrurier 24h fontaine-la-riviere", "dépannage serrure fontaine-la-riviere"]}
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