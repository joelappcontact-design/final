import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chamarande',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chamarande 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chamarande', 'serrurier urgence chamarande', 'ouverture porte chamarande', 'serrurier 24h chamarande', 'dépannage serrure chamarande']
};

export default function Page() {
  return <CityPage 
    cityName="Chamarande"
    citySlug="chamarande"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chamarande - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chamarande", "serrurier urgence chamarande", "ouverture porte chamarande", "serrurier 24h chamarande", "dépannage serrure chamarande"]}
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