import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Méridon',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Méridon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meridon', 'serrurier urgence meridon', 'ouverture porte meridon', 'serrurier 24h meridon', 'dépannage serrure meridon']
};

export default function Page() {
  return <CityPage 
    cityName="Méridon"
    citySlug="meridon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Méridon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meridon", "serrurier urgence meridon", "ouverture porte meridon", "serrurier 24h meridon", "dépannage serrure meridon"]}
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