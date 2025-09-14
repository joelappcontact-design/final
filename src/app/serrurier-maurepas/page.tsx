import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Maurepas',
  department: '78',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Maurepas 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier maurepas', 'serrurier urgence maurepas', 'ouverture porte maurepas', 'serrurier 24h maurepas', 'dépannage serrure maurepas']
};

export default function Page() {
  return <CityPage 
    cityName="Maurepas"
    citySlug="maurepas"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Maurepas - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier maurepas", "serrurier urgence maurepas", "ouverture porte maurepas", "serrurier 24h maurepas", "dépannage serrure maurepas"]}
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