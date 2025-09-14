import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Etiolles',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Etiolles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier etiolles', 'serrurier urgence etiolles', 'ouverture porte etiolles', 'serrurier 24h etiolles', 'dépannage serrure etiolles']
};

export default function Page() {
  return <CityPage 
    cityName="Etiolles"
    citySlug="etiolles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Etiolles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier etiolles", "serrurier urgence etiolles", "ouverture porte etiolles", "serrurier 24h etiolles", "dépannage serrure etiolles"]}
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