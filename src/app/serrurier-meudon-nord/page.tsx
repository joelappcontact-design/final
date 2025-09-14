import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meudon-Nord',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meudon-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meudon-nord', 'serrurier urgence meudon-nord', 'ouverture porte meudon-nord', 'serrurier 24h meudon-nord', 'dépannage serrure meudon-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Meudon-Nord"
    citySlug="meudon-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meudon-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meudon-nord", "serrurier urgence meudon-nord", "ouverture porte meudon-nord", "serrurier 24h meudon-nord", "dépannage serrure meudon-nord"]}
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