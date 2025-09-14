import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ermenonville',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ermenonville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ermenonville', 'serrurier urgence ermenonville', 'ouverture porte ermenonville', 'serrurier 24h ermenonville', 'dépannage serrure ermenonville']
};

export default function Page() {
  return <CityPage 
    cityName="Ermenonville"
    citySlug="ermenonville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ermenonville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ermenonville", "serrurier urgence ermenonville", "ouverture porte ermenonville", "serrurier 24h ermenonville", "dépannage serrure ermenonville"]}
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