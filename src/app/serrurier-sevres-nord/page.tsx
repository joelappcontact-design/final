import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sèvres-Nord',
  department: '92',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sèvres-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sevres-nord', 'serrurier urgence sevres-nord', 'ouverture porte sevres-nord', 'serrurier 24h sevres-nord', 'dépannage serrure sevres-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Sèvres-Nord"
    citySlug="sevres-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sèvres-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sevres-nord", "serrurier urgence sevres-nord", "ouverture porte sevres-nord", "serrurier 24h sevres-nord", "dépannage serrure sevres-nord"]}
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