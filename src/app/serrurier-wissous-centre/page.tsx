import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Wissous-Centre',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Wissous-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier wissous-centre', 'serrurier urgence wissous-centre', 'ouverture porte wissous-centre', 'serrurier 24h wissous-centre', 'dépannage serrure wissous-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Wissous-Centre"
    citySlug="wissous-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Wissous-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier wissous-centre", "serrurier urgence wissous-centre", "ouverture porte wissous-centre", "serrurier 24h wissous-centre", "dépannage serrure wissous-centre"]}
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