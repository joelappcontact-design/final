import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jaignes',
  department: '77',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jaignes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jaignes', 'serrurier urgence jaignes', 'ouverture porte jaignes', 'serrurier 24h jaignes', 'dépannage serrure jaignes']
};

export default function Page() {
  return <CityPage 
    cityName="Jaignes"
    citySlug="jaignes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jaignes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jaignes", "serrurier urgence jaignes", "ouverture porte jaignes", "serrurier 24h jaignes", "dépannage serrure jaignes"]}
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