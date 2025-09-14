import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Champdeuil',
  department: '77',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Champdeuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier champdeuil', 'serrurier urgence champdeuil', 'ouverture porte champdeuil', 'serrurier 24h champdeuil', 'dépannage serrure champdeuil']
};

export default function Page() {
  return <CityPage 
    cityName="Champdeuil"
    citySlug="champdeuil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Champdeuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier champdeuil", "serrurier urgence champdeuil", "ouverture porte champdeuil", "serrurier 24h champdeuil", "dépannage serrure champdeuil"]}
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