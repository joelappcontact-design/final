import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aulnay-sous-Bois',
  department: '93',
  population: '85000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aulnay-sous-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aulnay-sous-bois', 'serrurier urgence aulnay-sous-bois', 'ouverture porte aulnay-sous-bois', 'serrurier 24h aulnay-sous-bois', 'dépannage serrure aulnay-sous-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Aulnay-sous-Bois"
    citySlug="aulnay-sous-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aulnay-sous-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aulnay-sous-bois", "serrurier urgence aulnay-sous-bois", "ouverture porte aulnay-sous-bois", "serrurier 24h aulnay-sous-bois", "dépannage serrure aulnay-sous-bois"]}
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