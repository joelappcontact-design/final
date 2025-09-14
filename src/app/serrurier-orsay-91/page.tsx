import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orsay',
  department: '91',
  population: '17000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orsay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orsay-91', 'serrurier urgence orsay-91', 'ouverture porte orsay-91', 'serrurier 24h orsay-91', 'dépannage serrure orsay-91']
};

export default function Page() {
  return <CityPage 
    cityName="Orsay"
    citySlug="orsay-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orsay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orsay-91", "serrurier urgence orsay-91", "ouverture porte orsay-91", "serrurier 24h orsay-91", "dépannage serrure orsay-91"]}
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