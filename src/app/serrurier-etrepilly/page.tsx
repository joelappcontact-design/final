import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Etrépilly',
  department: '77',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Etrépilly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier etrepilly', 'serrurier urgence etrepilly', 'ouverture porte etrepilly', 'serrurier 24h etrepilly', 'dépannage serrure etrepilly']
};

export default function Page() {
  return <CityPage 
    cityName="Etrépilly"
    citySlug="etrepilly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Etrépilly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier etrepilly", "serrurier urgence etrepilly", "ouverture porte etrepilly", "serrurier 24h etrepilly", "dépannage serrure etrepilly"]}
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