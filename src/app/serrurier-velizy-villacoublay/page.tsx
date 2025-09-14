import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vélizy-Villacoublay',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vélizy-Villacoublay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier velizy-villacoublay', 'serrurier urgence velizy-villacoublay', 'ouverture porte velizy-villacoublay', 'serrurier 24h velizy-villacoublay', 'dépannage serrure velizy-villacoublay']
};

export default function Page() {
  return <CityPage 
    cityName="Vélizy-Villacoublay"
    citySlug="velizy-villacoublay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vélizy-Villacoublay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier velizy-villacoublay", "serrurier urgence velizy-villacoublay", "ouverture porte velizy-villacoublay", "serrurier 24h velizy-villacoublay", "dépannage serrure velizy-villacoublay"]}
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