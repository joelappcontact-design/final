import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chalou-Moulineux',
  department: '91',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chalou-Moulineux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chalou-moulineux', 'serrurier urgence chalou-moulineux', 'ouverture porte chalou-moulineux', 'serrurier 24h chalou-moulineux', 'dépannage serrure chalou-moulineux']
};

export default function Page() {
  return <CityPage 
    cityName="Chalou-Moulineux"
    citySlug="chalou-moulineux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chalou-Moulineux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chalou-moulineux", "serrurier urgence chalou-moulineux", "ouverture porte chalou-moulineux", "serrurier 24h chalou-moulineux", "dépannage serrure chalou-moulineux"]}
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