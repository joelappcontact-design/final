import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Parmain',
  department: '95',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Parmain 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier parmain-95', 'serrurier urgence parmain-95', 'ouverture porte parmain-95', 'serrurier 24h parmain-95', 'dépannage serrure parmain-95']
};

export default function Page() {
  return <CityPage 
    cityName="Parmain"
    citySlug="parmain-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Parmain - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier parmain-95", "serrurier urgence parmain-95", "ouverture porte parmain-95", "serrurier 24h parmain-95", "dépannage serrure parmain-95"]}
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