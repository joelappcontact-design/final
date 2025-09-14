import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meaux',
  department: '77',
  population: '55000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meaux-77', 'serrurier urgence meaux-77', 'ouverture porte meaux-77', 'serrurier 24h meaux-77', 'dépannage serrure meaux-77']
};

export default function Page() {
  return <CityPage 
    cityName="Meaux"
    citySlug="meaux-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meaux-77", "serrurier urgence meaux-77", "ouverture porte meaux-77", "serrurier 24h meaux-77", "dépannage serrure meaux-77"]}
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