import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bailly-Romainvilliers',
  department: '77',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bailly-Romainvilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bailly-romainvilliers', 'serrurier urgence bailly-romainvilliers', 'ouverture porte bailly-romainvilliers', 'serrurier 24h bailly-romainvilliers', 'dépannage serrure bailly-romainvilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Bailly-Romainvilliers"
    citySlug="bailly-romainvilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bailly-Romainvilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bailly-romainvilliers", "serrurier urgence bailly-romainvilliers", "ouverture porte bailly-romainvilliers", "serrurier 24h bailly-romainvilliers", "dépannage serrure bailly-romainvilliers"]}
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