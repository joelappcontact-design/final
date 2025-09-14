import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ville-d\'Avray',
  department: '92',
  population: '12000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ville-d\'Avray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ville-davray', 'serrurier urgence ville-davray', 'ouverture porte ville-davray', 'serrurier 24h ville-davray', 'dépannage serrure ville-davray']
};

export default function Page() {
  return <CityPage 
    cityName="Ville-d\'Avray"
    citySlug="ville-davray"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ville-d\'Avray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ville-davray", "serrurier urgence ville-davray", "ouverture porte ville-davray", "serrurier 24h ville-davray", "dépannage serrure ville-davray"]}
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