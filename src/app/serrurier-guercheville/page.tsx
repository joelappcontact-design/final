import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guercheville',
  department: '77',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guercheville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guercheville', 'serrurier urgence guercheville', 'ouverture porte guercheville', 'serrurier 24h guercheville', 'dépannage serrure guercheville']
};

export default function Page() {
  return <CityPage 
    cityName="Guercheville"
    citySlug="guercheville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guercheville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guercheville", "serrurier urgence guercheville", "ouverture porte guercheville", "serrurier 24h guercheville", "dépannage serrure guercheville"]}
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