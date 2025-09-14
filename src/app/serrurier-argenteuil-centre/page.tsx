import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Argenteuil-Centre',
  department: '95',
  population: '110000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Argenteuil-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier argenteuil-centre', 'serrurier urgence argenteuil-centre', 'ouverture porte argenteuil-centre', 'serrurier 24h argenteuil-centre', 'dépannage serrure argenteuil-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Argenteuil-Centre"
    citySlug="argenteuil-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Argenteuil-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier argenteuil-centre", "serrurier urgence argenteuil-centre", "ouverture porte argenteuil-centre", "serrurier 24h argenteuil-centre", "dépannage serrure argenteuil-centre"]}
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