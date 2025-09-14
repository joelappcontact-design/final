import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coupvray',
  department: '93',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coupvray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coupvray-93', 'serrurier urgence coupvray-93', 'ouverture porte coupvray-93', 'serrurier 24h coupvray-93', 'dépannage serrure coupvray-93']
};

export default function Page() {
  return <CityPage 
    cityName="Coupvray"
    citySlug="coupvray-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coupvray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coupvray-93", "serrurier urgence coupvray-93", "ouverture porte coupvray-93", "serrurier 24h coupvray-93", "dépannage serrure coupvray-93"]}
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