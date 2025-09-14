import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dannemois',
  department: '77',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dannemois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dannemois', 'serrurier urgence dannemois', 'ouverture porte dannemois', 'serrurier 24h dannemois', 'dépannage serrure dannemois']
};

export default function Page() {
  return <CityPage 
    cityName="Dannemois"
    citySlug="dannemois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dannemois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dannemois", "serrurier urgence dannemois", "ouverture porte dannemois", "serrurier 24h dannemois", "dépannage serrure dannemois"]}
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