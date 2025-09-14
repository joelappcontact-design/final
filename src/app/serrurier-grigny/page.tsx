import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grigny',
  department: '91',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grigny', 'serrurier urgence grigny', 'ouverture porte grigny', 'serrurier 24h grigny', 'dépannage serrure grigny']
};

export default function Page() {
  return <CityPage 
    cityName="Grigny"
    citySlug="grigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grigny", "serrurier urgence grigny", "ouverture porte grigny", "serrurier 24h grigny", "dépannage serrure grigny"]}
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