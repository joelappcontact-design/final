import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Melun',
  department: '77',
  population: '41000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Melun 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier melun-77', 'serrurier urgence melun-77', 'ouverture porte melun-77', 'serrurier 24h melun-77', 'dépannage serrure melun-77']
};

export default function Page() {
  return <CityPage 
    cityName="Melun"
    citySlug="melun-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Melun - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier melun-77", "serrurier urgence melun-77", "ouverture porte melun-77", "serrurier 24h melun-77", "dépannage serrure melun-77"]}
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