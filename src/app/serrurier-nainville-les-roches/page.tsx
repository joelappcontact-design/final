import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nainville-les-Roches',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nainville-les-Roches 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nainville-les-roches', 'serrurier urgence nainville-les-roches', 'ouverture porte nainville-les-roches', 'serrurier 24h nainville-les-roches', 'dépannage serrure nainville-les-roches']
};

export default function Page() {
  return <CityPage 
    cityName="Nainville-les-Roches"
    citySlug="nainville-les-roches"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nainville-les-Roches - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nainville-les-roches", "serrurier urgence nainville-les-roches", "ouverture porte nainville-les-roches", "serrurier 24h nainville-les-roches", "dépannage serrure nainville-les-roches"]}
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