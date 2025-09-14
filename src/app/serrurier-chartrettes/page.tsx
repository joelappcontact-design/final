import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chartrettes',
  department: '77',
  population: '2700',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chartrettes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chartrettes', 'serrurier urgence chartrettes', 'ouverture porte chartrettes', 'serrurier 24h chartrettes', 'dépannage serrure chartrettes']
};

export default function Page() {
  return <CityPage 
    cityName="Chartrettes"
    citySlug="chartrettes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chartrettes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chartrettes", "serrurier urgence chartrettes", "ouverture porte chartrettes", "serrurier 24h chartrettes", "dépannage serrure chartrettes"]}
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