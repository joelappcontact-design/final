import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pavillons-sous-Bois',
  department: '93',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pavillons-sous-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pavillons-sous-bois', 'serrurier urgence pavillons-sous-bois', 'ouverture porte pavillons-sous-bois', 'serrurier 24h pavillons-sous-bois', 'dépannage serrure pavillons-sous-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Pavillons-sous-Bois"
    citySlug="pavillons-sous-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pavillons-sous-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pavillons-sous-bois", "serrurier urgence pavillons-sous-bois", "ouverture porte pavillons-sous-bois", "serrurier 24h pavillons-sous-bois", "dépannage serrure pavillons-sous-bois"]}
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