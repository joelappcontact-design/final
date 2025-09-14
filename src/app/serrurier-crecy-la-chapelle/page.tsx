import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Crécy-la-Chapelle',
  department: '77',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Crécy-la-Chapelle 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier crecy-la-chapelle', 'serrurier urgence crecy-la-chapelle', 'ouverture porte crecy-la-chapelle', 'serrurier 24h crecy-la-chapelle', 'dépannage serrure crecy-la-chapelle']
};

export default function Page() {
  return <CityPage 
    cityName="Crécy-la-Chapelle"
    citySlug="crecy-la-chapelle"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Crécy-la-Chapelle - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier crecy-la-chapelle", "serrurier urgence crecy-la-chapelle", "ouverture porte crecy-la-chapelle", "serrurier 24h crecy-la-chapelle", "dépannage serrure crecy-la-chapelle"]}
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