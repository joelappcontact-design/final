import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Faverolles',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Faverolles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier faverolles', 'serrurier urgence faverolles', 'ouverture porte faverolles', 'serrurier 24h faverolles', 'dépannage serrure faverolles']
};

export default function Page() {
  return <CityPage 
    cityName="Faverolles"
    citySlug="faverolles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Faverolles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier faverolles", "serrurier urgence faverolles", "ouverture porte faverolles", "serrurier 24h faverolles", "dépannage serrure faverolles"]}
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