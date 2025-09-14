import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Juvisy-sur-Orge',
  department: '91',
  population: '17000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Juvisy-sur-Orge 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier juvisy-sur-orge', 'serrurier urgence juvisy-sur-orge', 'ouverture porte juvisy-sur-orge', 'serrurier 24h juvisy-sur-orge', 'dépannage serrure juvisy-sur-orge']
};

export default function Page() {
  return <CityPage 
    cityName="Juvisy-sur-Orge"
    citySlug="juvisy-sur-orge"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Juvisy-sur-Orge - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier juvisy-sur-orge", "serrurier urgence juvisy-sur-orge", "ouverture porte juvisy-sur-orge", "serrurier 24h juvisy-sur-orge", "dépannage serrure juvisy-sur-orge"]}
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