import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Carrières-sous-Poissy',
  department: '78',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Carrières-sous-Poissy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier carrieres-sous-poissy', 'serrurier urgence carrieres-sous-poissy', 'ouverture porte carrieres-sous-poissy', 'serrurier 24h carrieres-sous-poissy', 'dépannage serrure carrieres-sous-poissy']
};

export default function Page() {
  return <CityPage 
    cityName="Carrières-sous-Poissy"
    citySlug="carrieres-sous-poissy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Carrières-sous-Poissy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier carrieres-sous-poissy", "serrurier urgence carrieres-sous-poissy", "ouverture porte carrieres-sous-poissy", "serrurier 24h carrieres-sous-poissy", "dépannage serrure carrieres-sous-poissy"]}
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