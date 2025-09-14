import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Massy-Centre',
  department: '91',
  population: '48000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Massy-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier massy-centre', 'serrurier urgence massy-centre', 'ouverture porte massy-centre', 'serrurier 24h massy-centre', 'dépannage serrure massy-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Massy-Centre"
    citySlug="massy-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Massy-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier massy-centre", "serrurier urgence massy-centre", "ouverture porte massy-centre", "serrurier 24h massy-centre", "dépannage serrure massy-centre"]}
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