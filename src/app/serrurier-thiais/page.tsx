import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Thiais',
  department: '94',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Thiais 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier thiais', 'serrurier urgence thiais', 'ouverture porte thiais', 'serrurier 24h thiais', 'dépannage serrure thiais']
};

export default function Page() {
  return <CityPage 
    cityName="Thiais"
    citySlug="thiais"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Thiais - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier thiais", "serrurier urgence thiais", "ouverture porte thiais", "serrurier 24h thiais", "dépannage serrure thiais"]}
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