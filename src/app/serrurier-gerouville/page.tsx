import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gérouville',
  department: '77',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gérouville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gerouville', 'serrurier urgence gerouville', 'ouverture porte gerouville', 'serrurier 24h gerouville', 'dépannage serrure gerouville']
};

export default function Page() {
  return <CityPage 
    cityName="Gérouville"
    citySlug="gerouville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gérouville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gerouville", "serrurier urgence gerouville", "ouverture porte gerouville", "serrurier 24h gerouville", "dépannage serrure gerouville"]}
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