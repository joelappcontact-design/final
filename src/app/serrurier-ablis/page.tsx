import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ablis',
  department: '78',
  population: '3000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ablis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ablis', 'serrurier urgence ablis', 'ouverture porte ablis', 'serrurier 24h ablis', 'dépannage serrure ablis']
};

export default function Page() {
  return <CityPage 
    cityName="Ablis"
    citySlug="ablis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ablis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ablis", "serrurier urgence ablis", "ouverture porte ablis", "serrurier 24h ablis", "dépannage serrure ablis"]}
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