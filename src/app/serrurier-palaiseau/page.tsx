import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Palaiseau',
  department: '92',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Palaiseau 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier palaiseau', 'serrurier urgence palaiseau', 'ouverture porte palaiseau', 'serrurier 24h palaiseau', 'dépannage serrure palaiseau']
};

export default function Page() {
  return <CityPage 
    cityName="Palaiseau"
    citySlug="palaiseau"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Palaiseau - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier palaiseau", "serrurier urgence palaiseau", "ouverture porte palaiseau", "serrurier 24h palaiseau", "dépannage serrure palaiseau"]}
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