import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coupvray',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coupvray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coupvray-77', 'serrurier urgence coupvray-77', 'ouverture porte coupvray-77', 'serrurier 24h coupvray-77', 'dépannage serrure coupvray-77']
};

export default function Page() {
  return <CityPage 
    cityName="Coupvray"
    citySlug="coupvray-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coupvray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coupvray-77", "serrurier urgence coupvray-77", "ouverture porte coupvray-77", "serrurier 24h coupvray-77", "dépannage serrure coupvray-77"]}
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