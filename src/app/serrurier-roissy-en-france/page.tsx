import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Roissy-en-France',
  department: '95',
  population: '2500',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de l\'aéroport', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Roissy-en-France 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier roissy-en-france', 'serrurier urgence roissy-en-france', 'ouverture porte roissy-en-france', 'serrurier 24h roissy-en-france', 'dépannage serrure roissy-en-france']
};

export default function Page() {
  return <CityPage 
    cityName="Roissy-en-France"
    citySlug="roissy-en-france"
    zones={['Centre-ville', 'Quartier de l\'aéroport', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Roissy-en-France - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier roissy-en-france", "serrurier urgence roissy-en-france", "ouverture porte roissy-en-france", "serrurier 24h roissy-en-france", "dépannage serrure roissy-en-france"]}
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