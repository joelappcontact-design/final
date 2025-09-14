import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sarcelles-Centre',
  department: '95',
  population: '60000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sarcelles-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sarcelles-centre', 'serrurier urgence sarcelles-centre', 'ouverture porte sarcelles-centre', 'serrurier 24h sarcelles-centre', 'dépannage serrure sarcelles-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Sarcelles-Centre"
    citySlug="sarcelles-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sarcelles-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sarcelles-centre", "serrurier urgence sarcelles-centre", "ouverture porte sarcelles-centre", "serrurier 24h sarcelles-centre", "dépannage serrure sarcelles-centre"]}
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