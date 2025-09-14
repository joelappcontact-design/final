import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montrouge-Centre',
  department: '92',
  population: '50000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montrouge-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montrouge-centre', 'serrurier urgence montrouge-centre', 'ouverture porte montrouge-centre', 'serrurier 24h montrouge-centre', 'dépannage serrure montrouge-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Montrouge-Centre"
    citySlug="montrouge-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montrouge-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montrouge-centre", "serrurier urgence montrouge-centre", "ouverture porte montrouge-centre", "serrurier 24h montrouge-centre", "dépannage serrure montrouge-centre"]}
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