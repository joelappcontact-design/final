import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mennecy',
  department: '91',
  population: '14000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mennecy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mennecy', 'serrurier urgence mennecy', 'ouverture porte mennecy', 'serrurier 24h mennecy', 'dépannage serrure mennecy']
};

export default function Page() {
  return <CityPage 
    cityName="Mennecy"
    citySlug="mennecy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mennecy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mennecy", "serrurier urgence mennecy", "ouverture porte mennecy", "serrurier 24h mennecy", "dépannage serrure mennecy"]}
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