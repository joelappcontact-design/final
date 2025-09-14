import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Hondevilliers',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Hondevilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier hondevilliers', 'serrurier urgence hondevilliers', 'ouverture porte hondevilliers', 'serrurier 24h hondevilliers', 'dépannage serrure hondevilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Hondevilliers"
    citySlug="hondevilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Hondevilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier hondevilliers", "serrurier urgence hondevilliers", "ouverture porte hondevilliers", "serrurier 24h hondevilliers", "dépannage serrure hondevilliers"]}
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