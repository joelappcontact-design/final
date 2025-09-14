import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jumeauville',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jumeauville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jumeauville', 'serrurier urgence jumeauville', 'ouverture porte jumeauville', 'serrurier 24h jumeauville', 'dépannage serrure jumeauville']
};

export default function Page() {
  return <CityPage 
    cityName="Jumeauville"
    citySlug="jumeauville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jumeauville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jumeauville", "serrurier urgence jumeauville", "ouverture porte jumeauville", "serrurier 24h jumeauville", "dépannage serrure jumeauville"]}
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