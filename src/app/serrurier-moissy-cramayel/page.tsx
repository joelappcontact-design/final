import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moissy-Cramayel',
  department: '78',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moissy-Cramayel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moissy-cramayel', 'serrurier urgence moissy-cramayel', 'ouverture porte moissy-cramayel', 'serrurier 24h moissy-cramayel', 'dépannage serrure moissy-cramayel']
};

export default function Page() {
  return <CityPage 
    cityName="Moissy-Cramayel"
    citySlug="moissy-cramayel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moissy-Cramayel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moissy-cramayel", "serrurier urgence moissy-cramayel", "ouverture porte moissy-cramayel", "serrurier 24h moissy-cramayel", "dépannage serrure moissy-cramayel"]}
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