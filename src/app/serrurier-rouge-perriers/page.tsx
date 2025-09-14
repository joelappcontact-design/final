import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rouge-Perriers',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rouge-Perriers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rouge-perriers', 'serrurier urgence rouge-perriers', 'ouverture porte rouge-perriers', 'serrurier 24h rouge-perriers', 'dépannage serrure rouge-perriers']
};

export default function Page() {
  return <CityPage 
    cityName="Rouge-Perriers"
    citySlug="rouge-perriers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rouge-Perriers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rouge-perriers", "serrurier urgence rouge-perriers", "ouverture porte rouge-perriers", "serrurier 24h rouge-perriers", "dépannage serrure rouge-perriers"]}
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