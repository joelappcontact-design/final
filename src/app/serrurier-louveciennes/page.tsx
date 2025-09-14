import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Louveciennes',
  department: '78',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Louveciennes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier louveciennes', 'serrurier urgence louveciennes', 'ouverture porte louveciennes', 'serrurier 24h louveciennes', 'dépannage serrure louveciennes']
};

export default function Page() {
  return <CityPage 
    cityName="Louveciennes"
    citySlug="louveciennes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Louveciennes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier louveciennes", "serrurier urgence louveciennes", "ouverture porte louveciennes", "serrurier 24h louveciennes", "dépannage serrure louveciennes"]}
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