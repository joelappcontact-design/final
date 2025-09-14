import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Pavillons-sous-Bois',
  department: '93',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Pavillons-sous-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-pavillons-sous-bois', 'serrurier urgence les-pavillons-sous-bois', 'ouverture porte les-pavillons-sous-bois', 'serrurier 24h les-pavillons-sous-bois', 'dépannage serrure les-pavillons-sous-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Les Pavillons-sous-Bois"
    citySlug="les-pavillons-sous-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Pavillons-sous-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-pavillons-sous-bois", "serrurier urgence les-pavillons-sous-bois", "ouverture porte les-pavillons-sous-bois", "serrurier 24h les-pavillons-sous-bois", "dépannage serrure les-pavillons-sous-bois"]}
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