import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Faremoutiers',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Faremoutiers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier faremoutiers', 'serrurier urgence faremoutiers', 'ouverture porte faremoutiers', 'serrurier 24h faremoutiers', 'dépannage serrure faremoutiers']
};

export default function Page() {
  return <CityPage 
    cityName="Faremoutiers"
    citySlug="faremoutiers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Faremoutiers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier faremoutiers", "serrurier urgence faremoutiers", "ouverture porte faremoutiers", "serrurier 24h faremoutiers", "dépannage serrure faremoutiers"]}
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