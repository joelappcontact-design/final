import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Évecquemont',
  department: '78',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Évecquemont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier evecquemont', 'serrurier urgence evecquemont', 'ouverture porte evecquemont', 'serrurier 24h evecquemont', 'dépannage serrure evecquemont']
};

export default function Page() {
  return <CityPage 
    cityName="Évecquemont"
    citySlug="evecquemont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Évecquemont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier evecquemont", "serrurier urgence evecquemont", "ouverture porte evecquemont", "serrurier 24h evecquemont", "dépannage serrure evecquemont"]}
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