import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-aux-Cailles',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-aux-Cailles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-aux-cailles', 'serrurier urgence boissy-aux-cailles', 'ouverture porte boissy-aux-cailles', 'serrurier 24h boissy-aux-cailles', 'dépannage serrure boissy-aux-cailles']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-aux-Cailles"
    citySlug="boissy-aux-cailles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-aux-Cailles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-aux-cailles", "serrurier urgence boissy-aux-cailles", "ouverture porte boissy-aux-cailles", "serrurier 24h boissy-aux-cailles", "dépannage serrure boissy-aux-cailles"]}
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