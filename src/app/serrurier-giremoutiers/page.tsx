import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Giremoutiers',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Giremoutiers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier giremoutiers', 'serrurier urgence giremoutiers', 'ouverture porte giremoutiers', 'serrurier 24h giremoutiers', 'dépannage serrure giremoutiers']
};

export default function Page() {
  return <CityPage 
    cityName="Giremoutiers"
    citySlug="giremoutiers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Giremoutiers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier giremoutiers", "serrurier urgence giremoutiers", "ouverture porte giremoutiers", "serrurier 24h giremoutiers", "dépannage serrure giremoutiers"]}
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