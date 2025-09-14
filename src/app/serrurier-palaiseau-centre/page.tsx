import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Palaiseau-Centre',
  department: '91',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Palaiseau-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier palaiseau-centre', 'serrurier urgence palaiseau-centre', 'ouverture porte palaiseau-centre', 'serrurier 24h palaiseau-centre', 'dépannage serrure palaiseau-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Palaiseau-Centre"
    citySlug="palaiseau-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Palaiseau-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier palaiseau-centre", "serrurier urgence palaiseau-centre", "ouverture porte palaiseau-centre", "serrurier 24h palaiseau-centre", "dépannage serrure palaiseau-centre"]}
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