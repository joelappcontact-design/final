import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Patte-d\'Oie',
  department: '95',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Patte-d\'Oie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier patte-doie-95', 'serrurier urgence patte-doie-95', 'ouverture porte patte-doie-95', 'serrurier 24h patte-doie-95', 'dépannage serrure patte-doie-95']
};

export default function Page() {
  return <CityPage 
    cityName="Patte-d\'Oie"
    citySlug="patte-doie-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Patte-d\'Oie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier patte-doie-95", "serrurier urgence patte-doie-95", "ouverture porte patte-doie-95", "serrurier 24h patte-doie-95", "dépannage serrure patte-doie-95"]}
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