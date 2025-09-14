import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boigneville',
  department: '91',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boigneville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boigneville', 'serrurier urgence boigneville', 'ouverture porte boigneville', 'serrurier 24h boigneville', 'dépannage serrure boigneville']
};

export default function Page() {
  return <CityPage 
    cityName="Boigneville"
    citySlug="boigneville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boigneville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boigneville", "serrurier urgence boigneville", "ouverture porte boigneville", "serrurier 24h boigneville", "dépannage serrure boigneville"]}
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