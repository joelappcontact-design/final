import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gennevilliers',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gennevilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gennevilliers', 'serrurier urgence gennevilliers', 'ouverture porte gennevilliers', 'serrurier 24h gennevilliers', 'dépannage serrure gennevilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Gennevilliers"
    citySlug="gennevilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gennevilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gennevilliers", "serrurier urgence gennevilliers", "ouverture porte gennevilliers", "serrurier 24h gennevilliers", "dépannage serrure gennevilliers"]}
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