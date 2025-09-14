import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rosny-sous-Bois',
  department: '93',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rosny-sous-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rosny-sous-bois-93', 'serrurier urgence rosny-sous-bois-93', 'ouverture porte rosny-sous-bois-93', 'serrurier 24h rosny-sous-bois-93', 'dépannage serrure rosny-sous-bois-93']
};

export default function Page() {
  return <CityPage 
    cityName="Rosny-sous-Bois"
    citySlug="rosny-sous-bois-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rosny-sous-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rosny-sous-bois-93", "serrurier urgence rosny-sous-bois-93", "ouverture porte rosny-sous-bois-93", "serrurier 24h rosny-sous-bois-93", "dépannage serrure rosny-sous-bois-93"]}
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