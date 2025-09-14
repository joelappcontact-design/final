import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orsay-Centre',
  department: '91',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orsay-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orsay-centre', 'serrurier urgence orsay-centre', 'ouverture porte orsay-centre', 'serrurier 24h orsay-centre', 'dépannage serrure orsay-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Orsay-Centre"
    citySlug="orsay-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orsay-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orsay-centre", "serrurier urgence orsay-centre", "ouverture porte orsay-centre", "serrurier 24h orsay-centre", "dépannage serrure orsay-centre"]}
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