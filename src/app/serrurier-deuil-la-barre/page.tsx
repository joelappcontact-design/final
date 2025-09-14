import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Deuil-la-Barre',
  department: '95',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Deuil-la-Barre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier deuil-la-barre', 'serrurier urgence deuil-la-barre', 'ouverture porte deuil-la-barre', 'serrurier 24h deuil-la-barre', 'dépannage serrure deuil-la-barre']
};

export default function Page() {
  return <CityPage 
    cityName="Deuil-la-Barre"
    citySlug="deuil-la-barre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Deuil-la-Barre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier deuil-la-barre", "serrurier urgence deuil-la-barre", "ouverture porte deuil-la-barre", "serrurier 24h deuil-la-barre", "dépannage serrure deuil-la-barre"]}
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