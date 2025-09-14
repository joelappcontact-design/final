import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Maurecourt',
  department: '78',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Maurecourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier maurecourt', 'serrurier urgence maurecourt', 'ouverture porte maurecourt', 'serrurier 24h maurecourt', 'dépannage serrure maurecourt']
};

export default function Page() {
  return <CityPage 
    cityName="Maurecourt"
    citySlug="maurecourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Maurecourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier maurecourt", "serrurier urgence maurecourt", "ouverture porte maurecourt", "serrurier 24h maurecourt", "dépannage serrure maurecourt"]}
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