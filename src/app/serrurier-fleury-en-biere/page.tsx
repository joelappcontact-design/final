import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fleury-en-Bière',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fleury-en-Bière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fleury-en-biere', 'serrurier urgence fleury-en-biere', 'ouverture porte fleury-en-biere', 'serrurier 24h fleury-en-biere', 'dépannage serrure fleury-en-biere']
};

export default function Page() {
  return <CityPage 
    cityName="Fleury-en-Bière"
    citySlug="fleury-en-biere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fleury-en-Bière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fleury-en-biere", "serrurier urgence fleury-en-biere", "ouverture porte fleury-en-biere", "serrurier 24h fleury-en-biere", "dépannage serrure fleury-en-biere"]}
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