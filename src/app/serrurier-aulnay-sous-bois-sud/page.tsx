import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aulnay-sous-Bois Sud',
  department: '93',
  population: '42500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aulnay-sous-Bois Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aulnay-sous-bois-sud', 'serrurier urgence aulnay-sous-bois-sud', 'ouverture porte aulnay-sous-bois-sud', 'serrurier 24h aulnay-sous-bois-sud', 'dépannage serrure aulnay-sous-bois-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Aulnay-sous-Bois Sud"
    citySlug="aulnay-sous-bois-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aulnay-sous-Bois Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aulnay-sous-bois-sud", "serrurier urgence aulnay-sous-bois-sud", "ouverture porte aulnay-sous-bois-sud", "serrurier 24h aulnay-sous-bois-sud", "dépannage serrure aulnay-sous-bois-sud"]}
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