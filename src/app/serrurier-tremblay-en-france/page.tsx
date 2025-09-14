import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tremblay-en-France',
  department: '93',
  population: '37000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tremblay-en-France 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tremblay-en-france', 'serrurier urgence tremblay-en-france', 'ouverture porte tremblay-en-france', 'serrurier 24h tremblay-en-france', 'dépannage serrure tremblay-en-france']
};

export default function Page() {
  return <CityPage 
    cityName="Tremblay-en-France"
    citySlug="tremblay-en-france"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tremblay-en-France - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tremblay-en-france", "serrurier urgence tremblay-en-france", "ouverture porte tremblay-en-france", "serrurier 24h tremblay-en-france", "dépannage serrure tremblay-en-france"]}
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