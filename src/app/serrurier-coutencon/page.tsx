import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coutençon',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coutençon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coutencon', 'serrurier urgence coutencon', 'ouverture porte coutencon', 'serrurier 24h coutencon', 'dépannage serrure coutencon']
};

export default function Page() {
  return <CityPage 
    cityName="Coutençon"
    citySlug="coutencon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coutençon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coutencon", "serrurier urgence coutencon", "ouverture porte coutencon", "serrurier 24h coutencon", "dépannage serrure coutencon"]}
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