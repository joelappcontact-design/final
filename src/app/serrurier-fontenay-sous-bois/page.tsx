import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-sous-Bois',
  department: '94',
  population: '53000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-sous-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-sous-bois', 'serrurier urgence fontenay-sous-bois', 'ouverture porte fontenay-sous-bois', 'serrurier 24h fontenay-sous-bois', 'dépannage serrure fontenay-sous-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-sous-Bois"
    citySlug="fontenay-sous-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-sous-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-sous-bois", "serrurier urgence fontenay-sous-bois", "ouverture porte fontenay-sous-bois", "serrurier 24h fontenay-sous-bois", "dépannage serrure fontenay-sous-bois"]}
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