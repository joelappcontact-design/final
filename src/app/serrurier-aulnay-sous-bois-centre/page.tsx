import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aulnay-sous-Bois-Centre',
  department: '93',
  population: '85000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aulnay-sous-Bois-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aulnay-sous-bois-centre', 'serrurier urgence aulnay-sous-bois-centre', 'ouverture porte aulnay-sous-bois-centre', 'serrurier 24h aulnay-sous-bois-centre', 'dépannage serrure aulnay-sous-bois-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Aulnay-sous-Bois-Centre"
    citySlug="aulnay-sous-bois-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aulnay-sous-Bois-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aulnay-sous-bois-centre", "serrurier urgence aulnay-sous-bois-centre", "ouverture porte aulnay-sous-bois-centre", "serrurier 24h aulnay-sous-bois-centre", "dépannage serrure aulnay-sous-bois-centre"]}
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