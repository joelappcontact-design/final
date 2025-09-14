import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Auteuil',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Auteuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier auteuil-78', 'serrurier urgence auteuil-78', 'ouverture porte auteuil-78', 'serrurier 24h auteuil-78', 'dépannage serrure auteuil-78']
};

export default function Page() {
  return <CityPage 
    cityName="Auteuil"
    citySlug="auteuil-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Auteuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier auteuil-78", "serrurier urgence auteuil-78", "ouverture porte auteuil-78", "serrurier 24h auteuil-78", "dépannage serrure auteuil-78"]}
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